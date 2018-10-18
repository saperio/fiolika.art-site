const path = require('path').posix;
const glob = require('fast-glob');
const fse = require('fs-extra');
const sharp = require('sharp');

const srcStatic = './resources/static/**';
const srcIndex = './src/index-prod.html';
const srcImages = './resources';
const destRoot = './build';
const destImages = 'img';
const destMeta = 'images.json';
const smallImageSize = 430;
const largeImageSize = 1000;
let imageIndex = 0;
let processTimeAll = 0;

run();

async function run() {
	// copy static
	await processStaticFiles();

	// remove images dest dir contents
	await fse.emptyDir(path.join(destRoot, destImages));

	// process images
	console.log('process images:');

	const meta = {};
	const sectionsList = await glob(`${srcImages}/section*`, { onlyDirectories: true });
	for (let section of sectionsList) {
		let imageList = await glob([`${section}/*.jpg`, `${section}/*.png`]);
		let sectionName = path.basename(section);

		let sectionMeta = await processImages(imageList);
		meta[sectionName] = sectionMeta;
	}

	console.log(`process all images in ${processTimeAll / 1000}s`);

	await fse.outputJson(path.join(destRoot, destMeta), meta, { spaces: 2 });
}

async function processStaticFiles() {
	console.log('copy files:');

	await copy(srcIndex, 'index.html');
	await copy(srcIndex, '200.html');

	const files = await glob(srcStatic);
	await Promise.all(files.map(src => copy(src)));
}

async function copy(from, to) {
	to = path.join(destRoot, to ? to : path.basename(from));

	console.log(from, ' -> ', to);
	await fse.copy(from, to);
}

async function processImages(imageList) {
	const meta = []
	for (let image of imageList) {
		let imageMeta = await processImage(image);
		meta.push(imageMeta);
	}

	return meta;
}

async function processImage(imagePath) {
	const startTime = Date.now();
	const idx = imageIndex++;
	const processor = sharp(imagePath);

	// make large image
	const largeImageFile = path.join(destImages, `i${idx}.jpg`);
	const largeImage = await processor
		.clone()
		.resize(largeImageSize, largeImageSize)
		.max()
		.toFormat('jpeg')
		.toBuffer()
	;
	await fse.outputFile(path.join(destRoot, largeImageFile), largeImage);

	// make small image
	const smallImageFile = path.join(destImages, `i${idx}s.jpg`);
	const smallImage = await processor
		.clone()
		.resize(smallImageSize, null)
		.toFormat('jpeg')
		.toBuffer({ resolveWithObject: true })
	;

	await fse.outputFile(path.join(destRoot, smallImageFile), smallImage.data);

	// read image notes
	const notes = await readNotes(imagePath);

	const processTime = Date.now() - startTime;
	console.log(`process '${imagePath}' in ${processTime / 1000}s`);

	processTimeAll += processTime;

	const meta = {
		large: {
			file: largeImageFile
		},
		small: {
			file: smallImageFile,
			height: smallImage.info.height
		}
	};

	if (notes) {
		meta.notes = notes;
	}

	return meta;
}

async function readNotes(imagePath) {
	const { name, dir } = path.parse(imagePath);
	const filename = path.join(dir, `${name}.txt`);

	let raw;
	try {
		raw = await fse.readFile(filename);
	} catch(e) {
		return;
	}

	return raw.toString();
}
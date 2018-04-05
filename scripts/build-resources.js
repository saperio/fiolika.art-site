const path = require('path').posix;
const glob = require('fast-glob');
const fse = require('fs-extra');
const sharp = require('sharp');

const srcStatic = './src/index.html';
const srcImages = './resources';
const destRoot = './build';
const destImages = 'i';
const destMeta = 'm.json';
const destStatic = 'index.html';
let imageIndex = 0;
let processTimeAll = 0;

run();

async function run() {
	// copy static
	fse.cope(srcStatic, path.join(destRoot, destStatic));

	// remove dest dir contents
	await fse.emptyDir(path.join(destRoot, destImages));

	// process images
	const meta = {};
	const sectionsList = await glob(`${srcImages}/*`, { onlyFiles: false });
	for (let section of sectionsList) {
		let imageList = await glob(`${section}/*`);
		let sectionName = path.basename(section);

		let sectionMeta = await processImages(sectionName, imageList);
		meta[sectionName] = sectionMeta;
	}

	console.log(`process all images in ${processTimeAll / 1000}s`);

	await fse.outputJson(path.join(destRoot, destMeta), meta, { spaces: 2 });
}

async function processImages(sectionName, imageList) {
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

	const largeImageFile = path.join(destImages, `i${idx}.jpg`);
	const largeImage = await processor
		.clone()
		.resize(1200, 1200)
		.max()
		.toFormat('jpeg')
		.toBuffer()
	;
	await fse.outputFile(path.join(destRoot, largeImageFile), largeImage);

	const smallImageFile = path.join(destImages, `i${idx}s.jpg`);
	const smallImage = await processor
		.clone()
		.resize(350, null)
		.toFormat('jpeg')
		.toBuffer()
	;
	await fse.outputFile(path.join(destRoot, smallImageFile), smallImage);

	const processTime = Date.now() - startTime;
	console.log(`process '${imagePath}' in ${processTime / 1000}s`);

	processTimeAll += processTime;

	return {
		large: {
			file: largeImageFile
		},
		small: {
			file: smallImageFile
		}
	};
}
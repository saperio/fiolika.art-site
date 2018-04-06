import React from 'react';
import Lightbox from 'react-images';

import { setCurrentImage } from '../state';


export default props => {
	const { images, currentImage, wideWindow } = props;
	const isOpen = currentImage !== undefined && currentImage !== -1;

	if (!isOpen || !wideWindow) {
		return null;
	}

	const largeImages = images.map(image => ({
		src: image.large.file,
		caption: image.notes
	}));

	return (
		<Lightbox
			images={largeImages}
			currentImage={currentImage}
			isOpen={isOpen}
			showImageCount={false}
			onClose={() => setCurrentImage(-1)}
			onClickPrev={() => setCurrentImage(currentImage - 1)}
			onClickNext={() => setCurrentImage(currentImage + 1)}
			backdropClosesModal={true}
		/>
	);
};
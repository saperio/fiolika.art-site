import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Lightbox from 'react-images';

import { setCurrentImage } from '../state';

const lightbox = props => {
	const { images, currentImage } = props;
	const isOpen = currentImage !== undefined && currentImage !== -1;

	return (
		<Lightbox
			images={images}
			currentImage={currentImage}
			isOpen={isOpen}
			showImageCount={false}
			onClose={()=>{}}
			onClickPrev={()=>{}}
			onClickNext={()=>{}}
		/>
	);
}

export default props => {
	const { images } = props;

	if (!images || !images.length) {
		return <div className="gallery-loading">Loading...</div>
	}

	return (
		<div>
			<ResponsiveMasonry columnsCountBreakPoints={{ 480: 1, 500: 2, 1000: 3 }}>
				<Masonry gutter="10">
					{images.map((image, idx) => (
						<img
							key={`image_${idx}`}
							src={image.src}
							style={{ width: '100%', display: 'block' }}
							alt=""
							onClick={() => setCurrentImage(idx)}
						/>
					))}
				</Masonry>
			</ResponsiveMasonry>
			{lightbox(props)}
		</div>
	)
};
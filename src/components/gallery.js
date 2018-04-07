import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Lightbox from './lightbox';

import { setCurrentImage } from '../state';


const openLightbox = (props, idx) => {
	if (props.wideWindow) {
		setCurrentImage(idx);
	}
};

export default props => {
	const { images } = props;

	if (!images || !images.length) {
		return <div className="gallery-loading">Loading...</div>
	}

	return (
		<div>
			<ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 450: 2, 900: 3, 1600: 4 }}>
				<Masonry gutter="10px">
					{images.map((image, idx) => (
						<img
							key={`image_${idx}`}
							src={image.small.file}
							className='gallery-img'
							onClick={() => openLightbox(props, idx)}
						/>
					))}
				</Masonry>
			</ResponsiveMasonry>
			<Lightbox {...props} />
		</div>
	)
};
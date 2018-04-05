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
			<ResponsiveMasonry columnsCountBreakPoints={{ 480: 1, 500: 2, 1000: 3 }}>
				<Masonry gutter="10">
					{images.map((image, idx) => (
						<img
							key={`image_${idx}`}
							src={image.small.file}
							style={{ width: '100%', display: 'block' }}
							alt=""
							onClick={() => openLightbox(props, idx)}
						/>
					))}
				</Masonry>
			</ResponsiveMasonry>
			<Lightbox {...props} />
		</div>
	)
};
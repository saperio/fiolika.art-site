import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { setCurrentImage } from '../state';


export default class Gallery extends React.Component {
	constructor() {
		super();
		this.state = {currentImage: 0 };
		//this.closeLightbox = this.closeLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
		//this.gotoNext = this.gotoNext.bind(this);
		//this.gotoPrevious = this.gotoPrevious.bind(this);
	}
	openLightbox(event, obj) {
		this.setState({
			currentImage: 1,
			lightboxIsOpen: true
		});
	}
	render() {
		const { images } = this.props;
		return (
			<ResponsiveMasonry columnsCountBreakPoints={{ 480: 1, 500: 2, 1000: 3 }}>
				<Masonry gutter={'10'}>
					{images.map((image, i) => (
						<img
							key={i}
							src={image.src}
							style={{ width: '100%', display: 'block' }}
							alt=""
							onClick={setCurrentImage}
						/>
					))}
				</Masonry>
			</ResponsiveMasonry>
		);
	}
}

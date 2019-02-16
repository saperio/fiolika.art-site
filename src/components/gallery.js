import React from 'react';
import Lightbox from './lightbox';
import MasonryInfiniteScroller from 'react-masonry-infinite';

import { setCurrentImage } from '../state';


const openLightbox = (props, idx) => {
	if (props.wideWindow) {
		setCurrentImage(idx);
	}
};

export default class Gallary extends React.Component {
	constructor() {
		super();
		this.state = {
			loaded: 0
		};
	}

	loadMore() {
		const { images } = this.props;
		const { loaded } = this.state;
		const from = loaded;
		const to = Math.min(this.state.loaded + 3, this.props.images.length);
		let count = to - from;

		const check = () => {
			if (--count <= 0) {
				this.setState({ loaded: to });
			}
		};

		for (let i = from; i < to; ++i) {
			let img = new Image();
			img.onload = check;
			img.src = images[i].small.file;
		}
	}

	render() {
		const { props, state } = this;
		const { images } = props;
		const { loaded } = state;

		if (!images || !images.length) {
			return <div className="gallery-loading">Loading...</div>
		}

		return (
			<div>
				<MasonryInfiniteScroller
					hasMore={loaded < images.length}
					loadMore={() => this.loadMore()}
					sizes={[
						{ columns: 1, gutter: 20 },
						{ mq: '950px', columns: 2, gutter: 20 },
						{ mq: '1400px', columns: 3, gutter: 20 }
					]}
					loader={<div className="lds-ripple" key="loader"><div></div><div></div></div>}
					style={{ margin: '0 auto' }}
				>
					{images
						.slice(0, loaded)
						.map((image, idx) => (
							<img
								style={{ 'max-height': image.small.height }}
								key={`image_${idx}`}
								src={image.small.file}
								className='gallery-img'
								onClick={() => openLightbox(props, idx)}
							/>
						))
					}
				</MasonryInfiniteScroller>
				<Lightbox {...props} />
			</div>
		);
	}
}
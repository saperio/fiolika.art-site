import React from 'react';
import FadeProps from 'fade-props';

import Gallary from './components/gallery';
import About from './components/about';
import Nav from './components/nav';
import { PAGE_ABOUT, PAGE_SECT1, PAGE_SECT2 } from './constants';


const main = props => {
	const { page, imagesDB, currentImage } = props;
	switch(page) {
		case PAGE_SECT1: return <Gallary key={page} images={imagesDB.section1 || []} currentImage={currentImage}/>;
		case PAGE_SECT2: return <Gallary key={page} images={imagesDB.section2 || []} currentImage={currentImage}/>;
		case PAGE_ABOUT: return <About key={page}/>;
		default: return <div key="empty_page"></div>;
	}
}

export default props => (
	<div>
		<Nav page={props.page}/>
		<br />
		<div style={{ width: '90%', margin: '0 auto'}}>
			<FadeProps animationLength={300}>
				{main(props)}
			</FadeProps>
		</div>
	</div>
);
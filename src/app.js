import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Transition from './transition';
import Gallary from './components/gallery';
import About from './components/about';
import Nav from './components/nav';
import { PAGE_ABOUT, PAGE_SECT1, PAGE_SECT2 } from './constants';


const renderPage = props => {
	const { page, imagesDB, currentImage } = props;
	switch(page) {
		case PAGE_SECT1: return <Gallary key={page} images={imagesDB.section1 || []} currentImage={currentImage}/>;
		case PAGE_SECT2: return <Gallary key={page} images={imagesDB.section2 || []} currentImage={currentImage}/>;
		case PAGE_ABOUT: return <About key={page}/>;
		default: return <div key="empty_page"></div>;
	}
}

export default props => (
	<Scrollbars autoHide={false} key={`scroll__${props.pageTransition}`}>
		<Nav page={props.page}/>
		<div style={{ width: '90%', margin: '0 auto'}}>
			<Transition enterTime={500} exitTime={300} page={props.page}>
				{renderPage(props)}
			</Transition>
		</div>
	</Scrollbars>
);
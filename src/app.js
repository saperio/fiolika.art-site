import React from 'react';
import Transition from './transition';
import Gallery from './components/gallery';
import About from './components/about';
import Nav from './components/nav';
import { pagesInfo, PAGE_TYPE } from './constants';

const findPageInfo = page => {
	for (let info of pagesInfo) {
		if (info.url === page) {
			return info;
		}
	}

	return null;
}

const renderPage = props => {
	const { page, imagesDB } = props;
	const info = findPageInfo(page);

	if (info) {
		if (info.type === PAGE_TYPE.GALLERY) {
			return <Gallery key={page} images={imagesDB[info.dbSection] || []} {...props}/>;
		}

		if (info.type === PAGE_TYPE.ABOUT) {
			return <About key={page}/>;
		}
	}

	return <div key="empty_page"></div>;
}


export default props => (
	<div>
		<Nav page={props.page}/>
		<div id='main-container'>
			<Transition enterTime={500} exitTime={300} page={props.page}>
				{renderPage(props)}
			</Transition>
		</div>
	</div>
);
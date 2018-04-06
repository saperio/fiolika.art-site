import React from 'react';
import Transition from './transition';
import Gallary from './components/gallery';
import About from './components/about';
import Nav from './components/nav';
import { PAGE_ABOUT, PAGE_SECT1, PAGE_SECT2, PAGE_SECT3 } from './constants';


const renderPage = props => {
	const { page, imagesDB } = props;
	switch(page) {
		case PAGE_SECT1: return <Gallary key={page} images={imagesDB.section1 || []} {...props}/>;
		case PAGE_SECT2: return <Gallary key={page} images={imagesDB.section2 || []} {...props}/>;
		case PAGE_SECT3: return <Gallary key={page} images={imagesDB.section3 || []} {...props}/>;
		case PAGE_ABOUT: return <About key={page}/>;
		default: return <div key="empty_page"></div>;
	}
}


export default props => (
	<div>
		<Nav page={props.page}/>
		<div style={{ width: '90%', margin: '0 auto'}}>
			<Transition enterTime={500} exitTime={300} page={props.page}>
				{renderPage(props)}
			</Transition>
		</div>
	</div>
);
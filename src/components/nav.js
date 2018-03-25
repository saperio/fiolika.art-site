import React from 'react';
import Link from 'lucid-router/link';
import { PAGE_SECT1, PAGE_SECT2, PAGE_SECT3, PAGE_ABOUT } from '../constants';

const link = (page, text, props) => {
	if (page === props.page) {
		return <b>{text}</b>;
	}

	return <Link to={page}>{text}</Link>;
}

export default props => (
	<nav>
		<div className="navWide">
			<div className="wideDiv">
				{link(PAGE_SECT1, 'watercolor works', props)}
				{link(PAGE_SECT2, 'sketches & other staff', props)}
				{link(PAGE_SECT3, 'History of my way', props)}
				{link(PAGE_ABOUT, 'about me & contacts', props)}
			</div>
		</div>
	</nav>
);
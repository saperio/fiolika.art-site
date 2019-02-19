import React from 'react';
import Link from 'lucid-router/link';
import { PAGE_SECT1, PAGE_SECT2, PAGE_SECT3, PAGE_SECT4, PAGE_SECT5, PAGE_ABOUT } from '../constants';

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
				{link(PAGE_SECT1, 'patterns', props)}
				{link(PAGE_SECT2, 'landscapes', props)}
				{link(PAGE_SECT3, 'characters', props)}
				{link(PAGE_SECT4, 'my way', props)}
				{link(PAGE_SECT5, 'elements', props)}
				{link(PAGE_ABOUT, 'about me & contacts', props)}
			</div>
		</div>
	</nav>
);
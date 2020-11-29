import React from 'react';
import Link from 'lucid-router/link';
import { pagesInfo } from '../constants';

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
				{pagesInfo.map(info => link(info.url, info.title, props))}
			</div>
		</div>
	</nav>
);
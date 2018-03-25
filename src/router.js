import { setPage } from './state';
import { addRoutes, register, getLocation } from 'lucid-router';
import { PAGE_SECT1, PAGE_SECT2, PAGE_SECT3, PAGE_ABOUT } from './constants';

const pages = [PAGE_SECT1, PAGE_SECT2, PAGE_SECT3, PAGE_ABOUT];

export const initRouter = () => {
	addRoutes([
		{
			path: '/',
			name: 'index'
		},
		...pages.map(name => ({ path: `/${name}`, name })),
		{
			path: '/*',
			name: 'unknown'
		},
	]);

	// get current location and push it to state
	setLocation(getLocation());

	// register callback for location update
	register(location => setLocation(location));
};

function setLocation(location) {
	const { name } = location;
	const page = name === 'index' || name === 'unknown' ? PAGE_ABOUT : name;

	setPage(page);
}
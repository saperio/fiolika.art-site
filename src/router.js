import { addRoutes, register, getLocation } from 'lucid-router';
import { setPage } from './state';
import { pagesInfo } from './constants';


export const initRouter = () => {
	addRoutes([
		{
			path: '/',
			name: 'index'
		},
		...pagesInfo.map(info => ({ path: `/${info.url}`, name: info.url })),
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
	const page = name === 'index' || name === 'unknown' ? 'about' : name;

	setPage(page);
}
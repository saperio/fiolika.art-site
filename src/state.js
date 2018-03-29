import React from 'react';

// initial global state and update function
let initial = { imagesDB: {} };
let updateState = partial => (initial = { ...initial, ...partial });


// load images db
const loadJSON = (file, callback) => {
	const req = new XMLHttpRequest();
	req.overrideMimeType('application/json');
	req.open('GET', file, true);
	req.onreadystatechange = () => {
		if (req.readyState == 4 && req.status == '200') {
			callback(JSON.parse(req.responseText));
		}
	};
	req.send(null);
};
loadJSON('images.json', imagesDB => updateState({ imagesDB }));


// hoc to bind global state object to props
export const withGlobalState = Component => class extends React.Component {
	constructor(props) {
		super(props);

		this.state = initial;
		updateState = partial => this.setState(partial);
	}

	render() {
		return <Component {...this.props} {...this.state} />;
	}
};


// actions, mutate global state
export const setPage = page => updateState({ page });
export const setCurrentImage = currentImage => updateState({ currentImage });
export const pageTransitionDone = pageTransition => updateState({ pageTransition });
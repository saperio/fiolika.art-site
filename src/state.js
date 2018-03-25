import React from 'react';
import img from '../build/img/data.json';


let initial = { img };
let updateState = partial => initial = { ...initial, ...partial };

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

export const setPage = page => updateState({ page });
export const setCurrentImage = currentImage => updateState({ currentImage });
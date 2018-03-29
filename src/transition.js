import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default class Transition extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currentNode: props.children };
	}

	componentWillReceiveProps({ children }) {
		const { currentNode } = this.state;

		if (currentNode.key === children.key) {
			this.setState({ currentNode: children, nextNode: null });
		} else {
			this.setState({ nextNode: children });
		}
	}

	switchNodes() {
		const { nextNode } = this.state;
		if (nextNode) {
			this.setState({ currentNode: nextNode, nextNode: null });
		}
	}

	render() {
		const { currentNode, nextNode } = this.state;
		const { enterTime, exitTime } = this.props;
		const entering = !nextNode;

		return (
			<CSSTransition
				in={entering}
				timeout={{enter: enterTime, exit: exitTime}}
				classNames='pagetransition'
				onExited={() => this.switchNodes()}
			>
				{currentNode}
			</CSSTransition>
		);
	}
}
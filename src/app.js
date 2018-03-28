import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Gallary from './components/gallery';
import About from './components/about';
import Nav from './components/nav';
import { PAGE_ABOUT, PAGE_SECT1, PAGE_SECT2 } from './constants';


class Transition extends React.Component {
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
				classNames='fd'
				onExited={() => this.switchNodes()}
			>
				{currentNode}
			</CSSTransition>
		);
	}
}




const Main = props => {
	const { page, imagesDB, currentImage } = props;
	switch(page) {
		case PAGE_SECT1: return <Gallary key={page} images={imagesDB.section1 || []} currentImage={currentImage}/>;
		case PAGE_SECT2: return <Gallary key={page} images={imagesDB.section2 || []} currentImage={currentImage}/>;
		case PAGE_ABOUT: return <About key={page}/>;
		default: return <div key="empty_page"></div>;
	}
}

export default props => (
	<div>
		<Nav page={props.page}/>
		<br />
		<div style={{ width: '90%', margin: '0 auto'}}>
			<Transition enterTime={1000} exitTime={800}>
				{Main(props)}
			</Transition>
		</div>
	</div>
);
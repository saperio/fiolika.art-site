import React from 'react';

const text = `Hi! My name is Anastasia. I'm from St.Petersburg. I make jewelry and other nice things for girls, for their beauty and comfort. I've been doing this for over 10 years, I am always learning and trying something new. My last collections were «My watercolor world» and «Frozen nature».`;

export default () => (
	<div className="about">
		<img id="ava" src="img/me.jpg" />
		<span>{text}</span>
	</div>
);
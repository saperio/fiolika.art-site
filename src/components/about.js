import React from 'react';

const text = `Hello! I'm Asya. I make our world brighter! I draw with watercolors, markers and pencils. I keen on children's style, animals and nature. You can feel free to contact me with any idea and we will bring it to a juicy result! I am a Master of Architecture, I worked as an architect restorer, painted silk, wood and glass, and even created jewelery! So let's create something new and interesting together!`;

export default () => (
	<div className="about">
		<img id="ava" src="me.jpg" />
		<p>Hi!</p>
		<span>{text}</span>
		<p>You can reach me at:</p>
		<div id="contacts">
			<a href="https://www.shutterstock.com/g/anastasiyacraft">shutterstock</a>
			<a href="https://creativemarket.com/fiolika">creativemarket</a>
			<a href="https://www.instagram.com/fiolika.art">instagram</a>
			<a href="https://vk.com/happy_present">vk</a>
			<a href="mailto:mail@fiolika.art">mail</a>
		</div>
	</div>
);
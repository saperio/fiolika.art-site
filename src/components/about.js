import React from 'react';

const text = `My name is Anastasiya.`;

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
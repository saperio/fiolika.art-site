import React from 'react';

const text1 = `Hello! My name is Anastasia. I am an illustrator. I strive to make our world brighter! Therefore, I love the childish and cute style that I implement in watercolor and digitally. I am a Master of Architecture, in the past, I worked as an architect restorer, painted silk, wood, and glass, and even created jewelry!`;
const text2 = `You can feel free to contact me with any idea and we will bring it to a juicy result! So let's create something new and exciting together!`;

const contactLink = (url, name, desc) => (
	<div>
		<a href={url}>{name}</a>
		{desc ? <span>{desc}</span> : null}
	</div>
);


export default () => (
	<div className="about">
		<img id="ava" src="me.jpg" />
		<span>{text1}</span>
		<br></br>
		<span>{text2}</span>
		<p>You can reach me at:</p>
		<div id="contacts">
			{contactLink('https://www.instagram.com/fiolika.art', 'instagram')}
			{contactLink('https://www.youtube.com/channel/UCT2xWQ-G5-cPKZvMBZQptJg', 'youtube')}
			{contactLink('https://www.shutterstock.com/g/anastasiyacraft', 'shutterstock')}
			{contactLink('https://creativemarket.com/fiolika', 'creativemarket')}
			{contactLink('https://www.redbubble.com/people/fiolika', 'redbubble', 'you can buy my merch here')}
			{contactLink('https://www.maryjane.ru/catalog/author/fiolika/', 'maryjane', 'you can buy my merch here')}
			{contactLink('https://vk.com/fiolika_art', 'vk')}
			{contactLink('https://www.twine.net/fiolika', 'twine')}
			{contactLink('mailto:a.provozina@gmail.com', 'mail', 'a.provozina@gmail.com')}
		</div>
	</div>
);
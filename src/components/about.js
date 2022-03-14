import React from 'react';

const text = `Hello! I'm Asya. I make our world brighter! I draw with watercolors, markers and pencils, keen on children's style, animals and nature. You can feel free to contact me with any idea and we will bring it to a juicy result! I am a Master of Architecture, worked as an architect restorer, painted silk, wood and glass, and even created jewelry! So let's create something new and interesting together!`;

const contactLink = (url, name, desc) => (
	<div>
		<a href={url}>{name}</a>
		{desc ? <span>{desc}</span> : null}
	</div>
);


export default () => (
	<div className="about">
		<img id="ava" src="me.jpg" />
		<p>Hi!</p>
		<span>{text}</span>
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
			{contactLink('mailto:an.provozina@yandex.ru', 'mail', 'an.provozina@yandex.ru')}
		</div>
	</div>
);
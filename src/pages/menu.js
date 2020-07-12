import React from 'react';
import SEO from '../components/seo';
import NavFullMenu from '../components/NavFullMenu/FullMenu.js';
import MenuSection from '../components/MenuSection/MenuSection.js';
import Banner from '../components/Banner/Banner.js';

import data from '../components/data';

const MenuPage = () => {
	const allMenuItems = data.map((section) => {
		return <MenuSection section={section} />;
	});

	return (
		<div>
			<SEO title="Home" />
			<NavFullMenu />
			<section>
				<Banner />
				<div className="pusher" style={{display: 'flex', justifyContent: 'center'}}>
					<h1  style={{position: 'absolute', top: '4em', transform: 'translateX(3em)'}}>Pho</h1>
				</div>
				<section className="description" style={{ textAlign: 'justify', display: 'flex', alignItems: 'center', margin: '1em 2em 0 13em'}}>Pho is a popular Vietnamese noodle soup. Beef bones are simmered for many hours in combination with herbs and spices that help to bring out the flavour. It is served with traditional rice noodles and your choice of meat, or vegetables. Topped with green and white onions and black pepper.
				</section>
			
			</section>
			<section style={{margin: '0 1em 0 12em'}}>
				{allMenuItems}
			</section>
		</div>
	);
};

export default MenuPage;

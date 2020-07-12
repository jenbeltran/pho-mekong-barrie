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
			<section className="all-menu-items" style={{ width: '55%' }}>
				<Banner />
				{allMenuItems}
			</section>
		</div>
	);
};

export default MenuPage;

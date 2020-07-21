const allMenuData = require('./src/components/data.js');

exports.createPages = ({ actions: { createPage } }) => {
	// // creates one page for the Home /contact Us route
	createPage({
		path      : `/`,
		component : require.resolve('./src/pages/index.js'),
		context   : { allMenuData }
	});

	// page for the full menu
	createPage({
		path      : `/full-menu`,
		component : require.resolve('./src/pages/fullMenu.js')
		// context: allMenuData,
	});

	// Different menu pages
	allMenuData.forEach((category) => {
		createPage({
			path      : `/${category.uri}/`,
			component : require.resolve('./src/pages/menu.js'),
			context   : { category }
		});
	});
};

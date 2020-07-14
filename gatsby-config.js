module.exports = {
	siteMetadata : {
		title       : `Pho Mekong Barrie`,
		description : `Menu and ordering website for Pho Mekong Barrie`,
		author      : `Ha Pham and Jen Beltran`
	},
	plugins      : [
		`gatsby-plugin-react-helmet`,
		{
			resolve : `gatsby-source-filesystem`,
			options : {
				name : `images`,
				path : `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve : `gatsby-plugin-manifest`,
			options : {
				name             : `gatsby-starter-default`,
				short_name       : `starter`,
				start_url        : `/`,
				background_color : `#663399`,
				theme_color      : `#663399`,
				display          : `minimal-ui`,
				icon             : `src/images/logo-favicon.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-mdx`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-less`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};

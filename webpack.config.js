// Webpack uses this to work with directories
const path = require('path');
const isDevelopment = true;

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

	// Path to your entry point. From this file Webpack will begin his work
	entry: './app.js',

	// Path and filename of your result bundle.
	// Webpack will bundle all JavaScript into this file
	output: {
		path: path.resolve(__dirname),
		filename: 'scripts.js'
	},

	// Default mode for Webpack is production.
	// Depending on mode Webpack will apply different things
	// on final bundle. For now we don't need production's JavaScript
	// minifying and other thing so let's set mode to development

	mode: 'none',
};

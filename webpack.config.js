/*eslint-disable*/
const path = require("path");

module.exports = {
	entry: ['./src/app.js'],
	output: {
		filename: "bundle.js",
		path: "./public",
	},
	resolve: {
		alias: {
			src: path.resolve("./src"),
			aphrodite: path.resolve("./node_modules/aphrodite/no-important.js"),
			styles: path.resolve("./src/styles/styles.js")
		}
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
		]
	},
	devtool: 'sourcemaps',
}
/*eslint-enable*/

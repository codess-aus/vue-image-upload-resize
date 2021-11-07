// vue.config.js
const manifestJSON = require('./public/manifest.json');
module.exports = {
	pwa: {
		name: manifestJSON.short_name,
		msTileColor: manifestJSON.background_color,
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',
		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			exclude: [/\.map$/, /web\.config$/],
			swSrc: 'src/service-worker.js',
		},
	},
};


/*
module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
}

*/

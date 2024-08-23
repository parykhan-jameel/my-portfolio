const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  // Your existing webpack configuration...
  setupMiddlewares: (middlewares, devServer) => {
    if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
    }

    if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(devServer.app)
    }

    middlewares.push(
        evalSourceMapMiddleware(devServer),
        redirectServedPath(paths.publicUrlOrPath),
        noopServiceWorkerMiddleware(paths.publicUrlOrPath)
    )

    return middlewares;
},
 

  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Righteous', }, // Add the font families you want to use
        // Add more font families here if needed
      ],
      // Use 'display' or 'swap' for optimal font loading behavior
      display: 'swap',
    }),
  ],
};


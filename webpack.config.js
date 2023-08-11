const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  // Your existing webpack configuration...

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

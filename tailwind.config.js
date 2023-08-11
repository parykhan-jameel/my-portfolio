/** @type {import('tailwindcss').Config} */
module.exports = {
  mod: "jit",
  darkMode: "class",
  content: [
    "./src/App.{js,sx,ts,tsx}",
    "./src/components/hero.{js,jsx,ts,tsx}",
    "./src/components/about.{js,jsx,ts,tsx}",
    "./src/components/contact.{js,jsx,ts,tsx}",
    "./src/components/navbar.{js,jsx,ts,tsx}",
    "./src/components/projects.{js,jsx,ts,tsx}",
    "./src/components/skills.{js,jsx,ts,tsx}",
    "./src/components/footer.{js,jsx,ts,tsx}",
    "./src/components/Bot.{js,jsx,ts,tsx}",
    "./src/components/pageLoader.{js,jsx,tx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        lobster: ['Lobster', 'cursive'],
        righteous: ['Righteous', 'cursive'],
        // Add more font families here if needed
      
      },
      colors: {
        'tooltip-gray': '#ccd6f6',
      },
      
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/model/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'darkyellow': '#ff8c00',
        'mediumyellow': '#ffc107',
        'lightyellow': '#fea116',
        'darkviolet': '#7d32e6',
        'mediumviolet': '#8b37ff',
        'darkgreen': '#006400',

        purples: "#A729F5",
        darkNavy: "#313E51",
        navy: "#3B4D66",
        greyNavy: "#626C7F",
        lightBluish: "#ABC1E1",
        lightGrey: "#F4F6FA",
        green: "#26D782",
        red: "#EE5454",
        btnHover: "#D394FA",
      }
    },
  },
  plugins: [],
}

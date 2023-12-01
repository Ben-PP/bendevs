/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        lg: '0 5px 8px 2px rgba(49, 46, 129, 1)',
        hoverfp: '0 0 10px 10px rgba(49, 46, 129, 1)',
        card: '0px 0px 8px 3px rgba(49, 46, 129, 1)'
      }
    }
  },
  plugins: []
}

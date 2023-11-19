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
        lg: '0 8px 15px 5px rgba(49, 46, 129, 1)',
        nav: '0 5px 10px 1px rgba(49, 46, 129, 1)'
      }
    }
  },
  plugins: []
}

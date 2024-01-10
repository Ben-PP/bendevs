/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',

        secondary: '#1F2937',
        accent: '#6366F1',
        'accent-dark': '#4338CA',
        tertiary: '#000000',
        card: '#000000'
      },
      boxShadow: {
        lg: '0 5px 8px 2px rgba(49, 46, 129, 1)',
        hoverfp: '0 0 10px 10px rgba(49, 46, 129, 1)',
        'hover-form-focus': '0 0 8px 10px rgba(69, 66, 149, 1)',
        card: '0px 0px 8px 3px rgba(49, 46, 129, 1)'
      },
      textColor: {
        primary: '#FFFFFF',
        'primary-dark': '#D4D4D8',
        secondary: '#6366F1',
        'secondary-dark': '#4338CA',
        accent: '#1F2937',
        'accent-dark': '#111827',
        'accent-light': '#3F3F46'
      },
      borderColor: {
        'primary-dark': '#D4D4D8',
        secondary: '#6366F1',
        'secondary-dark': '#4338CA'
      },
      ringColor: {
        'primary-dark': '#D4D4D8',
        secondary: '#6366F1',
        'secondary-dark': '#4338CA'
      }
    }
  },
  plugins: []
}

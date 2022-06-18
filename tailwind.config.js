/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'error': '#ef476f',
      'warning': '#ffd166',
      'success': '#54B585',
      'info': '#118ab2',
      'dark': '#073b4c',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

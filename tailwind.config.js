/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#092047',
        'secondary':'#0b468c',
        'primary-t':'#b7c1de',
        'button':'#ac61b9',
        // 'button':'#7e22ce',
        'yellow':'#fcee0a',
        'border':'#63345e',
        // 'border':'#7e22ce',
      },
    },
  },
  plugins: [],
}


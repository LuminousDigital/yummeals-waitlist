module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'yum-orange': '#F25B0A',
        'yum-light-orange': '#FFE8DB',
        'yum-text': '#2A2822',
        'yum-gray': '#5D5A56',
      },
    },
  },
  plugins: [],
}

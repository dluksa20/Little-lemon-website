/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.jpg', // Optional, depending on if you want to reference images in src directly
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#495E57",
        secondary: "#F4CE14",
        primaryHover: '#EE9972',
        secondaryHover: '#FBDABB'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      backgroundImage: {
        'custom-image': "url('/images/background.jpg')", // Correct path relative to the public folder
        'custom-image-2': "url('/images/background2.png')", // Correct path relative to the public folder
        'custom-image-1': "url('/images/background.jpg')", // Correct path relative to the public folder

      },
    },
  },
  plugins: [],
};

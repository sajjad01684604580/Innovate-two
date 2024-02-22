/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    //  font-family start
    fontFamily: {
      'opensans': ["Open Sans"],
      'paprika': ["Paprika"],
      'roboto': ["Roboto"],
      'worksans': ["Work Sans"],
      'nunito': ["Nunito"],
      
    },
    //  font-family end
    // container-width start
    maxWidth: {
      'container': '1170px',
    },
    // container-width end
    // bg color start
    colors: {
      'btncolor': '#FF7628',
      'pcolor': '#6C7D93',
      'creativeone': '#EBF7E9',
      'creativetwo': '#D8EAFF',
      'creativethree': '#FBF1EC',
    },
    // bg color end
    },
  },
  plugins: [],
}


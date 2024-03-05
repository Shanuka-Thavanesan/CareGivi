/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      
     primaryColor: "#3a4539",
        beigeColor: "#97A97C",
        headingColor: "#181A1E",
        textColor: "#4E545F",
        white:"#ddd",
        yellowGreen:"#97A97C",
        peach:"#EDE0D4",
        yellowColor:"#F2AF13"
    },
    boxShadow: {
      panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
    },
  },
  plugins: [],
}


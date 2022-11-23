/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes : [

    {  
      biketheme:{
        primary: "#23CA72",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    }

    ]


  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
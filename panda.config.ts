import { defineConfig, defineGlobalStyles } from "@pandacss/dev"
import { buttonRecipe } from './src/recipes/button.recipe';


const globalCss = defineGlobalStyles({
  body: {
    margin: 0,
    minHeight: "100vh",
    lineHeight: "1.5",
  },
  a: {
    color: {
      base: "blue.200",
      _hover: "white",
    },
    textDecoration: "inherit",
  },
})


export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations  "./pages/**/*.{js,jsx,ts,tsx}"
  include: ["./src/**/*.{js,jsx,ts,tsx}",],

  // Files to exclude
  exclude: [],

  jsxFramework: "react",
  syntax: "object-literal",

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        button: buttonRecipe,
      },
      breakpoints: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },


  gitignore: true,
  watch: true,
  globalCss,
  hash: true,

  // The output directory for your css system
  outdir: "styled-system",


})
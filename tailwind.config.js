module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  components: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: '20px',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '975px',
        },
      },
    },
  },
  buildModules: ["@nuxtjs/tailwindcss"],
  variants: {
    extend: {},
  },
  plugins: [],
}

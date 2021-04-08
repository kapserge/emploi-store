module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
}

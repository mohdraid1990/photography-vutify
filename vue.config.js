module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/pro-photo2024-vuetify/'
  : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}
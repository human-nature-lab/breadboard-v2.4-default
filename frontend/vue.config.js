const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  outputDir: process.env.BREADBOARD_ROOT || '../breadboard/generated',
  publicPath: '/generated/breadboard-v2.4/',
  transpileDependencies: [
    'vuetify',
    '@human-nature-lab/breadboard-client',
  ],
  filenameHashing: false,
  devServer: {
    writeToDisk: true
  }
}

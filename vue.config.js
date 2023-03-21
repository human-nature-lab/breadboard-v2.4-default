const dotenv = require('dotenv')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
dotenv.config()

const publicRoot = process.env.PUBLIC_ROOT || '/generated/'
const outputDir = path.join(process.env.BREADBOARD_ROOT, publicRoot)
const plugins = []

// Copy all experiment files into the experiment directory
if (process.env.EXPERIMENT_ROOT) {
  const expPath = path.join(process.env.BREADBOARD_ROOT, process.env.EXPERIMENT_ROOT)
  console.log('copying breadboard files to', expPath)
  plugins.push(
    new CopyPlugin([{
      from: '**',
      to: expPath,
      context: 'backend/',
      transform (content, filePath) {
        // content is a Buffer
        // Add our public root to the client graph
        if (path.basename(filePath) === 'client-graph.js') {
          const isProd = process.env.NODE_ENV === 'production'
          let s = content.toString()
          s = s.replace(/__PUBLIC_ROOT__/g, publicRoot)
          s = s.replace(/__DEV__/g, !isProd)
          s = s.replace(/__PROD__/g, isProd)
          return Buffer.from(s)
        }
        return content
      },
    }]),
  )
}

// Copy all data files into a breadboard directory
if (process.env.DATA_ROOT) {
  const dataDir = path.join(process.env.BREADBOARD_ROOT, process.env.DATA_ROOT)
  console.log('copying data files to', dataDir)
  plugins.push(
    new CopyPlugin([{
      from: '**',
      to: dataDir,
      context: 'data/',
    }]),
  )
}

module.exports = {
  outputDir: outputDir || '../breadboard/generated',
  publicPath: publicRoot,
  transpileDependencies: [
    'vuetify',
  ],
  filenameHashing: false,
  devServer: {
    writeToDisk: true,
  },
  configureWebpack: {
    plugins,
  },
}

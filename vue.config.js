const dotenv = require('dotenv')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
dotenv.config()

const publicRoot = process.env.PUBLIC_ROOT || '/generated/'
const outputDir = path.join(process.env.BREADBOARD_ROOT, publicRoot)

const plugins = []

if (process.env.EXPERIMENT_ROOT) {
  const expPath = path.join(process.env.BREADBOARD_ROOT, process.env.EXPERIMENT_ROOT)
  console.log('copying to', expPath)
  plugins.push(
    new CopyPlugin({
      patterns: [{
        from: '**',
        to: expPath,
        context: 'backend/',
        transform (content, filePath) {
          // content is a Buffer
          // Add our public root to the client graph
          if (path.basename(filePath) === 'client-graph.js') {
            const s = content.toString()
            return Buffer.from(s.replace(/__PUBLIC_ROOT__/g, publicRoot))
          }
          return content
        },
      }]
    })
  )
}

module.exports = {
  outputDir: outputDir || '../breadboard/generated',
  publicPath: publicRoot,
  transpileDependencies: [
    // '@human-nature-lab/breadboard-client',
    // '@human-nature-lab/breadboard-core',
  ],
  filenameHashing: false,
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
  configureWebpack: {
    plugins,
  }
}

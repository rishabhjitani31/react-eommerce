const withImages = require('next-images')
const isLocal = process.env.NODE_ENV === 'development'

module.exports = withImages({
  target: 'serverless',
  assetPrefix: isLocal ? '' : '/bailey',
  webpack: config => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
})

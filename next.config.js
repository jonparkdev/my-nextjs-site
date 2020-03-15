// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config;
  }
})

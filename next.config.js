// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})

module.exports = {
  webpack(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config;
  }
}

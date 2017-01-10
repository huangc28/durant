const fs = require('fs')
const path = require('path')
const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '.babelrc'), 'utf-8'))

/**
 * Use "es2015" on the server side.
 */
config.presets = config.presets.map(
  preset => (preset === 'es2015-webpack') ? 'es2015' : preset // eslint-disable-line no-confusing-arrow
)

require('babel-register')(config)

const generateScopedName = process.env.NODE_ENV === 'production'
  ? '_[hash:base64:5]'
  : '[name]__[local]__[hash:base64:5]'
require('css-modules-require-hook')({
  generateScopedName,
})

require('asset-require-hook')({
  extensions: ['jpeg', 'jpg', 'png', 'svg'],
  name: '[hash].[ext]',
})

require(path.resolve(__dirname, '../server', 'server.js'))

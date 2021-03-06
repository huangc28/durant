import { resolve } from 'path'

const publicPath = resolve(__dirname, '../..', 'build')

export const staticify = require('staticify')(publicPath) // eslint-disable-line global-require

export function renderFullPage (html, initialState) {
  const cssBundle = process.env.NODE_ENV === 'production'
    ? `<link
        rel="stylesheet"
        type="text/css"
        href=${staticify.getVersionedPath('/bundle.css')}>`
    : ''

  return `<!doctype html>
    <html>
      <head>
        <title>OUTSM</title>
        ${cssBundle}
      </head>
      <body>
        <div id='app'><div>${html}</div></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>

        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" async></script>
        <script
          type='application/javascript'
          src='${staticify.getVersionedPath('/vendor.js')}'
        >
        </script>
        <script
          type='application/javascript'
          src='${staticify.getVersionedPath('/main.js')}'
        >
        </script>
      </body>
    </html>
  `
}

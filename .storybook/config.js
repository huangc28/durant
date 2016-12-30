import { configure } from '@kadira/storybook'

const req = require.context('../../durant/src/components', true, /.stories.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
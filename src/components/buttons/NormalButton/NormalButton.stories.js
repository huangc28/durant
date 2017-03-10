import React from 'react'
import { storiesOf } from '@kadira/storybook'

import NormalButton from './NormalButton'

storiesOf('Buttons', module)
  .add('Normal Button', () => (
    <NormalButton title="開啟App" />
  ))
  .add('Disable normal button', () => (
    <NormalButton disabled title="開啟App" />
  ))

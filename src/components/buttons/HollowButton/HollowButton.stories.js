import React from 'react'
import { storiesOf } from '@kadira/storybook'

import HollowButton from './HollowButton'
import * as colors from '../../styles/colors.css'

storiesOf('Buttons', module)
  .add('Hollow Button', () => (
    <HollowButton title="開啟App" />
  ))
  .add('Red Hollow Button', () => (
    <HollowButton
      title="回上一頁"
      color={colors.monza}
    />
  ))

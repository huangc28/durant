import React, { PropTypes } from 'react'

import * as colors from '../../styles/colors.css'
import styles from './HollowButton.css'

const HollowButton = ({ title, onClick, color }) => {
  const colorStyle = color || colors.java

  return (
    <button
      style={{
        color: colorStyle,
        borderColor: colorStyle,
      }}
      className={styles.hollowButton}
      onClick={onClick}
    >
      { title || '' }
    </button>
  )
}

HollowButton.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
}

HollowButton.defaultProps = {
  color: colors.java,
}

export default HollowButton

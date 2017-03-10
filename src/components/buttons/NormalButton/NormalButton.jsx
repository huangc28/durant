import React, { PropTypes } from 'react'
import styles from './NormalButton.css'

const NormalButton = ({ title, onClick, disabled }) => (
  <button
    className={
      disabled
        ? styles.disabled
        : styles.root
    }
    onClick={onClick}
  >
    { title }
  </button>
)

NormalButton.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
}

export default NormalButton

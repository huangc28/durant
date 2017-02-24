import React, { PropTypes } from 'react'

import styles from './ForgotPassword.css'
import LogoIcon from '../../components/icons/logo'

const ForgotPassword = props => (
  <div className={styles.root}>
    {/* logo */}
    <div className={styles.logo}>
      <LogoIcon />
    </div>

    {props.children}
  </div>
)

ForgotPassword.propTypes = {
  children: PropTypes.node,
}

export default ForgotPassword

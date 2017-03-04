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

    {/* Footer */}
    <div className={styles.footer}>
      2016 版權所有為奧仕股份有限公司, OUTSM Inc
    </div>
  </div>
)

ForgotPassword.propTypes = {
  children: PropTypes.node,
}

export default ForgotPassword

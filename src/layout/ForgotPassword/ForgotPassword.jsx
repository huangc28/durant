import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import styles from './ForgotPassword.css'
import LogoIcon from '../../components/icons/logo'

const ForgotPassword = ({ children }) => (
  <div className={styles.root}>
    {/* logo */}
    <div className={styles.logo}>
      <LogoIcon />
    </div>

    { children }

    {/* Footer */}
    <div className={styles.footer}>
      2016 版權所有為奧仕股份有限公司, OUTSM Inc
    </div>
  </div>
)

ForgotPassword.propTypes = {
  children: PropTypes.node,
}

const mapStateToProps = state => ({
  token: state.forgotPassword.token,
})

export default connect(mapStateToProps, null)(ForgotPassword)

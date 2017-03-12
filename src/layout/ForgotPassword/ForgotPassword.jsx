import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import styles from './ForgotPassword.css'
import LogoIcon from '../../components/icons/logo'

const OUTSM_OFFICIAL_SITES = 'http://discover.outsm.com'

class ForgotPassword extends Component {
  componentWillMount = () => {
    if (window && window.location && !this.props.token) {
      window.location.href = OUTSM_OFFICIAL_SITES
    }
  }

  render () {
    return (
      <div className={styles.root}>
        {/* logo */}
        <div className={styles.logo}>
          <LogoIcon />
        </div>

        {this.props.children}

        {/* Footer */}
        <div className={styles.footer}>
          2016 版權所有為奧仕股份有限公司, OUTSM Inc
        </div>
      </div>
    )
  }
}

ForgotPassword.propTypes = {
  children: PropTypes.node,
  token: PropTypes.string,
}

const mapStateToProps = state => ({
  token: state.forgotPassword.token,
})

export default connect(mapStateToProps, null)(ForgotPassword)

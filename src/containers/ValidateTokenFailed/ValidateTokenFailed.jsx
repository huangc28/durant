import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import styles from './ValidateTokenFailed.css'
import NormalButton from '../../components/buttons/NormalButton'
import { requestResetPassword } from '../../actions/forgotPassword'

class ValidateTokenFailed extends Component {
  onResend = () => {
    const { email, requestResetPassword } = this.props

    requestResetPassword(email)
  }

  render () {
    const { email } = this.props

    return (
      <div className={styles.content}>
        <div className={styles.title}>
          驗證已失效
        </div>
        <div className={styles.remark}>
          <p>
            再次發送驗證至您信箱: <span> {email} </span>
          </p>
        </div>
        <div className={styles.submit}>
          <NormalButton
            title="送出"
            onClick={this.onResend}
          />
        </div>
      </div>
    )
  }
}

ValidateTokenFailed.propTypes = {
  email: PropTypes.string,
  requestResetPassword: PropTypes.func,
}

const mapStateToProps = state => ({
  email: state.forgotPassword.email,
})

export default connect(mapStateToProps, {
  requestResetPassword,
})(ValidateTokenFailed)

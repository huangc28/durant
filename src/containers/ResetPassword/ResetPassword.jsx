import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import NormalButton from '../../components/buttons/NormalButton'
import styles from './ResetPassword.css'
import { resetPassword } from '../../actions/forgotPassword'

class ResetPassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      newPassword: '',
      retypePassword: '',
      showError: false, // show password not match error.
    }
  }

  onResetPassword = evt => {
    this.setState({
      newPassword: evt.target.value,
    })

    this.setState({
      showError: false,
    })
  }

  onRetypeNewPassword = evt => {
    this.setState({
      retypePassword: evt.target.value,
    })

    this.setState({
      showError: false,
    })
  }

  onSubmit = () => {
    const { retypePassword, newPassword } = this.state
    const { userId, token } = this.props

    if (newPassword !== '' && retypePassword === newPassword) {
      this.props.resetPassword(userId, token, newPassword)

      return
    }

    this.setState({
      showError: true,
    })
  }

  render () {
    const {
      newPassword,
      retypePassword,
      showError,
    } = this.state

    return (
      <div className={styles.content}>

        {/* title */}
        <div className={styles.title}>
          <b> 忘記密碼? </b>
          <p>
            請輸入一組新的密碼.
          </p>
        </div>

        {/* inputs */}
        <div className={styles.inputContainer}>
          <input
            className={styles.resetInput}
            type="text"
            placeholder="New Password"
            value={newPassword}
            onInput={this.onResetPassword}
          />

          <input
            className={styles.resetInput}
            type="text"
            placeholder="Retype Password"
            value={retypePassword}
            onInput={this.onRetypeNewPassword}
          />
        </div>

        <div className={styles.errorContainer}>
          <p className={
              showError
              ? styles.error
              : styles.hide
            }
          >
            密碼不符合，請重新輸入.
          </p>
        </div>

        <div className={styles.submitContainer}>
          <NormalButton
            title="提交"
            onClick={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

ResetPassword.propTypes = {
  resetPassword: PropTypes.func,
  token: PropTypes.string,
  userId: PropTypes.string,
}

const mapStateToProps = state => {
  const { userId, token } = state.forgotPassword

  return {
    userId,
    token,
  }
}

export default connect(mapStateToProps, {
  resetPassword,
})(ResetPassword)

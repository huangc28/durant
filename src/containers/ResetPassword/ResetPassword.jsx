import React, { Component } from 'react'

import styles from './ResetPassword.css'
import ForgotPasswordLayout from '../../layout/ForgotPassword'


class ResetPassword extends Component {
  constructor () {
    super()

    this.state = {
      newPassword: '',
      retypePassword: '',
    }
  }

  onResetPassword = evt => {
    this.setState({
      newPassword: evt.target.value,
    })
  }

  onRetypeNewPassword = evt => {
    this.setState({
      retypePassword: evt.target.value,
    })
  }

  render () {
    const {
      newPassword,
      retypePassword,
    } = this.state

    return (
      <ForgotPasswordLayout>
        <div className={styles.content}>

          {/* title */}
          <div className={styles.title}>
            <b> Forgot you password? </b>
            <p>
              Please enter a new password for your
              <span className={styles.highlight}> huangchiheng@gmail.com </span>
              account.
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

          <div className={styles.submitContainer}>
            <button
              className={styles.smallButton}
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </ForgotPasswordLayout>
    )
  }
}

export default ResetPassword

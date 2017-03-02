import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import styles from './ResetPassword.css'
import { resetPassword } from '../../actions/forgotPassword'
import ForgotPasswordLayout from '../../layout/ForgotPassword'

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
    // const { resetPassword, userId, token } = this.props
    // @TODO test purpose only
    const userId = 'testuser1234'
    const token = 'testtoken1234'
    if (retypePassword === newPassword) {
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

          <div className={styles.errorContainer}>
            <p className={
                showError
                ? styles.error
                : styles.hide
              }
            >
              password does't match, please try again.
            </p>
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

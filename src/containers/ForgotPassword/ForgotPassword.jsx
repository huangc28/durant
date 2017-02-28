import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { requestResetPassword } from '../../actions/forgotPassword'
import styles from './ForgotPassword.css'
import ForgotPasswordLayout from '../../layout/ForgotPassword'

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line

/**
 * @param {string} email
 */
const verifyEmail = email => EMAIL_REGEX.test(email)

class ForgotPassword extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      showInputErrorMessage: false,
    }
  }

  onInput = evt => {
    this.setState({
      email: evt.target.value,
      showInputErrorMessage: false,
    })
  }

  onResetPassword = () => {
    const { email } = this.state

    const isEmail = verifyEmail(email)

    if (isEmail) {
      this.props.requestResetPassword(email)

      return
    }

    this.setState({ showInputErrorMessage: true })
  }

  render () {
    const {
      email,
      showInputErrorMessage,
    } = this.state

    return (
      <ForgotPasswordLayout>
        {/* Remark */}
        <p>
          please search username
        </p>

        {/* Email */}
        <input
          type="text"
          value={email}
          onInput={this.onInput}
        />

        <p className={
          showInputErrorMessage
            ? styles.error
            : styles.hide
          }
        >
          Please input email
        </p>

        {/* This button should extract out to a common component */}
        <button
          type="submit"
          onClick={this.onResetPassword}
        >
          Submit
        </button>
      </ForgotPasswordLayout>
    )
  }
}

const mapStateToProps = () => ({})

ForgotPassword.propTypes = {
  requestResetPassword: PropTypes.func,
}

export default connect(mapStateToProps, {
  requestResetPassword,
})(ForgotPassword)

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { requestResetPassword } from '../../actions/forgotPassword'
import styles from './ForgotPassword.css'
import ForgotPasswordLayout from '../../layout/ForgotPassword'

class ForgotPassword extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
    }
  }

  onInput = evt => {
    this.setState({
      email: evt.target.value,
    })
  }

  onResetPassword = () => {
    this.props.requestResetPassword(
      this.state.email
    )
  }

  render () {
    const { email } = this.state

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

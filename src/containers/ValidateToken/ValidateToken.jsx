import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { validateResetToken } from '../../actions/forgotPassword'

class ValidateToken extends Component {

  componentDidMount = () => {
    // @TODO hardcoded reset token for testing purpose.
    const resetToken = 'cd4e33daeea21fdc0bd5807b10e63b967e8a858f7a85b6548cc417240d3fa583bcc4742960ac05914d5cb8e8f4016f24d4e93cab5699a05e9f68eab1c11b10f2' // eslint-disable-line

    this.props.validateResetToken(resetToken)
  }

  render () {
    return (
      <div>
        {/* start writing some react... */}
        validating token...
      </div>
    )
  }
}

ValidateToken.propTypes = {
  validateResetToken: PropTypes.func,
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {
  validateResetToken,
})(ValidateToken)

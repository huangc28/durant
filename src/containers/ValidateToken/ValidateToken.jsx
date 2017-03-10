import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { validateResetToken } from '../../actions/forgotPassword'

class ValidateToken extends Component {

  componentDidMount = () => {
    const { token } = this.props.params

    this.props.validateResetToken(token)
  }

  render () {
    return (
      <div style={{ display: 'none' }}>
        {/* start writing some react... */}
        validating token...
      </div>
    )
  }
}

ValidateToken.propTypes = {
  params: PropTypes.object,
  validateResetToken: PropTypes.func,
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {
  validateResetToken,
})(ValidateToken)

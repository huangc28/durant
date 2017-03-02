import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { validateResetToken } from '../../actions/forgotPassword'

class ValidateToken extends Component {

  componentDidMount = () => {
    const { token } = this.props.params

    console.log('BRYAN: validate token', token)

    this.props.validateResetToken(token)
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
  params: PropTypes.object,
  validateResetToken: PropTypes.func,
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {
  validateResetToken,
})(ValidateToken)

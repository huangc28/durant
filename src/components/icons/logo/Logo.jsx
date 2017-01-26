import React, { PropTypes } from 'react'
import LogoSVG from '../../../../images/logo.svg'

const Logo = ({ alt }) => (
  <img src={LogoSVG} alt={alt} />
)

Logo.propTypes = {
  alt: PropTypes.string,
}

export default Logo

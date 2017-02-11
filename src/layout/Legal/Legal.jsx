import React, { PropTypes } from 'react'
import LogoIcon from '../../components/icons/logo'
import styles from './Legal.css'

const Legal = ({ children }) => (
  <div>
    <div className={styles.logo}>
      <LogoIcon />
    </div>

    {children}

    {/* Footer */}
    <div className={styles.footer}>
      2016 版權所有為奧仕股份有限公司, OUTSM Inc
    </div>
  </div>
)

Legal.propTypes = {
  children: PropTypes.node,
}

export default Legal

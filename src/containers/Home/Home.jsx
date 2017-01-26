import React, { Component, PropTypes } from 'react'
import LogoIcon from '../../components/icons/logo'

import styles from './Home.css'

const HEADER_OPTIONS = [
  {
    title: 'About Us',
  },
  {
    title: 'Products',
  },
  {
    title: 'Features',
  },
  {
    title: (
      <div className={styles.logo}>
        <LogoIcon />
      </div>
    ),
    noHightLight: true,
  },
  {
    title: 'Join Us',
  },
  {
    title: 'Investments',
  },
  {
    title: 'Contact Us',
  },
]

const HeaderOption = (option, key) => {
  const { noHightLight, title } = option

  return (
    <div
      key={key}
      className={styles.option}
    >
      <div
        className={
          noHightLight
            ? ''
            : styles.optionHighLight
        }
      />
      <a>
        {title}
      </a>
    </div>
  )
}

class Home extends Component {
  render () {
    return (
      <div>
        {/* header */}
        <div className={styles.header}>
          {
            HEADER_OPTIONS.map((option, index) => (
              HeaderOption(option, index)
            ))
          }
        </div>
      </div>
    )
  }
}

export default Home

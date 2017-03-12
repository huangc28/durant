import React from 'react'

import styles from './ResetPasswordFailed.css'
import { monza } from '../../components/styles/colors.css'
import HollowButton from '../../components/buttons/HollowButton'
import ResetPasswordFailedIcon from '../../../images/Forget_Password_04_Alert_error.svg'

const ResetPasswordFailed = () => (
  <div>
    {/* icon */}
    <div className={styles.iconContainer}>
      <img className={styles.icon} src={ResetPasswordFailedIcon} />
    </div>
    {/* remark */}
    <div className={styles.remark}>
      <h2> 密碼更新錯誤 </h2>

      <p> 請重新操作一次。 </p>
    </div>
    {/* button */}
    <div className={styles.buttonContainer}>
      <HollowButton
        color={monza}
        title="回上一頁"
      />
    </div>
  </div>
)

export default ResetPasswordFailed

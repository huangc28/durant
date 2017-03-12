import React from 'react'

import ResetPasswordSuccessIcon from '../../../images/Forget_Password_04_Alert_correct.svg'
import styles from './ResetPasswordSuccess.css'
import NormalButton from '../../components/buttons/NormalButton'

const ResetPasswordSuccess = () => (
  <div>
    {/* icon */}
    <div className={styles.iconContainer}>
      <img className={styles.icon} src={ResetPasswordSuccessIcon} />
    </div>
    {/* remark */}
    <div className={styles.remark}>
      <h2> 密碼已更新 </h2>

      <p> 請重新登入你的帳號。 </p>
    </div>
    {/* button */}
    <div className={styles.buttonContainer}>
      <NormalButton title="開啟App" />
    </div>
  </div>
)

export default ResetPasswordSuccess

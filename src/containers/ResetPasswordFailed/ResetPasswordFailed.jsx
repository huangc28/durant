import React from 'react'

import styles from './ResetPasswordFailed.css'
import { monza } from '../../components/styles/colors.css'
import HollowButton from '../../components/buttons/HollowButton'
import ForgotPasswordLayout from '../../layout/ForgotPassword'

const ResetPasswordFailed = () => (
  <ForgotPasswordLayout>
    {/* icon */}
    <div className={styles.icon}>
      <img src="http://placehold.it/50" />
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
  </ForgotPasswordLayout>
)

export default ResetPasswordFailed

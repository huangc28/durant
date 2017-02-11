import React, { PropTypes } from 'react'

import styles from './Privacy.css'
import privacyContent from './PrivacyContent'

const TermSection = ({ title, content }) => (
  <div className={styles.privacySection}>
    <h2> { title } </h2>

    <div className={styles.termsContainer}>
      {
        content.map((contentData, index) => (
          <div
            key={index}
            className={styles.term}
            dangerouslySetInnerHTML={{ __html: contentData.detail }}
          />
        ))
      }
    </div>
  </div>
)

TermSection.propTypes = {
  content: PropTypes.array,
  title: PropTypes.string,
}

const Privacy = () => (
  <div className={styles.root}>
    <h1> 隱私權條款 </h1>

    <div className={styles.privacySection}>
      <div className={styles.term}>
        奧仕股份有限公司（ OUTSM服務提供者，以下稱「本公
        司」）非常重視會員的個人隱私，且遵循保護隱私權及個
        人資料之相關法令規定。以下是本公司的隱私權與個人資
        料保護政策（以下稱「本政策」），將說明本公司會收集
        哪些個人資料與如何使用這些資料，並說明其他與您的隱
        私相關的重要事項。
      </div>
    </div>

    <div className={styles.privacyTermsContainer}>
      {
        privacyContent.info.map((privacyData, index) => (
          <TermSection
            key={index}
            title={privacyData.title}
            content={privacyData.content}
          />
        ))
      }
    </div>
  </div>
)

export default Privacy

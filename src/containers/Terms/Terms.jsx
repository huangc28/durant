import React from 'react'
import termsContent from './TermsContent'
import styles from './Terms.css'

const renderTerm = (key, title, detail) => (
  <div
    key={key}
    className={styles.term}
  >
    <div className={styles.termTitle}>
      <h2>{ title }</h2>
      <div
        className={styles.termDetail}
        dangerouslySetInnerHTML={{ __html: detail }}
      />
    </div>
  </div>
)

const Terms = () => (
  <div>
    <div className={styles.content}>
      <h1>會員使用條款</h1>
      {
        termsContent.info.map((term, key) => renderTerm(key, term.title, term.detail))
      }
    </div>
  </div>
)

export default Terms

import React from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

const Footer:React.FC = () => {
  return (
    <footer className={cx('wrapper')}>
      <p className={cx('logo')}>MOFIX</p>
      <div className={cx('contact')}>
        <a className={cx('contact-link')} href="#">facebook</a>
        <a className={cx('contact-link')} href="#">instegram</a>
        <a className={cx('contact-link')} href="#">stwitter</a>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import classNames from 'classnames/bind'
import styles from './ShowTimePage.module.scss'
import ShowTimeList from '../../components/ShowTimeList/ShowTimeList'

const cx = classNames.bind(styles)

const ShowTimePage:React.FC = () => {
  return (
    <section className={cx('wrapper')}>
      <p className={cx('title')}>Suất chiếu</p>
      <div className={cx('show-time')}>
        <ShowTimeList/>
      </div>
    </section>
  )
}

export default ShowTimePage
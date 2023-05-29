import React from 'react'
import { Outlet } from 'react-router-dom'
import classNames from 'classnames/bind'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './MainLayout.module.scss'

const cx = classNames.bind(styles)


const MainLayout:React.FC = () => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('content')}>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout
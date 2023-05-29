import React from 'react'
import Button from '../../../../../shared/components/Button/Button'

import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks'
import { currentUserSelector, isLoggedSelector } from '../../../../authentication/service/states/selectors'
import { authSlice } from '../../../../authentication/service/states/authSlice'

const cx = classNames.bind(styles)


const Header: React.FC = () => {
  
  const isLogged = useAppSelector(isLoggedSelector);
  const currentUser = useAppSelector(currentUserSelector);

  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(authSlice.actions.logout())
  }

  return (
    <header className={cx('wrapper')}>
      {/* <img className={cx('logo')} src="../../../../../resources/img/logo.png" alt="logo" /> */}
      <Link to='/home' className={cx('logo')}>MOFIX</Link>
      <nav className={cx('nav')}>
        <Link className={cx('nav-link')} to='/home'>Trang chủ</Link>
        {/* <a className={cx('nav-link')} href="#">Lịch sử đặt vé</a> */}
      </nav>
      {isLogged ? (<><p className={cx("userName")}>{ currentUser.TenKH }</p>
        <Button text='Đăng xuất' size='md' onclick={logout}/></>) : (<Link to='/login'><Button text='Đăng nhập' size='md' /></Link>)}
      {/* <p className={cx("userName")}>Nguyen Quoc Quan</p>
      <Link to='/login'><Button text='Đăng nhập' size='md' /></Link> */}
    </header>
  )
}

export default Header
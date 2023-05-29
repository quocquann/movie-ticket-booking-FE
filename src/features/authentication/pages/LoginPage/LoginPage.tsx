import React from 'react'
import classNames from 'classnames/bind';
import styles from './Login.module.scss'
import LoginForm from '../../components/LoginForm/LoginForm';

const cx = classNames.bind(styles);

const LoginPage: React.FC = () => {
  return (
    <div className={cx('wrapper')}>
      <LoginForm/>
    </div>
  )
}

export default LoginPage
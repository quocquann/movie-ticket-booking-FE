import React from 'react'
import classNames from 'classnames/bind'
import styles from './LoginForm.module.scss'
import TextField from '../../../../shared/components/TextField/TextField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/fontawesome-free-solid'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Button from '../../../../shared/components/Button/Button'
import { useAppDispatch } from '../../../../redux/hooks'
import { loginThunk } from '../../service/states/actions'
import { useNavigate } from 'react-router-dom'


const cx = classNames.bind(styles)

const LoginForm: React.FC = () => {

  const userNameRef = React.useRef<HTMLInputElement>()
  const passwordRef = React.useRef<HTMLInputElement>()

  const dispatch = useAppDispatch();

  const navigate = useNavigate();


  const login = async () => {
    const userName = userNameRef.current?.value as string
    const password = passwordRef.current?.value as string
    try {
      if (userName && password) {
        await dispatch(loginThunk({
          userName,
          password
        }))
        navigate(-1)
      }
    }
    catch {
      throw new Error()
    }
    
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('icon')}>
        <FontAwesomeIcon size='6x' icon={faUserCircle as IconProp} color='#0061f2'/>
      </div>
      <h2 className={cx('title')}>Login</h2>
      <div className={cx('form')}>
        <div className={cx('user-name')}>
          <p className={cx('label')}>User Name:</p>
          <TextField reff={userNameRef as React.MutableRefObject<HTMLInputElement>} />
        </div>
      <div className={cx('password')}>
          <p className={cx('label')}>Password:</p>
          <TextField reff={passwordRef as React.MutableRefObject<HTMLInputElement>} />
      </div>
        <div className={cx('btn-wrapper')}>
          <Button text="Login" onclick={login} />
        </div>  
        
      </div>
    </div>
  )
}

export default LoginForm
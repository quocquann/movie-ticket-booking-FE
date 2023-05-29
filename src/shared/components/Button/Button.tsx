import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

interface ButtonProps {
  text?: string
  size?: string
  onclick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, size, disabled = false, onclick }) => {
  
  return (
    <button onClick={onclick} disabled={disabled} className={cx('button', size)}>{text}</button>
  )
}

export default Button
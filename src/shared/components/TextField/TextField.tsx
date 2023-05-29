import React from 'react'
import classNames from 'classnames/bind'
import styles from './TextField.module.scss'

const cx = classNames.bind(styles)

interface TextFieldProps {
  reff?: React.MutableRefObject<HTMLInputElement>
}

const TextField:React.FC<TextFieldProps> = ({reff}) => {
  return (
    <input ref={reff} className={cx('text-field')} type='text'/>
  )
}

export default TextField
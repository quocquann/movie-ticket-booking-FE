import React from 'react'
import classNames from 'classnames/bind'
import styles from './ShowTimeItem.module.scss'
import Button from '../../../../shared/components/Button/Button'
import { ShowTime } from '../../models/interface'
import { Link, useParams } from 'react-router-dom'

const cx = classNames.bind(styles)

interface ShowTimeItemProps {
  showTime: ShowTime
}

const ShowTimeItem: React.FC<ShowTimeItemProps> = ({ showTime }) => {
  
  const { TenPhongChieu, TenRapChieu, GioBatDau, GioKetThuc, MaSuatChieu } = showTime
  
  const {movieId} = useParams()

  return (
    <div className={cx('wrapper')}>
      <p className={cx('cinema-name')}>{TenRapChieu}</p>
      <p className={cx('room-name')}>{TenPhongChieu}</p>
      <p className={cx('time')}>{GioBatDau} - {GioKetThuc}</p>
      <Link to={`/booking/seat/${movieId}/${MaSuatChieu}`}><Button text='Đặt vé' size='md' /></Link>
      
    </div>
  )
}

export default ShowTimeItem
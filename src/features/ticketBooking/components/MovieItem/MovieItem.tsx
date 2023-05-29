import React from 'react'
import classNames from 'classnames/bind'
import styles from './MovieItem.module.scss'
import { Movie } from '../../models/interface'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)

interface MovieProps{
  movie: Movie
}

const MovieItem: React.FC<MovieProps> = ({ movie }) => {
  const { TenPhim, ThoiGianKhoiChieu, ThoiLuong, DaoDien, MaPhim} = movie
  return (
    <div className={cx('wrapper')}>
      <img className={cx('poster')} src={`http://localhost:3001/img/${movie.Anh}`} />
      <div className={cx('infor')}>
        <div className={cx('top')}>
          <Link className={cx('movie-name')} to={`/detail/${MaPhim}`}>{ TenPhim }</Link>
          <p className={cx('date')}>{ ThoiGianKhoiChieu.toString().split('T')[0]}</p>
        </div>

        <div className={cx('bottom')}>
          <p>{ DaoDien}</p>
          <p>{ThoiLuong} phút</p>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
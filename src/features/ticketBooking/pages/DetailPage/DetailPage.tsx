import React from 'react'
import classNames from 'classnames/bind'
import styles from './DetailPage.module.scss'
import Button from '../../../../shared/components/Button/Button'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { getMovieByIdThunk } from '../../service/states/actions'
import { movieDetail } from '../../service/states/selectors'

const cx = classNames.bind(styles)

// interface DetailPageProps{
//   movie: Movie
// }

const DetailPage: React.FC = () => {
  
  const { movieId } = useParams()
  const dispatch = useAppDispatch()
  const { TenPhim, ThoiGianKhoiChieu, ThoiLuong, DaoDien, DonGia, Anh, MoTa, MaPhim } = useAppSelector(movieDetail)

  React.useEffect(() => {
    dispatch(getMovieByIdThunk(movieId as string))
  },[dispatch, movieId])

  return (
    <div className={cx('wrapper')}>
      <img className={cx('poster')} src={`${process.env.REACT_APP_BASE_URL}img/${Anh}`} alt="poster" />
      <div className={cx('infor')}>
        <p className={cx('movie-name')}>{TenPhim}</p>
        <div className={cx('detail')}>
          <p>Đạo diễn: {DaoDien }</p>
          {/* <p>Thể loại: hài hước</p> */}
          <p>Thời lượng: {ThoiLuong } phut</p>
          <p>Khởi chiếu: {ThoiGianKhoiChieu?.toString().split('T')[0]}</p>
        </div>
        <p className={cx('price')}>Giá: {DonGia} đồng</p>
        <p className={cx('desciption')}>
          {MoTa}
        </p>
        <Link to={`/booking/showTime/${MaPhim}`}><Button text='Đăt vé' /></Link>      
      </div>
    </div>
  )
}

export default DetailPage
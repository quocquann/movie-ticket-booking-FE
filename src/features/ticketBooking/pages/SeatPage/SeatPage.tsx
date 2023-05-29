import React from 'react'
import classNames from 'classnames/bind'
import styles from './SeatPage.module.scss'
import SeatList from '../../components/SeatList/SeatList'
import Button from '../../../../shared/components/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { movieDetail, selectedSeatIdsSelector, selectedShowTime } from '../../service/states/selectors'
import { useParams } from 'react-router-dom'
import { getMovieByIdThunk, getShowTimeByIdThunk, updateSeatStatusesThunk } from '../../service/states/actions'

const cx = classNames.bind(styles)

const SeatPage: React.FC = () => {
  
  const selectedSeatIds = useAppSelector(selectedSeatIdsSelector)
  const dispatch = useAppDispatch()
  const movie = useAppSelector(movieDetail)
  const showTime = useAppSelector(selectedShowTime)
  
  const { movieId, showTimeId } = useParams()

  React.useEffect(() => {
    dispatch(getMovieByIdThunk(movieId as string))
  }, [dispatch, movieId])
  
  React.useEffect(() => {
    dispatch(getShowTimeByIdThunk(showTimeId as string))
  }, [dispatch, showTimeId])


  const bookingTicket = () => {
    dispatch(updateSeatStatusesThunk({ seatIds:selectedSeatIds, showTimeId: showTimeId as string }))
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('screen')}>Màn Hình</div>
      <SeatList />
      
      <div className={cx('bill')}>
        <div className={cx('left')}>
          <p className={cx('movie-name')}>{showTime.TenPhim}</p>
          <p className={cx('cinema')}>Rạp Chiếu: { showTime.TenRapChieu}</p>
          <p className={cx('room')}>Phòng chiếu: {showTime.TenPhongChieu}</p>
          <p className={cx('date')}>Ngày chiếu: { showTime?.NgayChieu?.toString().split('T')[0]}</p>
          <p className={cx('time')}>Thời gian: { showTime.GioBatDau}</p>
        </div>
        <div className={cx('mid')}>
          
        </div>
        <div className={cx('right')}>
          <p className={cx('seats')}>Ghế: { selectedSeatIds + ' ' }</p>
          <p className={cx('quantity')}>Số lượng: {selectedSeatIds.length}</p>
          <p className={cx('price')}>Tổng tiền: {movie.DonGia * selectedSeatIds.length}</p>
          <div className={cx('btn-wrapper')}>
            <Button text='Đặt vé' size='md' onclick={bookingTicket} disabled={ selectedSeatIds.length <= 0} />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SeatPage
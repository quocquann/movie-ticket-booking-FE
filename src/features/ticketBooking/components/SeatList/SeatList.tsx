import React from 'react'
import classNames from 'classnames/bind'
import styles from './SeatList.module.scss'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { getSeatStatusByShowTimeIdThunk } from '../../service/states/actions'
import { seatStatusSelector, selectedSeatIdsSelector } from '../../service/states/selectors'
import { ticketBookingSlice } from '../../service/states/ticketBookingSlice'

const cx = classNames.bind(styles)

const SeatList: React.FC = () => {

  const { showTimeId } = useParams()
  const dispatch = useAppDispatch()
  const selectedSeatIds = useAppSelector(selectedSeatIdsSelector)
  const seatStatuses = useAppSelector(seatStatusSelector)


  React.useEffect(() => {
    dispatch(getSeatStatusByShowTimeIdThunk(showTimeId as string))
  }, [dispatch, showTimeId])

  const selectOrUnselectMovie = (movieId: string, status: number) => {
    
    if (status === 1) {
      dispatch(ticketBookingSlice.actions.selectOrUnselectSeat(movieId))
    }
  }

  

  return (
    <div className={cx('wrapper')}>
      {seatStatuses.map((seatStatus) => <div key={seatStatus.MaGhe} className={cx('seat-wrapper')}><div onClick={() => selectOrUnselectMovie(seatStatus.MaGhe, seatStatus.TrangThai)} className={cx('seat', seatStatus.TrangThai === 2 ? 'bought' : '', selectedSeatIds.includes(seatStatus.MaGhe) ? 'selected' : '')}>{seatStatus.TenGhe}</div></div>)}
    </div>
  )
}

export default SeatList
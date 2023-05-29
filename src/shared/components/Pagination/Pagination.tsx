import React from 'react'
import classNames from 'classnames/bind'
import styles from './Pagination.module.scss'
import { ticketBookingSlice } from '../../../features/ticketBooking/service/states/ticketBookingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { pageSelector, totalPageSelector } from '../../../features/ticketBooking/service/states/selectors';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getTotalPageThunk } from '../../../features/ticketBooking/service/states/actions';

const cx = classNames.bind(styles)

// interface PaginationProps{
//   totalPage: number;
//   // currentPage: number;
// }

const Pagination: React.FC = ( ) => {
  
  const LIMIT = 5;
  let currentPage = useSelector(pageSelector)
  const totalPage = useAppSelector(totalPageSelector)
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getTotalPageThunk())
  },[dispatch])

  let displayPages: number[] = React.useMemo(() => {
    let p: number[] = []
    for (let i = 0; i < LIMIT; i++) {
      if (currentPage === 1) {
        p = [...p, currentPage + i]
      } else if (currentPage > totalPage - LIMIT) {
        p = [...p, currentPage - (currentPage - (totalPage - LIMIT)) + i]
      } else {
        p = [...p, currentPage + i - 1]
      }
    }
    return p
  }, [currentPage, totalPage])
  
  const onPageItemClick = (page: number) => {
    dispatch(ticketBookingSlice.actions.setPage(page))
  }

  const prevPage = () => {
    dispatch(ticketBookingSlice.actions.prevPage())
  }

  const nextPage = () => {
    dispatch(ticketBookingSlice.actions.nextPage())
  }

  return (
    <div className={cx('wrapper')}>
      <div onClick={prevPage} className={cx('page-item', currentPage === 1 ? 'hide' : '')}> prev</div>
      {displayPages.map((item) => (<div key={item} onClick={() => onPageItemClick(item)} className={cx('page-item', item === currentPage ? 'active' : '')}>{item}</div>))}
      <div onClick={nextPage} className={cx('page-item', currentPage === totalPage ? 'hide' : '')}>next</div>
    </div>
  )
}

export default Pagination
import React from 'react'
import ShowTimeItem from '../ShowTimeItem/ShowTimeItem'
import classNames from 'classnames/bind'
import styles from './ShowTimeList.module.scss'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { getShowTimeByMovieIdThunk } from '../../service/states/actions'
import { showTimesSelector } from '../../service/states/selectors'

const cx = classNames.bind(styles)

const ShowTimeList: React.FC = () => {
  
  const { movieId } = useParams()
  const dispatch = useAppDispatch()
  const showTimes = useAppSelector(showTimesSelector)

  React.useEffect(() => {
    dispatch(getShowTimeByMovieIdThunk(movieId as string))
  },[movieId, dispatch])

  return (
    <div className={cx('wrapper')}>
      {showTimes.map((showTimeItem) => <ShowTimeItem key={showTimeItem.MaSuatChieu} showTime={showTimeItem}/>)}
      
      {/* <ShowTimeItem />
      <ShowTimeItem />
      <ShowTimeItem />
      <ShowTimeItem />
      <ShowTimeItem />
      <ShowTimeItem />
      <ShowTimeItem /> */}
    </div>
  )
}

export default ShowTimeList
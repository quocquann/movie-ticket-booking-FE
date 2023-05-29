import React from 'react'
import MovieItem from '../MovieItem/MovieItem'
import classNames from 'classnames/bind'
import styles from './MovieList.module.scss'
import { getMoviesThunk } from '../../service/states/actions'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { moviesSelector, pageSelector } from '../../service/states/selectors'

const cx = classNames.bind(styles)

const MovieList: React.FC = () => {

  let page = useAppSelector(pageSelector)
  const dispatch = useAppDispatch()
  const movies = useAppSelector(moviesSelector)

  React.useEffect(() => {
    dispatch(getMoviesThunk(page))
  }, [dispatch, page])

  return (
    <div className={cx('wrapper')}>
      {movies.map(movie => <MovieItem key={movie.MaPhim} movie={movie} />)}
    </div>
  )
}

export default MovieList
import React from 'react'
import classNames from 'classnames/bind'
import styles from './HomePage.module.scss'
import MovieList from '../../components/MovieList/MovieList'
import Pagination from '../../../../shared/components/Pagination/Pagination'

const cx = classNames.bind(styles)

const HomePage: React.FC = () => {

  return (
    <section className={cx('wrapper')}>
      <p className={cx('title')}>Phim đang chiếu</p>
      <div className={cx('movies')}>
        <MovieList/>
      </div>
      <Pagination/>
    </section>
  )
}

export default HomePage
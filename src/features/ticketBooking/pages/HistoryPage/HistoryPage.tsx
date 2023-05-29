import React from 'react'
import classNames from 'classnames/bind'
import styles from './HistoryPage.module.scss'

const cx = classNames.bind(styles)

const HistoryPage:React.FC = () => {
  return (
    <section className={cx('wrapper')}>
      <p className={cx('title')}>Lịch sử mua vé</p>
      <div className={cx('history')}>
        <table className={cx('table')}>
          <tr>
            <th>Tên phim</th>
            <th>Rạp chiếu</th>
            <th>Phòng chiếu</th>
            <th>Ngay chiếu</th>
            <th>Giờ chiếu</th>
            <th>Giờ mua</th>
            <th>Ghế</th>
          </tr>
          <tr>
            <td>Duty After School</td>
            <td>Lotte NCT</td>
            <td>Phòng 1</td>
            <td>11/02/2002</td>
            <td>12:00</td>
            <td>21/12/2002</td>
            <td>A1, A2A1, A2A1, A2</td>
          </tr>
          <tr>
            <td>Duty After School</td>
            <td>Lotte NCT</td>
            <td>Phòng 1</td>
            <td>11/02/2002</td>
            <td>12:00</td>
            <td>21/12/2002</td>
            <td>A1</td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default HistoryPage
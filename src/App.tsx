import React from 'react';
import LoginPage from './features/authentication/pages/LoginPage/LoginPage';
import GlobalStyles from './shared/components/GlobalStyles/GlobalStyles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './features/ticketBooking/layouts/MainLayout/MainLayout';
import HomePage from './features/ticketBooking/pages/HomePage/HomePage';
import DetailPage from './features/ticketBooking/pages/DetailPage/DetailPage';
import ShowTimePage from './features/ticketBooking/pages/ShowTimePage/ShowTimePage';
import SeatPage from './features/ticketBooking/pages/SeatPage/SeatPage';
import HistoryPage from './features/ticketBooking/pages/HistoryPage/HistoryPage';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import PrivateRoute from './shared/components/PrivateRoute/PrivateRoute';

const App:React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Navigate to='home'/> } />
            <Route path='login' element={<LoginPage />} />
            <Route path='home' element={<MainLayout/>}>
              <Route path='' element={<HomePage/>} />
            </Route>
            <Route path='detail' element={<MainLayout />}>
              <Route path=':movieId' element={<DetailPage />} />
            </Route>
            <Route path='booking' element={<MainLayout />}>
              <Route path='showTime/:movieId' element={<ShowTimePage />} />

              <Route path='seat/:movieId/:showTimeId' element={<PrivateRoute><SeatPage/></PrivateRoute>} />
            </Route>

            <Route path='history' element={<MainLayout />}>
              <Route path='' element={<HistoryPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalStyles>
    </Provider>
  );
}

export default App;

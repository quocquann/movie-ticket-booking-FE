import { createSlice } from '@reduxjs/toolkit';
import { getMovieByIdThunk, getMoviesThunk, getSeatStatusByShowTimeIdThunk, getShowTimeByIdThunk, getShowTimeByMovieIdThunk, getTotalPageThunk, updateSeatStatusesThunk } from './actions';
import { Movie, SeatStatus, ShowTime } from '../../models/interface';


export interface TicketBookingState {
  movies: Movie[],
  currentPage: number,
  totalPage: number,
  movieDetail: Movie,
  showTimes: ShowTime[],
  seatStatuses: SeatStatus[],
  selectedSeatIds: string[],
  selectedShowTime: ShowTime
}

export const ticketBookingSlice = createSlice({
  name: 'ticketBooking',
  initialState: {
    movies: [],
    currentPage: 1,
    totalPage: 9,
    movieDetail: {} as Movie,
    showTimes: [],
    seatStatuses: [],
    selectedSeatIds: [],
    selectedShowTime: {} as ShowTime
  } as TicketBookingState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload
    },
    prevPage(state) {
      state.currentPage--
    },
    nextPage(state) {
      state.currentPage++;
    },
    selectOrUnselectSeat(state, action) {
      if (state.selectedSeatIds.includes(action.payload)) {
        state.selectedSeatIds = state.selectedSeatIds.filter(seatId => seatId !== action.payload)
      } else {
        state.selectedSeatIds = [...state.selectedSeatIds, action.payload]
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getMoviesThunk.fulfilled, (state, action) => {
        state.movies = action.payload
      }).addCase(getTotalPageThunk.fulfilled, (state, action) => {
        state.totalPage = action.payload
      }).addCase(getMovieByIdThunk.fulfilled, (state, action) => {
        state.movieDetail = action.payload
      }).addCase(getShowTimeByMovieIdThunk.fulfilled, (state, action) => {
        state.showTimes = action.payload
      }).addCase(getSeatStatusByShowTimeIdThunk.fulfilled, (state, action) => {
        state.seatStatuses = action.payload
      }).addCase(getShowTimeByIdThunk.fulfilled, (state, action) => {
        state.selectedShowTime = action.payload
      }).addCase(updateSeatStatusesThunk.fulfilled, (state) => {
        state.selectedSeatIds = []
      })
  }
})

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMovieById, getMovies, getTotalPage, getShowTimesByMovieId, getSeatStatusByShowTimeId, getShowTimeById, updateSeatStatuses } from '../api/apiRequest';

export const getMoviesThunk = createAsyncThunk('movie/getMovies', async (page: number) => {
  try {
    const data = await getMovies(page);
    return data
  } catch {
    throw new Error()
  }
})

export const getMovieByIdThunk = createAsyncThunk('movi/getMovieByTd', async (movieId: string) => {
  try {
    const data = await getMovieById(movieId)
    return data
  } catch {
    throw new Error()
  }
})

export const getTotalPageThunk = createAsyncThunk('movie/getTotalPage', async () => {
  try {
    const data = await getTotalPage();
    return data
  } catch {
    throw new Error()
  }
})

export const getShowTimeByMovieIdThunk = createAsyncThunk('showTime/getShowTimeByMovieId', async (movieId: string) => {
  try {
    const data = await getShowTimesByMovieId(movieId);
    return data
  } catch {
    throw new Error()
  }
})

export const getSeatStatusByShowTimeIdThunk = createAsyncThunk('seat/getSeatStatusByShowTimeId', async (showTimeId: string) => {
  try {
    const data = await getSeatStatusByShowTimeId(showTimeId)
    return data
  } catch {
    throw new Error()
  }
})

export const getShowTimeByIdThunk = createAsyncThunk('showTime/getShowTimeById', async (showTimeId: string) => {
  try {
    const data = await getShowTimeById(showTimeId)
    return data
  } catch {
    throw new Error()
  }
})

interface updateSeatStatusesThunkParams {
  seatIds: string[],
  showTimeId: string
}

export const updateSeatStatusesThunk = createAsyncThunk('seatStatus/updateSeatStatuses', async ({seatIds, showTimeId}: updateSeatStatusesThunkParams) => {
  
  try {
    await updateSeatStatuses(seatIds, showTimeId)
  } catch {
    throw new Error()
  }
})
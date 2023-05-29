import { instance } from "../../../../axios/config"
import { Movie, SeatStatus, ShowTime } from "../../models/interface";

export const getMovies = async (page: number): Promise<Movie[]> => {
  try {
    let res = await instance.get(`movies?page=${page}`)
    return res.data
  } catch {
    throw new Error()
  }
}

export const getMovieById = async (movieId: string): Promise<Movie> => {
  try {
    let res = await instance.get(`movies/${movieId}`)
    return res.data[0]
  } catch {
    throw new Error()
  }
}

export const getTotalPage = async (): Promise<number> => {
  try {
    let res = await instance.get('movies/getTotalPageOfMovie')
    return res.data
  } catch {
    throw new Error()
  }
}

export const getShowTimesByMovieId = async (movieId: string): Promise<ShowTime[]> => {
  try {
    let res = await instance.get(`showTime/getShowTimeByMovieId?movieId=${movieId}`)
    return res.data
  } catch {
    throw new Error()
  }
}

export const getSeatStatusByShowTimeId = async (showTimeId: string): Promise<SeatStatus[]> => {
  try {
    let res = await instance.get(`seatStatus/getSeatStatusByShowTimeId?showTimeId=${showTimeId}`)
    return res.data
  } catch {
    throw new Error()
  }
}

export const getShowTimeById = async (showTimeId: string):Promise<ShowTime> => {
  try {
    let res = await instance.get(`showTime/${showTimeId}`)
    return res.data[0]
  } catch {
    throw new Error()
  }
}

export const updateSeatStatuses = async (seatIds: string[], showTimeId: string) => {
  try {
    await instance.put(`seatStatus/updateSeatStatus`, { seatIds, showTimeId })
  } catch {
    throw new Error()
  }
}
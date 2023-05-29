import { AuthState } from "../../../authentication/service/states/authSlice";
import { TicketBookingState } from "./ticketBookingSlice";

export const moviesSelector = (state: { ticketBooking: TicketBookingState; authentication: AuthState; }) => state.ticketBooking.movies
export const pageSelector = (state: { ticketBooking: TicketBookingState; authentication: AuthState; }) => state.ticketBooking.currentPage
export const totalPageSelector = (state: { ticketBooking: TicketBookingState; authentication: AuthState; }) => state.ticketBooking.totalPage
export const movieDetail = (state: { ticketBooking: TicketBookingState; authentication: AuthState; }) => state.ticketBooking.movieDetail
export const showTimesSelector = (state: { ticketBooking: TicketBookingState; authentication: AuthState; }) => state.ticketBooking.showTimes
export const seatStatusSelector = (state: { ticketBooking: TicketBookingState; authentication: AuthState; }) => state.ticketBooking.seatStatuses
export const selectedSeatIdsSelector = (state: { ticketBooking: TicketBookingState; authentication: AuthState; }) => state.ticketBooking.selectedSeatIds
export const selectedShowTime = (state: { ticketBooking: TicketBookingState; authentication: AuthState; }) => state.ticketBooking.selectedShowTime
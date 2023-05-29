import { TicketBookingState } from "../../../ticketBooking/service/states/ticketBookingSlice";
import { AuthState } from "./authSlice";

export const isLoggedSelector = (state: { ticketBooking: TicketBookingState; authentication: AuthState; }) => state.authentication.isLogged
export const currentUserSelector = (state: { ticketBooking: TicketBookingState; authentication: AuthState; }) => state.authentication.currentUser
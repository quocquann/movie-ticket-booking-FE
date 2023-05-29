import { configureStore } from "@reduxjs/toolkit";
import { ticketBookingSlice } from "../features/ticketBooking/service/states/ticketBookingSlice";
import { authSlice } from "../features/authentication/service/states/authSlice";


export const store = configureStore({
  reducer: {
    ticketBooking: ticketBookingSlice.reducer,
    authentication: authSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
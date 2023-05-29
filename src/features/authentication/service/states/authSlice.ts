import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./actions";
import { User } from "../../models/interface";


export interface AuthState {
  isLogged: boolean
  currentUser: User
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: localStorage.getItem('token') ? true : false,
    currentUser: {} as User
  } as AuthState,
  reducers: {
    logout(state) {
      state.isLogged = false;
      localStorage.removeItem('token')
      console.log('logout')
    }
  },
  extraReducers: builder => {
    builder.addCase(loginThunk.fulfilled, (state, aciton) => {
      state.currentUser = {
        MaKH: aciton.payload.MaKH,
        TenKH: aciton.payload.TenKH
      }
      localStorage.setItem('token', aciton.payload.accessToken);
      state.isLogged = true;

    })
  }
})
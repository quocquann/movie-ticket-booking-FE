import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../api/apiRequest";
import { LoginPayLoad } from "../../models/interface";


export const loginThunk = createAsyncThunk('auth/login', async ({userName, password}: LoginPayLoad) => {
  try {
    const data = await login(userName, password)
    return data
  } catch {
    throw new Error()
  }
})
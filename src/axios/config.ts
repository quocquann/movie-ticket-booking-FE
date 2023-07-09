import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}api/`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  } 
});


export interface LoginPayLoad {
  userName: string
  password: string
}

export interface LoginResponse {
  MaKH: string
  TenKH: string
  accessToken: string
}

export interface User{
  MaKH: string
  TenKH: string
}
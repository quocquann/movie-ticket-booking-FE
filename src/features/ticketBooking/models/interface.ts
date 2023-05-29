export interface Movie {
  MaPhim: string;
  Anh: string;
  DaoDien: string;
  DonGia: number;
  MoTa: string;
  TenPhim: string;
  ThoiGianKetThuc: Date;
  ThoiGianKhoiChieu: Date;
  ThoiLuong: number;
}

export interface ShowTime {
  MaSuatChieu: string,
  DiaChi: string;
  GioBatDau: string;
  GioKetThuc: string;
  NgayChieu: Date;
  TenPhim: string;
  TenPhongChieu: string;
  TenRapChieu: string;
}

export interface SeatStatus {
  MaGhe: string;
  TenGhe: string;
  TrangThai: number;
}



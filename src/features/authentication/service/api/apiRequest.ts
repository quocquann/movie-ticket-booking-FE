import { instance } from "../../../../axios/config"
import { LoginResponse } from "../../models/interface"


export const login = async (userName: string, password: string): Promise<LoginResponse> => {
  try {
    const loginPayLoad = { userName, password }
    const res = await instance.post('access/login', loginPayLoad)
    return res.data
  } catch {
    throw new Error()
  }
}
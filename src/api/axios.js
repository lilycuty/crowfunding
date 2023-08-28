import { default as axios } from 'axios'

export default axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }
})

//Tạo 1 biến lưu trữ config
export const axiosPrivate = axios.create({
  baseURL: 'http://localhost:4001',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }
})

import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  timeout: 5000
})
// service.interceptors.request.use(function(config){
//
// })
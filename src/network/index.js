import axios from "axios"

const request = axios.create({
  baseURL: 'http://ihrm-java.itheima.net'
})

// 请求拦截器
request.interceptors.request.use(config => {
  return config
}, err => {
  console.log(err)
})

// 响应拦截器
request.interceptors.response.use(res => {
  return res
}, err => {
  console.log(err)
})

export default request

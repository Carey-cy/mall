import axios from 'axios'

export function request (config) {
  //  创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:7888/api/hy66',
    timeout: 5000
  })
  //  请求拦截
  instance.interceptors.request.use(config => {
    return config
  })
  //  响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  //  返回一个promise发送网络请求
  return instance(config)
}

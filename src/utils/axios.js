import _axios from 'axios'

export const axios = _axios.create({
  baseURL: process.env.REACT_APP_SERVER_URI,
})

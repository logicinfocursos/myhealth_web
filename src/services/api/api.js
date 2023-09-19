import axios from 'axios'
//import { __SETUP__ } from '../../config/constants/setUp'


//export const api = axios.create({ baseURL: __SETUP__.API_BASEURL })
export const api = axios.create({ baseURL: process.env.REACT_APP_API_BASEURL })

    //export const api = axios.create({ baseURL: "http://localhost:5000" })
    //export const api = axios.create({ baseURL: "http://localhost:8080/api" })
    //export const api = axios.create({ baseURL: "http://automaticlab.com.br/api" })
    //export const api = axios.create({ baseURL: __SETUP__.API_BASEURL })
    //export const api = axios.create({ baseURL: "http://oxyl.tecnologia.ws/api" })
    //export const api = axios.create({ baseURL: __SETUP__.API_BASEURL })
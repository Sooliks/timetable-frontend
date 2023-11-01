import axios, {AxiosError, AxiosResponse,InternalAxiosRequestConfig} from "axios";
import {Config} from "../conf";
import { cookies } from "../data/cookies/cookies";
const $client = axios.create({
    baseURL: Config.isDevelopment ? 'http://localhost:5258/api' : '/api'
})
const $clientAuth = axios.create({
    baseURL: Config.isDevelopment ? 'http://localhost:5258/api' : '/api'
})
const authInterceptor = (config: InternalAxiosRequestConfig) => {
    config.headers.authorization = `${cookies.get('accessToken')}`;
    return config;
}
$clientAuth.interceptors.request.use(authInterceptor)
$clientAuth.interceptors.response.use((res: AxiosResponse)=>{
    return res;
}, (error: AxiosError) => {
    if (error.response!.status === 401) {
        window.location.replace('/profile');
    }
    return Promise.reject(error);
})
$client.interceptors.response.use((res: AxiosResponse)=>{
    return res;
}, (error: AxiosError) => {
    return Promise.reject(error);
})


export {
    $client,
    $clientAuth
}
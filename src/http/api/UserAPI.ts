import { AxiosResponse } from "axios";
import { $client, $clientAuth } from "..";

export namespace UserAPI {
    export const registration = async (email: string, password: string): Promise<AxiosResponse> => {
        return await $client.post('/account/register', {email, password});
    }
    export const login = async (email: string, password: string): Promise<AxiosResponse> => {
        return await $client.post('/account/login', {email, password});
    }
    export const tokenRefresh = async (accessToken: string, refreshToken: string): Promise<AxiosResponse> => {
        return await $client.post('/account/token/refresh', {accessToken, refreshToken});
    }
    export const tokenRevoke = async (refreshToken: string): Promise<AxiosResponse> => {
        return await $client.post('/account/token/revoke', {refreshToken});
    } 
    export const sendCode = async (userEmail: string): Promise<AxiosResponse> => {
        return await $clientAuth.post('/account/register/send-email', {userEmail});
    } 
    export const globalLogout = async (): Promise<AxiosResponse> => {
        return await $clientAuth.post('/account/global-logout');
    } 
    
}
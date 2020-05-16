import {AxiosRequestConfig, AxiosResponse} from "axios";

declare module 'axios' {
    export interface AxiosInstance {
        request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<T>;

        get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<T>;

        delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<T>;

        head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<T>;

        options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<T>;

        post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;

        put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;

        patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    }
}
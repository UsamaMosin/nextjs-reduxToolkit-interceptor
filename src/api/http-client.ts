import { REQUEST_HEADER_AUTH_KEY, TOKEN_TYPE } from "@/configs/constants/api.constant";
import store from "@/store/store";
import axios, { AxiosHeaders, InternalAxiosRequestConfig } from "axios";


export const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

export const httpClient = axios.create({
    baseURL: baseUrl,
    timeout: 60000
});

const onRequest = (config: InternalAxiosRequestConfig) => {
    if (!config.headers) {
        config.headers = new AxiosHeaders();
    }

    if (!config.headers.has(REQUEST_HEADER_AUTH_KEY)) {
        const { token } = store.getState().auth.session;
        debugger
        if (token) {
            config.headers[
                REQUEST_HEADER_AUTH_KEY
            ] = `${TOKEN_TYPE}${token}`
        }
    }

    return config;
}

httpClient.interceptors.request.use(
    onRequest,
    (error) => {
        return Promise.reject(error)
    }
)
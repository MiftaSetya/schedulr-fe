import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("token")
        if(token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error: AxiosError) => {
        console.error("Request error:", error)
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
        if(error.response) {
            const { status } = error.response

            if(status == 401) {
                console.warn("Token expired, Redirecting to login...")
                localStorage.removeItem("token")
                window.location.href = "/login"
            }
        } else {
            console.error("Network error : ", error.message)
        }

        return Promise.reject(error)
    }
)

export default api
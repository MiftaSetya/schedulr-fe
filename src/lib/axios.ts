import { storage } from "@/utils/storage";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api"
})

api.interceptors.request.use(
    (config) => {
        const token = storage.getToken()
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

export default api
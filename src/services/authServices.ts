import api from "@/lib/api";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "@/types/auth";

export const authService = {
    login: async (payload: LoginRequest): Promise<LoginResponse> => {
        const res = await api.post<LoginResponse>("/auth/login", payload);
        return res.data;
    },

    register: async (payload: RegisterRequest): Promise<RegisterResponse> => {
        const res = await api.post<RegisterResponse>("/auth/register", payload);
        return res.data
    }
}
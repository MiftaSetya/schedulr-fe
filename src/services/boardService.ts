import api from "@/lib/api";
import { Board, BoardRequest } from "@/types/board";

export const boardService = {
    getByOwner: async (): Promise<Board[]> => {
        const res = await api.get<{ data: Board[] }>("/board");
        return res.data.data;
    },

    createBoard: async (payload: BoardRequest): Promise<Board> => {
        const res = await api.post<{ data: Board }>("/board", payload);
        return res.data.data;
    }
}
"use client";

import api from "@/lib/axios";
import React, { useEffect, useState } from "react";

interface Board {
  ID: number;
  name: string;
  owner_id: string;
}

export default function Dashboard() {
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const res = await api.get("/board");
        setBoards(res.data.data);
      } catch (error) {
        console.error("Error : ", error);
      }
    };

    fetchBoard();
  }, []);


  return (
    <div className="mt-[18px] mx-[228px] w-full">
      <h1 className="font-bold text-2xl text-blue-500">Your Boards</h1>
      <div className="grid grid-cols-4 mt-2 gap-4 font-semibold text-lg">
        <div className="w-full flex justify-center items-center text-white bg-slate-400 h-[100px] rounded-md hover:bg-slate-500">
          Create new board
        </div>
        {boards.map((board) => (
          <div
            key={board.ID}
            className="w-full flex justify-center items-center text-white bg-blue-500 h-[100px] rounded-md hover:bg-blue-600"
          >
            {board.name}
          </div>
        ))}
      </div>
    </div>
  );
}

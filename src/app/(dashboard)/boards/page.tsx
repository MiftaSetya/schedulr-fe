"use client";

import { boardService } from "@/services/boardService";
import { Board, BoardRequest } from "@/types/board";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [newBoard, setNewBoard] = useState<BoardRequest>({ name: "" });
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addBoard = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newBoard.name.trim()) return;

    try {
      setIsLoading(true);
      const created: Board = await boardService.createBoard(newBoard);
      setBoards((prev) => [...prev, created]);
      setNewBoard({ name: "" });
      setOpenModal(false);
    } catch (err) {
      console.error("Error : ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const data = await boardService.getByOwner();
        setBoards(data);
      } catch (error) {
        console.error("Error : ", error);
      }
    };

    fetchBoard();
  }, []);

  return (
    <>
      <div className="mt-[18px] mx-[228px] w-full">
        <h1 className="font-bold text-2xl text-blue-500">Your Boards</h1>
        <div className="grid grid-cols-4 mt-2 gap-4 font-semibold text-lg">
          <button
            color="none"
            className="w-full flex justify-center items-center text-white bg-slate-400 h-[100px] rounded-md hover:bg-slate-500"
            onClick={() => setOpenModal(true)}
          >
            Create new board
          </button>
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

      {/* Modal */}
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <ModalHeader className="bg-white pr-4 pt-4 rounded-t-lg">
          <span className="pl-4 text-black font-semibold">
            Create new board
          </span>
        </ModalHeader>
        <hr className="w-full border-t-slate-300" />
        <ModalBody className="flex flex-col bg-white rounded-b-lg pt-3">
          <span className="mb-1">Name</span>
          <form onSubmit={addBoard} className="flex flex-col">
            <input
              type="text"
              placeholder="Enter board name"
              className="mb-3 text-sm rounded-md border-slate-400"
              value={newBoard.name}
              onChange={(e) => setNewBoard({ name: e.target.value })}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-24 h-9 bg-blue-500 text-white text-sm font-semibold rounded-md hover:bg-blue-600"
            >
              {isLoading ? "Creating" : "Create"}
            </button>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}

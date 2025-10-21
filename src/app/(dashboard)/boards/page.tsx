import React from "react";

export default function Dashboard() {
  return (
    <div className="mt-[18px] mx-[228px] w-full">
      <h1 className="font-bold text-2xl text-blue-500">Your Boards</h1>
      <div className="grid grid-cols-4 mt-2 gap-4 font-semibold text-lg">
        <div className="w-full flex justify-center items-center text-white bg-slate-400 h-[100px] rounded-md hover:bg-slate-500">
          Create new board
        </div>
        <div className="w-full flex justify-center items-center text-white bg-blue-500 h-[100px] rounded-md hover:bg-blue-600">
          Schedulr
        </div>
        <div className="w-full flex justify-center items-center text-white bg-blue-500 h-[100px] rounded-md hover:bg-blue-600">
          Board 2
        </div>
        <div className="w-full flex justify-center items-center text-white bg-blue-500 h-[100px] rounded-md hover:bg-blue-600">
          Board 3
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex px-10 py-2.5 bg-white justify-between items-center">
        <h1 className="text-blue-500 text-[28px] font-bold">Schedulr</h1>
        <input
          type="text"
          placeholder="Search"
          className="w-[800px] border border-slate-300 rounded-lg py-1.5 px-5 text-black focus:outline-blue-500"
        />
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-500 rounded-full"></div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-slate-200" />
    </div>
  );
}

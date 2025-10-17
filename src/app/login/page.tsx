"use client"

import { authService } from "@/service/authServices";
import { LoginRequest } from "@/types/auth";
import { storage } from "@/utils/storage";
import Link from "next/link";
import React, { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState<LoginRequest>({ email: "", password: "" });
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    try {
      const res = await authService.login(form);
      console.log("Login berhasil:", res.user.name);
      storage.setToken(res.token);
    } catch {
      setError("Login gagal");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-300">
      <div className="w-[400px] p-6 rounded-2xl shadow-xl bg-white">
        <span className="flex justify-center text-3xl font-bold">Schedulr</span>
        <p className="text-xl font-semibold mt-10">Login to Your Account</p>
        <p className="text-gray-400 text-sm">
          Organize your ideas. Achieve your goals.
        </p>

        <div className="flex flex-col w-full my-5 gap-3">
          <input
            type="text"
            className="w-full border border-gray-400 rounded-lg p-2"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="text"
            className="w-full border border-gray-400 rounded-lg p-2"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-y">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white font-semibold py-2 px-5 rounded lg mb-3"
        >
          Log In
        </button>

        <p className="text-gray-400 text-center">
          Don`t have an account? 
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

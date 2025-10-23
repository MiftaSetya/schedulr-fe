"use client";

import { storage } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = storage.getToken();

    if (token) {
      router.replace("/boards");
    } else {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-500">Redirecting...</p>
    </div>
  );
}

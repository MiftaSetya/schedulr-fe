import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
        <Navbar/>
        <div className="flex">
            <Sidebar/>
            {children}
        </div>
    </>
  );
}

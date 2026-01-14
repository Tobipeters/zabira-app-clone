"use client";
import React from "react";
import { AppHeader } from "../header";
import { SideNav } from "../sidebar";

interface IProps {
  children: React.ReactNode;
}

export const AppWapper: React.FC<IProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      <SideNav open={mobileOpen} onClose={handleToggle} />
      <div className="grow overflow-hidden">
        <AppHeader onToggleMenu={handleToggle} />
        <main className="border-t border-[#e0f1ff] lg:border-none overflow-y-auto p-6 h-full max-h-[calc(100vh-68px)] lg:max-h-[calc(100vh-84px)] bg-white lg:bg-[#f4f4f5]">
          {children}
        </main>
      </div>
    </div>
  );
};

"use client";
import React from "react";
import { AppHeader } from "../header";

interface IProps {
  children: React.ReactNode;
}

export const AppWapper: React.FC<IProps> = ({ children }) => {
  return (
    <div className="h-full flex flex-col w-full flex-1">
      <AppHeader />

      <main className="">
        {children}
      </main>
    </div>
  );
};

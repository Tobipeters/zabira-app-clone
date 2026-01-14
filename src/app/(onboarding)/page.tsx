"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  React.useLayoutEffect(() => {
    router.replace("/sign-up");
  }, []);

  return <></>;
}

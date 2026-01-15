"use client";
import Image from "next/image";
import React from "react";

interface IProps {
  onLoadingComplete?: () => void;
}

export const ZaLoader = ({ onLoadingComplete }: IProps) => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <section className="fixed inset-0 z-2000 flex items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        {/* Ripple circles */}
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className="absolute rounded-full border-2 border-blue-400"
            style={{
              width: `${80 + index * 60}px`,
              height: `${80 + index * 60}px`,
              animation: `ripple-load 3s ease-out ${index * 0.3}s infinite`,
              opacity: 0,
            }}
          />
        ))}

        {/* Center logo */}
        <div className="w-27.75 h-27.75 rounded-full">
          <Image
            src="/images/zabira-logo-id.svg"
            alt="zabira logo"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

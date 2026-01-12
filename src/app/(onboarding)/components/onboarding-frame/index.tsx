"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Footer } from "../footer";
import { Header } from "../header";

interface IProps {
  children?: React.ReactNode;
}

const splashSlides = [
  {
    imgSrc: "/images/bg/graphic_element.svg",
    name: "Easily Buy & Sell Cryptocurrencies, Giftcards & Pay Bills",
    details: "Manage your assets and portfolio easily!",
  },
  {
    imgSrc: "/images/bg/img-slide-2.svg",
    name: "Trade Cryptocurrencies",
    details: "Easy way to buy, sell, convert and store cryptocurrencies",
  },
  {
    imgSrc: "/images/bg/img-slide-3.svg",
    name: "Pay Bills",
    details:
      "Instantly pay all your bills and make payments all over the world",
  },
  {
    imgSrc: "/images/bg/img-slide-4.svg",
    name: "Trade Giftcards",
    details: "Trade giftcards with Bitcoin, Ether, Tether, and more.",
  },
];

export const OnboardingFrame: React.FC<IProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="relative bg-white lg:bg-[#F4F4F5] w-full max-h-screen overflow-y-hidden px-6 pt-5.5 lg:p-4 lg:pr-0">
      <aside className="hidden z-20 overflow-hidden p-9 w-100 h-[calc(100vh-2rem)] fixed rounded-2xl bg-[linear-gradient(180deg,#003B8D_0%,#000000_67.58%)] lg:flex ">
        {activeIndex > 1 && (
          <Image
            src="/images/bg/side-map-bg.svg"
            alt="aside mask"
            width={950}
            height={482}
            className="absolute right-0 left-0 top-9 trans"
          />
        )}
        <div className="flex flex-col gap-9 relative w-full h-full">
          <Link href={"/"} className="relative z-20">
            <Image
              src="/images/Zabira-Logo.svg"
              alt="Zabira Logo"
              width={115}
              height={24}
            />
          </Link>

          {activeIndex === 0 && (
            <div className="-mx-9 absolute -top-14 -left-9 -right-9 h-[calc(100vh-200px)] trans">
              <Image
                src="/images/bg/graphic_element.svg"
                alt={`Graphic element`}
                fill
                className="object-fit"
              />
            </div>
          )}

          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={({ realIndex }) => setActiveIndex(realIndex)}
            onSwiper={() => {}}
            modules={[Autoplay, Navigation]}
            loop={true}
            // autoplay={false}
            autoplay={{
              delay: 3000,
            }}
            className="w-full h-full block relative cursor-pointer"
          >
            {splashSlides.map((item, id) => (
              <SwiperSlide
                key={id}
                className="flex! flex-col gap-9 w-full h-full"
              >
                {id === 0 && <div className="flex-1" />}
                {id > 0 && (
                  <div className="bg-[#00102680] rounded-xl flex-1 flex items-center justify-center w-full trans">
                    <Image
                      src={item.imgSrc}
                      alt={`${item.name} image`}
                      width={200}
                      height={200}
                    />
                  </div>
                )}

                <div className="inline-flex flex-col gap-2 text-white trans">
                  <h3 className="text-[2rem] font-extrabold leading-[124%] tracking-[-0.012em]">
                    {item.name}
                  </h3>
                  <p className="text-white/70 text-xl font-medium leading-[140%] tracking-[-0.01em]">
                    {item.details}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </aside>

      <div className="flex flex-col  md:justify-center w-full h-screen overflow-y-auto no-scrollbar lg:pl-4 lg:ml-100 lg:w-[calc(100%-400px)]">
        <Header />
        {children}

        <Footer />
      </div>
    </div>
  );
};

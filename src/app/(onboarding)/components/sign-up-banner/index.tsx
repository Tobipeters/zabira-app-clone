"use client";   
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const banners = [
  {
    imgSrc: "/images/bg/sign-up-banner-1.svg",
    name: "Banner 1",
  },
  {
    imgSrc: "/images/bg/sign-up-banner-2.svg",
    name: "Banner 2",
  },
];

export const SignUpBanner = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSwiper={() => {}}
      modules={[Autoplay, Navigation]}
      loop={true}
      // autoplay={false}
      autoplay={{
        delay: 3000,
      }}
      className="w-full h-full block relative cursor-pointer"
    >
      {banners.map((item, id) => (
        <SwiperSlide key={id}>
          <div className="relative w-full h-18 overflow-hidden rounded-xl">
            <Image
              src={item.imgSrc}
              alt={`${item.name} image`}
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";
import Image from "next/image";
import CategorySection from "@/components/CategorySection";

interface IBanner {
  _id: string;
  imageUrl: string;
}

export default function Page() {
  const [banners, setBanners] = useState<IBanner[]>([]);

  //Fetch all banners from the server
  const fetchAllBanners = async () => {
    try {
      const allBanner = await axios.get(
        "https://jwellery-m76u.onrender.com/api/banner"
      );

      setBanners(allBanner?.data?.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchAllBanners();
  }, []);

  return (
    <div className="w-9/10 mx-auto mt-10 bg-gradient-to-b  rounded-md py-10 px-4">
      <div className="w-9/10 mx-auto flex justify-center">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {banners?.map((banners:IBanner, index:number) => (
            <SwiperSlide key={index}>
              <Image
                src={banners.imageUrl}
                height={300}
                width={600}
                alt="banner-image"
                className="h-[500px] w-full object-cover rounded-sm"
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
      
      <CategorySection/>
    </div>
  );
}

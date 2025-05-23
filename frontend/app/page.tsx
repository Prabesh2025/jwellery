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

export default function page() {
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
    <div>
      <>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {banners?.map((banners:IBanner, index:number) => (
            <SwiperSlide key={index}>
              <Image
                src={banners.imageUrl}
                height={100}
                width={200}
                alt="banner-image"
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </>
      
      <CategorySection/>
    </div>
  );
}

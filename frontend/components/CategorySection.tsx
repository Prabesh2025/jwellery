"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Image from "next/image";

interface ICategory {
  _id: string;
  name: string;
  imageUrl: string;
}

export default function CategorySection() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  //fetch all categories from the server
  const fetchAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://jwellery-m76u.onrender.com/api/category"
      );
      setCategories(response?.data?.data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <div className="mt-10 bg-gray-100 shadow-sm rounded-md py-10 px-4">
      {/* Category Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold py-2 mb-2 bg-gradient-to-b from-blue-400 to-gray-400 bg-clip-text text-transparent">
          Explore Our Categories
        </h2>
        <p className="text-gray-600">          
          Discover a wide range of products according to your needs.
        </p>
        </div>
      <div className="w-10/12 mx-auto mt-10 grid grid-cols-4 space-x-4 space-y-2 items-center">
        {categories?.map((category: ICategory, index: number) => (
          <div key={index} className=" space-y-1 mt-5 bg-gradient-to-br from-blue-300 to-gray-300 rounded-md p-2 shadow-lg  transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-400 hover:to-gray-600 hover:text-white">
            <img
              src={category.imageUrl}
              alt="category-image"
              height={250}
              width={300}
              
              className="h-[250px] w-[300px] object-cover"
            />

            <p className="text-lg font-medium text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

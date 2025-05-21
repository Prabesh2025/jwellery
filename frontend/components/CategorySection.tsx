"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

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
    <div>

        <p className="text-3xl font-medium mb-12 text-center">Explor Category</p>
      {categories?.map((category: ICategory, index: number) => (
        <div key={index}>
          <Image src={category.imageUrl} height={200} width={400} alt="category-img" />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
}

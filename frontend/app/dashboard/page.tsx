"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function DashboardPage() {
  //for banner
  const [file, setFile] = useState<File | null>(null);
  const [bannerCreating, setBannerCreating] = useState<boolean>(false);
  const createBanner = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setBannerCreating(true);
      if (!file) {
        console.log("No file selected");
        return;
      }
      const formData = new FormData();
      formData.append("imageUrl", file);
      const response = await axios.post(
        "https://jwellery-m76u.onrender.com/api/banner",
        formData
      );
      console.log(response);
      toast.success("Banner created successfully");
      setBannerCreating(false);
    } catch (error) {
      setBannerCreating(false);
      toast.error("Something went wrong while creating banner");
      console.log("Something went wrong while creating banner", error);
    }
  };

  //for category
  const [categoryName, setcategoryName] = useState<string>("");
  const [categoryFile, setCategoryFile] = useState<File | null>(null);
  const [categoryCreating, setcategoryCreating] = useState<boolean>(false);

  const createCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setcategoryCreating(true);
      if (!categoryFile) {
        console.log("No file selected");
        return;
      }
      const formData = new FormData();
      formData.append("imageUrl", categoryFile);
      formData.append("name", categoryName);

      const response = await axios.post(
        "https://jwellery-m76u.onrender.com/api/category",
        formData
      );
      console.log(response);
      toast.success("Category created successfully");
      setcategoryCreating(false);
    } catch (error) {
      setcategoryCreating(false);
      toast.error("Something went wrong while creating category");
      console.log("Something went wrong while creating category", error);
    }
  };

  //for product
  const [productName, setProductName] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productRating, setProductRating] = useState<number>(0);
  const [previousPrice, setPreviousPrice] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [productCategory, setProductCategory] = useState<string>("");
  const [productFile, setProductFile] = useState<File | null>(null);

  const [productCreating, setProductCreating] = useState<boolean>(false);

  const createProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setProductCreating(true);
      if (!productFile) {
        console.log("No file selected");
        return;
      }
      const formData = new FormData();

      formData.append("imageUrl", productFile);
      formData.append("description", productDescription);
      formData.append("rating", String(productRating));
      formData.append("previousPrice", String(previousPrice));
      formData.append("currentPrice", String(currentPrice));
      formData.append("category", productCategory);

      formData.append("name", productName);

      const response = await axios.post(
        "https://jwellery-m76u.onrender.com/api/products",
        formData
      );
      console.log(response);
      toast.success("Category created successfully");
      setProductCreating(false);
    } catch (error) {
      setProductCreating(false);
      toast.error("Something went wrong while creating product");
      console.log("Something went wrong while creating product", error);
    }
  };

  return (
    <div className="space-y-12 py-10">
      {/* banner create card */}
      <form
        onSubmit={createBanner}
        className="w-5/12 mx-auto mt-10 flex flex-col gap-4 border border-gray-300 shadow-md p-8"
      >
        <input
          type="file"
          required
          placeholder="Upload banner file"
          className="border border-gray-200 outline-none p-2"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button
          type="submit"
          className="text-white bg-blue-400 px-6 py-2 rounded-sm cursor-pointer"
        >
          {bannerCreating ? "Creating..." : "Create Banner"}
        </button>
      </form>

      {/* category create card */}

      <form
        onSubmit={createCategory}
        className="w-5/12 mx-auto mt-10 flex flex-col gap-4 border border-gray-300 shadow-md p-8"
      >
        <input
          type="text"
          required
          onChange={(e) => setcategoryName(e.target.value)}
          value={categoryName}
          placeholder="Enter category name"
          className="border border-gray-200 outline-none p-2"
        />
        <input
          type="file"
          placeholder="Upload category image"
          className="border border-gray-200 outline-none p-2"
          onChange={(e) => setCategoryFile(e.target.files?.[0] || null)}
        />
        <button
          type="submit"
          className="text-white bg-blue-400 px-6 py-2 rounded-sm cursor-pointer"
        >
          {categoryCreating ? "Creating..." : " Create Category"}
        </button>
      </form>

      {/* product create card */}
      <form
        onSubmit={createProduct}
        className="w-5/12 mx-auto mt-10 flex flex-col gap-4 border border-gray-300 shadow-md p-8"
      >
        <input
          required
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Enter product name"
          className="border border-gray-200 outline-none p-2"
        />
        <input
          required
          onChange={(e) => setProductDescription(e.target.value)}
          type="text"
          placeholder="Enter product description"
          className="border border-gray-200 outline-none p-2"
        />
        <input
          required
          onChange={(e) => setPreviousPrice(Number(e.target.value))}
          type="number"
          placeholder="Enter previous price"
          className="border border-gray-200 outline-none p-2"
        />
        <input
          required
          onChange={(e) => setCurrentPrice(Number(e.target.value))}
          type="number"
          placeholder="Enter current price"
          className="border border-gray-200 outline-none p-2"
        />

        <input
          required
          onChange={(e) => setProductCategory(e.target.value)}
          type="string"
          placeholder="Enter product category"
          className="border border-gray-200 outline-none p-2"
        />

        <input
          required
          onChange={(e) => setProductRating(Number(e.target.valueAsNumber))}
          type="number"
          placeholder="Enter product rating"
          className="border border-gray-200 outline-none p-2"
        />
        <input
          required
          onChange={(e) => setProductFile(e.target.files?.[0] || null)}
          type="file"
          placeholder="Upload product image"
          className="border border-gray-200 outline-none p-2"
        />
        <button
          type="submit"
          className="text-white bg-blue-400 px-6 py-2 rounded-sm cursor-pointer"
        >
          {productCreating ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}

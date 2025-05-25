import React, { useState } from "react";

export default function DashboardPage() {
  //for banner
  const [file, setFile] = useState(null);

  //for category
  const [categoryName, setcategoryName] = useState("");
  const [categoryFile, setCategoryFile] = useState("");

  //for product
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productRating, setProductRating] = useState(0);
  const [previousPrice, setPreviousPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("");
  const [productFile, setProductFile] = useState(null);

  return (
    <div className="space-y-12 py-10">
      {/* banner create card */}
      <form className="w-5/12 mx-auto mt-10 flex flex-col gap-4 border border-gray-300 shadow-md p-8">
        <input
          type="file"
          placeholder="Upload banner file"
          className="border border-gray-200 outline-none p-2"
        />
        <button
          type="submit"
          className="text-white bg-blue-400 px-6 py-2 rounded-sm cursor-pointer"
        >
          Create Banner
        </button>
      </form>

      {/* category create card */}

      <form className="w-5/12 mx-auto mt-10 flex flex-col gap-4 border border-gray-300 shadow-md p-8">
        <input
          type="text"
          placeholder="Enter category name"
          className="border border-gray-200 outline-none p-2"
        />
        <input
          type="file"
          placeholder="Upload category image"
          className="border border-gray-200 outline-none p-2"
        />
        <button
          type="submit"
          className="text-white bg-blue-400 px-6 py-2 rounded-sm cursor-pointer"
        >
          Create Category
        </button>
      </form>

      {/* product create card */}
      <form className="w-5/12 mx-auto mt-10 flex flex-col gap-4 border border-gray-300 shadow-md p-8">
        <input
          type="text"
          placeholder="Enter product name"
          className="border border-gray-200 outline-none p-2"
        />
        <input
          type="text"
          placeholder="Enter product description"
          className="border border-gray-200 outline-none p-2"
        />
        <input
          type="number"
          placeholder="Enter previous price"
          className="border border-gray-200 outline-none p-2"
        />
        <input
          type="number"
          placeholder="Enter current price"
          className="border border-gray-200 outline-none p-2"
        />

        <input
          type="string"
          placeholder="Enter product category"
          className="border border-gray-200 outline-none p-2"
        />

        <input
          type="number"
          placeholder="Enter product rating"
          className="border border-gray-200 outline-none p-2"
        />
        <input
          type="file"
          placeholder="Upload product image"
          className="border border-gray-200 outline-none p-2"
        />
        <button
          type="submit"
          className="text-white bg-blue-400 px-6 py-2 rounded-sm cursor-pointer"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}

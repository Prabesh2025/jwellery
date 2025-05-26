"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface IProduct {
  _id: string;
  name: string;
  description: string;
  previousPrice: number;
  currentPrice: number;
  rating: number;
  category: string;
  imageUrl: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);

  // Fetch products from the server
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(
        "https://jwellery-m76u.onrender.com/api/products"
      );

      setProducts(response.data.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-10">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-50 to-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">
            Products
          </h1>
        </div>
      </header>

      {/* Page introduction */}
      <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-2xl rounded-xl p-10 mb-10 text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_40%)]"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-tl from-gray-600 to-transparent rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-br from-gray-600 to-transparent rounded-full opacity-20 blur-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent mb-4">
              Discover Our Premium Collection
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-white to-gray-400 mb-6"></div>
            <p className="text-gray-200 mb-8 text-lg max-w-3xl">
              Browse through our carefully curated selection of high-quality
              products designed to enhance your lifestyle. From cutting-edge
              electronics to elegant home furnishings, we offer only the finest
              items backed by our satisfaction guarantee.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 shadow-lg border border-gray-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-600 hover:to-gray-700">
                <div className="rounded-full bg-gradient-to-br from-white to-gray-300 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <svg
                    className="h-7 w-7 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white text-xl mb-2">
                  Free Shipping
                </h3>
                <p className="text-gray-300">
                  Enjoy free shipping on all orders over $50
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 shadow-lg border border-gray-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-600 hover:to-gray-700">
                <div className="rounded-full bg-gradient-to-br from-white to-gray-300 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <svg
                    className="h-7 w-7 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white text-xl mb-2">
                  Money-Back Guarantee
                </h3>
                <p className="text-gray-300">
                  30-day money-back guarantee on all purchases
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 shadow-lg border border-gray-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-600 hover:to-gray-700">
                <div className="rounded-full bg-gradient-to-br from-white to-gray-300 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <svg
                    className="h-7 w-7 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white text-xl mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-300">
                  Our customer support team is always available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
        <div className="w-9/10 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 p-4 bg-gray-100 shadow-lg rounded-md">
            
            {
              products?.map((product: IProduct, index: number) => (

                 <div key={index} className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 shadow-lg border border-gray-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-600 hover:to-gray-700">
                  <Image src={product.imageUrl} height={300} width={300} alt="product-img" className="h-[300px] w-[300px] object-cover"/>
                  <h2 className="text-xl font-semibold text-gray-200 mt-2">{product.name}</h2>
                  <p className="text-gray-300">{product.description}</p>
                  <p className="text-gray-300 line-through">{product.previousPrice}</p>
                  <p className="text-green-500 font-bold">{product.currentPrice}</p>
                  <p className="text-yellow-500">Rating: {product.rating} ⭐</p>                 
                </div>

              ))
            }

            </div>

    </div>
  );
}

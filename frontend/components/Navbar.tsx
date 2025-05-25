"use client";

import { useEffect, useState } from "react"; 
import Link from "next/link";
import {
  Search,
  Truck,
  RefreshCw,
  Facebook,
  Twitter,
  Instagram,
  PinIcon as Pinterest,
  Heart,
  ShoppingBag,
  ChevronDown,
  Menu,
} from "lucide-react";

export default function MarketoHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null; 

  return (
    <header className="">
      {/* Top bar */}
      <div className="w-full bg-black text-white py-3 px-4">
        <div className="w-9/12 mx-auto flex justify-between items-center">
          <div className="flex items-center text-[13.5px] space-x-2">
            <div className="flex items-center space-x-2 opacity-95">
              <Truck size={18} />
              <span className=" font-medium">Free Delivery</span>
            </div>
            <span className="opacity-90 font-extralight">|</span>
            <div className="flex items-center space-x-2 ml-1 opacity-95">
              <RefreshCw size={18} />
              <span className=" font-medium ">Returns Policy</span>
            </div>

            <span className="opacity-90 font-extralight">|</span>

            <div className="flex items-center space-x-3 opacity-95">
              <span className="font-medium ">Follow Us</span>
              <div className="flex items-center space-x-4">
                <Link href="#" aria-label="Facebook">
                  <Facebook size={16} />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter size={16} />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram size={16} />
                </Link>
                <Link href="#" aria-label="Pinterest">
                  <Pinterest size={16} />
                </Link>
              </div>
            </div>
          </div>

          <Link href="/login" className="text-sm">
            Login
          </Link>
        </div>
      </div>

      {/* Main header */}
      <div className="w-9/12 mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          {/* Search bar */}
          <div className="relative w-[300px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 bg-gray-100 rounded-md text-gray-700 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search size={18} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-gray-300 rounded-md flex items-center justify-center mb-2">
              <span className="text-2xl font-bold text-red-500">M</span>
            </div>
            <h1 className="text-2xl font-bold tracking-wider text-gray-700">
              MARKETO
            </h1>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Link href="/wishlist" className="relative">
              <Heart size={24} className="text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-gray-200 text-gray-700 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingBag size={24} className="text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-9/12 mx-auto border-t py-2 border-gray-200"> 
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="flex items-center mr-40"> 
              <Menu className="w-5 h-5 mr-2" />
              <span className="font-medium text-xl opacity-85">
                All Categories
              </span>
              <ChevronDown className="w-4 h-4 ml-1 mt-1" />
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="py-2 text-sm text-gray-700 hover:text-gray-900 font-medium"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="py-2 text-sm text-gray-700 hover:text-gray-900 font-medium"
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="py-2 text-sm text-gray-700 hover:text-gray-900 font-medium"
              >
                CONTACT
              </Link>
              <Link
                href="/products"
                className="py-2 px-4 text-sm text-gray-700 hover:text-gray-900 font-medium"
              >
                PRODUCTS
              </Link>
              <Link
                href="/blog"
                className="py-2 text-sm text-gray-700 hover:text-gray-900 font-medium"
              >
                BLOG
              </Link>
              <Link
                href="/gallery"
                className="py-2 text-sm text-gray-700 hover:text-gray-900 font-medium"
              >
                GALLERY
              </Link>
              <Link
                href="/dashboard"
                className="py-2 text-sm text-gray-700 hover:text-gray-900 font-medium"
              >
                DASHBOARD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

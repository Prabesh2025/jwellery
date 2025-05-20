"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Filter, ChevronDown } from "lucide-react"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: 199.99,
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and memory foam ear cushions for maximum comfort during extended use.",
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      category: "Furniture",
      price: 249.99,
      rating: 4.5,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Designed for all-day comfort, this ergonomic office chair features adjustable lumbar support, breathable mesh backing, and customizable armrests to reduce strain during long work sessions.",
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      category: "Electronics",
      price: 149.99,
      rating: 4.6,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Track your fitness goals with precision. This smart watch monitors heart rate, sleep patterns, and activity levels while providing smartphone notifications and up to 7 days of battery life.",
    },
    {
      id: 4,
      name: "Leather Laptop Sleeve",
      category: "Accessories",
      price: 59.99,
      rating: 4.3,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Protect your laptop in style with our genuine leather sleeve. Featuring soft microfiber lining, secure magnetic closure, and an external pocket for accessories. Available for 13-15 inch laptops.",
    },
    {
      id: 5,
      name: "Minimalist Desk Lamp",
      category: "Furniture",
      price: 79.99,
      rating: 4.7,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Illuminate your workspace with this adjustable LED desk lamp. With touch controls, multiple brightness levels, and a sleek design, it's the perfect addition to any modern home office.",
    },
    {
      id: 6,
      name: "Wireless Charging Pad",
      category: "Electronics",
      price: 39.99,
      rating: 4.4,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Charge your devices without the clutter of cables. This slim charging pad supports fast charging for compatible devices and features a non-slip surface to keep your phone secure.",
    },
    {
      id: 7,
      name: "Premium Coffee Maker",
      category: "Appliances",
      price: 129.99,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Brew barista-quality coffee at home with our premium coffee maker. Featuring programmable settings, temperature control, and a built-in grinder to ensure the freshest cup every time.",
    },
    {
      id: 8,
      name: "Noise-Cancelling Earbuds",
      category: "Electronics",
      price: 89.99,
      rating: 4.5,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Immerse yourself in your favorite music with these wireless earbuds. Featuring active noise cancellation, water resistance, and a compact charging case providing up to 24 hours of playback.",
    },
  ]

  // Get unique categories
  const categories = ["All", ...new Set(products.map((product) => product.category))]

  // Filter products based on search query and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
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
              Browse through our carefully curated selection of high-quality products designed to enhance your
              lifestyle. From cutting-edge electronics to elegant home furnishings, we offer only the finest items
              backed by our satisfaction guarantee.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white text-xl mb-2">Free Shipping</h3>
                <p className="text-gray-300">Enjoy free shipping on all orders over $50</p>
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
                <h3 className="font-semibold text-white text-xl mb-2">Money-Back Guarantee</h3>
                <p className="text-gray-300">30-day money-back guarantee on all purchases</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white text-xl mb-2">24/7 Support</h3>
                <p className="text-gray-300">Our customer support team is always available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Filters and search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-4 sm:px-0 space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Search products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="relative w-full sm:w-48">
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-gray-400 mr-2" />
                <select
                  className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent appearance-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto">
            <p className="text-sm text-gray-500 mr-4">
              Showing <span className="font-medium">{filteredProducts.length}</span> products
            </p>
            <div className="relative w-48">
              <select
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent appearance-none"
                defaultValue="featured"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 opacity-70 rounded-xl"></div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-0 py-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/5 to-gray-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>

                <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5 relative z-10">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-1">{product.rating}</span>
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-3 px-4 rounded-md hover:from-gray-800 hover:via-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12 relative z-10">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Product categories section */}
        <div className="mt-16 px-4 sm:px-0">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 text-transparent bg-clip-text mb-6">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories
              .filter((cat) => cat !== "All")
              .map((category) => (
                <div
                  key={category}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
                  <div className="p-6 text-center relative z-10">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{category}</h3>
                    <p className="text-sm text-gray-500">
                      {products.filter((p) => p.category === category).length} products
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mt-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 mx-4 sm:mx-0 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 text-transparent bg-clip-text mb-2">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter to receive updates on new products, special offers, and exclusive discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 font-medium px-6 py-3 rounded-md hover:from-white hover:to-gray-200 transition-all duration-300 transform hover:scale-[1.02]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

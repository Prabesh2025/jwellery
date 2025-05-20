import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Search, User } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-100 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BlogFolio
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="relative md:block">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-64 py-2 pl-10 pr-4 text-sm bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </header>

      {/* Featured Post */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              Featured Post
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.01] transition-all duration-300">
              <Image src="/placeholder.svg?height=600&width=800" alt="Featured post" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center space-x-4 text-sm mb-2">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    May 15, 2025
                  </span>
                  <span className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    John Doe
                  </span>
                </div>
                <h3 className="text-xl font-bold">The Future of Web Development: Trends to Watch in 2025</h3>
              </div>
            </div>
            <div className="space-y-4 bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  May 15, 2025
                </span>
                <span className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  John Doe
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />5 min read
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                The Future of Web Development: Trends to Watch in 2025
              </h3>
              <p className="text-gray-600 leading-relaxed">
                As we move further into 2025, the landscape of web development continues to evolve at a rapid pace. From
                AI-powered development tools to the rise of WebAssembly, this article explores the most significant
                trends that are shaping the future of how we build for the web.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The integration of AI into development workflows has dramatically changed how developers approach
                problem-solving and code optimization. Meanwhile, WebAssembly continues to bridge the gap between web
                and native performance.
              </p>
              <Link
                href="#"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium hover:from-blue-700 hover:to-indigo-700"
              >
                Read more <ArrowRight className="ml-2 h-4 w-4 text-indigo-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-gradient-to-b from-purple-50 via-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
              Recent Posts
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <article
                key={post}
                className="bg-gradient-to-b from-white to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Post ${post}`}
                    alt={`Post ${post}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-medium rounded-full text-gray-800">
                      {post % 3 === 0 ? "Development" : post % 3 === 1 ? "Design" : "Technology"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      May {post + 10}, 2025
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post + 2} min read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post % 2 === 0
                      ? "Building Responsive Interfaces with Modern CSS"
                      : "Optimizing Performance in Next.js Applications"}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post % 2 === 0
                      ? "Learn how to leverage the latest CSS features to create truly responsive and adaptive user interfaces that work across all devices."
                      : "Discover practical techniques to improve loading times, reduce bundle sizes, and enhance the overall performance of your Next.js applications."}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium"
                  >
                    Continue reading <ArrowRight className="ml-1 h-3 w-3 text-indigo-600" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
              Load more articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-700 rounded-2xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Subscribe to our newsletter</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Stay up to date with the latest articles, tutorials, and insights. We'll send you a weekly digest of the
              best content straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/90 backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.662 9.157 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.479 1.493-3.835 3.777-3.835 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.215 0-1.51.759-1.51 1.53v1.885h2.64l-.419 2.89h-2.221v6.987C18.338 21.157 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 013.666 3.665c.247.636.416 1.363.464 2.427.048 1.024.06 1.378.06 3.808 0 2.43-.013 2.784-.06 3.808-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-3.665 3.666c-.636.247-1.363.416-2.427.464-1.024.048-1.378.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-3.666-3.665c-.247-.636-.416-1.363-.464-2.427-.048-1.024-.06-1.378-.06-3.808 0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 013.665-3.666c.636-.247 1.363-.416 2.427-.464 1.024-.048 1.378-.06 3.808-.06zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="text-blue-100/80 text-sm mt-8">© 2025 BlogFolio. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

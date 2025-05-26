import React from 'react';
import { Calendar, Clock, User, Heart, MessageCircle, Share2 } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-purple-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-2">
            {/* Article Header */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 mb-8">
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
                  Technology
                </span>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 leading-tight">
                  The Future of Web Development: Trends to Watch in 2024
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Exploring the latest technologies and methodologies that are shaping the future of web development and
                  how they impact modern applications.
                </p>
              </div>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                  <User className="w-4 h-4 text-blue-600" />
                  <span>John Doe</span>
                </div>
                <div className="flex items-center gap-2 bg-rose-50 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4 text-rose-600" />
                  <span>March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span>8 min read</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/placeholder.svg?height=400&width=800"
                    alt="Web development trends"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The web development landscape is constantly evolving, with new technologies and frameworks emerging at
                  a rapid pace. As we move through 2024, several key trends are reshaping how we build and deploy web
                  applications.
                </p>

                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-8 mb-4">
                  1. Server-Side Rendering Renaissance
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Server-side rendering (SSR) is making a strong comeback with frameworks like Next.js, Nuxt.js, and
                  SvelteKit leading the charge. The benefits of improved SEO, faster initial page loads, and better user
                  experience are driving this trend.
                </p>

                <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mt-8 mb-4">
                  2. Edge Computing Integration
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Edge computing is revolutionizing how we think about web application deployment. By moving computation
                  closer to users, we can achieve unprecedented performance improvements and reduced latency.
                </p>

                <blockquote className="border-l-4 border-gradient-to-b from-purple-400 to-pink-400 pl-6 my-8 italic text-gray-700  py-6 rounded-r-lg">
                  &quot;The future of web development lies in creating seamless experiences that blur the line between
                  server and client, providing users with instant, responsive applications.&quot;
                </blockquote>

                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-8 mb-4">
                  3. AI-Powered Development Tools
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Artificial intelligence is transforming the development process itself. From code completion to
                  automated testing, AI tools are becoming indispensable for modern developers.
                </p>

                <ul className="list-none pl-0 mb-6 text-gray-700 space-y-3">
                  <li className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    Intelligent code suggestions and auto-completion
                  </li>
                  <li className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    Automated bug detection and fixing
                  </li>
                  <li className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                    Performance optimization recommendations
                  </li>
                  <li className="flex items-center gap-3 bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
                    Accessibility compliance checking
                  </li>
                </ul>

                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mt-8 mb-4">
                  Conclusion
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As we continue through 2024, these trends will shape the future of web development. Staying informed
                  and adapting to these changes will be crucial for developers who want to remain competitive in this
                  rapidly evolving field.
                </p>
              </div>

              {/* Article Actions */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-all duration-300 bg-rose-50 hover:bg-rose-100 px-4 py-2 rounded-full">
                    <Heart className="w-5 h-5" />
                    <span className="font-medium">42</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-all duration-300 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">12</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-emerald-500 transition-all duration-300 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-full">
                    <Share2 className="w-5 h-5" />
                    <span className="font-medium">Share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="John Doe"
                    className="w-20 h-20 rounded-full object-cover border-4 border-gradient-to-r from-purple-200 to-pink-200"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                    John Doe
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Senior Full-Stack Developer with 8+ years of experience in modern web technologies. Passionate about
                    creating scalable applications and sharing knowledge with the developer community.
                  </p>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                    Follow John →
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Related Posts */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-8">
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                Related Articles
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Understanding React Server Components",
                    date: "March 10, 2024",
                    readTime: "5 min read",
                    color: "from-blue-50 to-cyan-50",
                    accent: "blue-500",
                  },
                  {
                    title: "Building Scalable APIs with Node.js",
                    date: "March 8, 2024",
                    readTime: "7 min read",
                    color: "from-purple-50 to-pink-50",
                    accent: "purple-500",
                  },
                  {
                    title: "CSS Grid vs Flexbox: When to Use What",
                    date: "March 5, 2024",
                    readTime: "6 min read",
                    color: "from-emerald-50 to-teal-50",
                    accent: "emerald-500",
                  },
                ].map((post, index) => (
                  <article
                    key={index}
                    className={`group cursor-pointer bg-gradient-to-r ${post.color} p-4 rounded-xl hover:shadow-md transition-all duration-300`}
                  >
                    <h4
                      className={`font-semibold text-gray-900 group-hover:text-${post.accent} transition-colors mb-2`}
                    >
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 rounded-2xl p-6 mb-8 border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-4">Get the latest articles and insights delivered to your inbox.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Popular Tags */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "React", color: "from-blue-400 to-cyan-400" },
                  { name: "Next.js", color: "from-purple-400 to-pink-400" },
                  { name: "TypeScript", color: "from-emerald-400 to-teal-400" },
                  { name: "Node.js", color: "from-orange-400 to-amber-400" },
                  { name: "CSS", color: "from-rose-400 to-pink-400" },
                  { name: "JavaScript", color: "from-indigo-400 to-blue-400" },
                  { name: "Web Development", color: "from-violet-400 to-purple-400" },
                  { name: "Frontend", color: "from-cyan-400 to-blue-400" },
                ].map((tag) => (
                  <span
                    key={tag.name}
                    className={`bg-gradient-to-r ${tag.color} text-white px-4 py-2 rounded-full text-sm hover:shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

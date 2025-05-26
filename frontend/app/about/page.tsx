import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="w-9/12 mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <div className="relative mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500"></div>
          <h1 className="mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
            About Our Company
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-600">
            We&apos;re a passionate team dedicated to creating innovative solutions that help businesses thrive in the
            digital world.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-24">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10"></div>
              <div className="p-10 md:p-16">
                <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
                  Our Mission
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Our mission is to empower businesses with cutting-edge technology solutions that drive growth and
                  innovation. We believe in creating products that are not only functional but also intuitive and
                  enjoyable to use.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Founded in 2020, we&apos;ve been on a journey to transform how businesses interact with technology. Our
                  team combines technical expertise with creative thinking to deliver exceptional results for our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </section>        
        
        

        {/* Values Section */}
        <section className="rounded-3xl bg-gradient-to-br mt-20 from-gray-50 to-white p-10 shadow-lg dark:from-gray-900 dark:to-gray-800 md:p-16">
          <div className="mb-16 text-center">
            <div className="relative mx-auto mb-4 h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500"></div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Our Core Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>        
          
          </section>

       
          </div>
          </div>
          

        
  )
}

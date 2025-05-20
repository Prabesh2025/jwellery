import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <div className="relative mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500"></div>
          <h1 className="mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
            About Our Company
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            We're a passionate team dedicated to creating innovative solutions that help businesses thrive in the
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
                  Founded in 2020, we've been on a journey to transform how businesses interact with technology. Our
                  team combines technical expertise with creative thinking to deliver exceptional results for our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <div className="mb-16 text-center">
            <div className="relative mx-auto mb-4 h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500"></div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Our Leadership Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Meet the talented individuals who drive our vision forward
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
              >
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20"></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-md dark:border-gray-700">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={192}
                        height={192}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1 text-center text-2xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
                  <p className="mb-4 text-center text-lg font-medium text-teal-600 dark:text-teal-400">{member.role}</p>
                  <p className="text-center text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="rounded-3xl bg-gradient-to-br from-gray-50 to-white p-10 shadow-lg dark:from-gray-900 dark:to-gray-800 md:p-16">
          <div className="mb-16 text-center">
            <div className="relative mx-auto mb-4 h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500"></div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Our Core Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative overflow-hidden rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800"
              >
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-teal-500/10 to-blue-500/10"></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white">
                  {index === 0 && <LightbulbIcon className="h-6 w-6" />}
                  {index === 1 && <CheckCircleIcon className="h-6 w-6" />}
                  {index === 2 && <UsersIcon className="h-6 w-6" />}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

// Custom icons
function LightbulbIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  )
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

// Sample data
const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    bio: "Jane has over 15 years of experience in tech and leads our company vision with passion and strategic insight.",
    image: "/placeholder.svg?height=192&width=192",
  },
  {
    name: "John Smith",
    role: "CTO",
    bio: "John oversees all technical aspects and ensures we stay at the cutting edge of technology and innovation.",
    image: "/placeholder.svg?height=192&width=192",
  },
  {
    name: "Emily Johnson",
    role: "Design Director",
    bio: "Emily brings creativity and user-centered thinking to all our projects, ensuring exceptional user experiences.",
    image: "/placeholder.svg?height=192&width=192",
  },
]

const values = [
  {
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that set new industry standards.",
  },
  {
    title: "Quality",
    description:
      "We're committed to excellence in everything we do, from code to customer service, ensuring the highest standards in all deliverables.",
  },
  {
    title: "Collaboration",
    description:
      "We believe the best results come from working together with our clients and each other, fostering an environment of open communication.",
  },
]

import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
      {/* <Link href={"/login"}>login</Link> */}
    </div>
  )
}

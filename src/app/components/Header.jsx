'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-yellow-100 p-4 shadow-md">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-xl font-bold">Ukulele with Alex</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/lessons">Lessons</Link>
          <Link href="/club">Club</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
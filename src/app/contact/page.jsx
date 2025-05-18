'use client'
import { useState } from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Header />
      <main className="p-8 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
            className="space-y-4"
          >
            <input type="text" placeholder="Your Name" className="w-full p-2 border" required />
            <input type="email" placeholder="Your Email" className="w-full p-2 border" required />
            <textarea placeholder="Message" className="w-full p-2 border" rows="4" required />
            <button type="submit" className="bg-yellow-400 px-4 py-2">Send</button>
          </form>
        ) : (
          <p className="text-green-600">Thanks for reaching out! I'll get back to you soon.</p>
        )}
      </main>
      <Footer />
    </>
  )
}
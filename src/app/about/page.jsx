import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <Image src="/images/teacher.JPG" width={300} height={300} alt="Teacher" className="rounded-full mb-4" />
        <p>
          Hi! I’m Naomi, a ukulele teacher with 10+ years of experience sharing the joy of music. I teach all ages and love helping people gain confidence through music.
        </p>
      </main>
      <Footer />
    </>
  )
}
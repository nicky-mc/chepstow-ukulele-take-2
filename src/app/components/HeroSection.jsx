import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="text-center bg-gradient-to-r from-yellow-100 to-pink-100 p-10">
      <h2 className="text-4xl font-bold mb-4">Strum Your Way to Joy</h2>
      <p className="text-lg mb-6">Ukulele Lessons & Community Club for All Ages</p>
      <Image src="/images/hero.jpg" alt="Ukulele" width={600} height={400} className="mx-auto rounded-lg" />
    </section>
  )
}
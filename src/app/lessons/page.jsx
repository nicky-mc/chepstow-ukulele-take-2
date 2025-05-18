import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function Lessons() {
  return (
    <>
      <Header />
      <main className="p-8 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Private & Group Ukulele Lessons</h1>
        <p>Beginners welcome! Adults and kids can learn to strum in a fun, relaxed environment.</p>
        <ul className="list-disc ml-5">
          <li>£25 / 30 min private lesson</li>
          <li>£15 / 45 min group lesson</li>
        </ul>
        <a href="/contact" className="text-blue-600 underline">Book a lesson now →</a>
      </main>
      <Footer />
    </>
  )
}
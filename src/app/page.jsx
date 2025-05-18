import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import LessonInfo from './components/LessonInfo'
import ClubSection from './components/ClubSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-12">
        <HeroSection />
        <LessonInfo />
        <ClubSection />
      </main>
      <Footer />
    </>
  )
}
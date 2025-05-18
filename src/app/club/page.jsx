import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function Club() {
  return (
    <>
      <Header />
      <main className="p-8 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Join the Ukulele Club Chepstow</h1>
        <p>Meet other uke lovers, jam together, and perform at local events.</p>
        <p>🗓 Every 2nd Saturday at The Music Hall – 2pm to 4pm</p>
        <p>All levels welcome – bring your uke and smiles!</p>
      </main>
      <Footer />
    </>
  )
}
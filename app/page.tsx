import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Solucoes from '@/components/Solucoes'
import PhotoBand from '@/components/PhotoBand'
import Sobre from '@/components/Sobre'
import Casos from '@/components/Casos'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function Home() {
  return (
    <main style={{ background:'var(--bg-base)', minHeight:'100vh' }}>
      <RevealObserver />
      <Navbar />
      <Hero />
      <Solucoes />
      <PhotoBand />
      <Sobre />
      <Casos />
      <Contato />
      <Footer />
    </main>
  )
}

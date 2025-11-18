import Header from "@/components/Header"
import Hero from "@/components/Hero"
import VoiceNote from "@/components/VoiceNote"
import Divider from "@/components/Divider"
import Gallery from "@/components/Gallery"
import Work from "@/components/Work"
import Writing from "@/components/Writing"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <VoiceNote />
      <Divider />
      <Work />
      <Divider />
      <Gallery />
      <Divider />
      <Writing />
      <Contact />
      <Footer />
    </main>
  )
}

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Portfolio from '@/components/Portfolio'
import TentangKami from '@/components/TentangKami'
import CTASection from '@/components/CTASection'
import FAQAndContact from '@/components/FAQAndContact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CTASection />
      <Portfolio />
      <TentangKami />
      <FAQAndContact />
      <Footer />
    </>
  )
}
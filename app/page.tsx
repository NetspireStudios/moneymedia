import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import StatsSection from '@/components/StatsSection'
import ComparisonSection from '@/components/ComparisonSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  )
} 
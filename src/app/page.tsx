import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Ideas from '@/components/Ideas';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import FeatureCards from '@/components/FeatureCards';
import GovernanceSection from '@/components/GovernanceSection';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureCards />
      <Ideas/>
      <About/>
      <Timeline/>
      <GovernanceSection/>
      <TestimonialsSection/>
      <CTASection/>
      <Footer />
    </main>
  );
}

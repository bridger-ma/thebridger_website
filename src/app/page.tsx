import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Ideas from '@/components/Ideas';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import FeatureCards from '@/components/FeatureCards';
import GovernanceSection from '@/components/GovernanceSection';
import CTASection from '@/components/CTASection';
import Navbar from '@/components/Navbar';

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
      <CTASection/>
      <Footer />
    </main>
  );
}

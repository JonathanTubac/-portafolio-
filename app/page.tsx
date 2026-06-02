import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import JourneySection from '@/components/sections/JourneySection';
import WhatIBuildSection from '@/components/sections/WhatIBuildSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import StackSection from '@/components/sections/StackSection';
import ProcessSection from '@/components/sections/ProcessSection';
import MetricsSection from '@/components/sections/MetricsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <JourneySection />
      <WhatIBuildSection />
      <ProjectsSection />
      <StackSection />
      <ProcessSection />
      <MetricsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

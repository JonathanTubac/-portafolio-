import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import StackSection from '@/components/sections/StackSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import MetricsSection from '@/components/sections/MetricsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <StackSection />
      <CertificationsSection />
      <MetricsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

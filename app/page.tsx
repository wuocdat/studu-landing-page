import CTASection from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { HeaderMenu } from '@/components/Header';
import HeroSection from '@/components/HeroSection';

export default function HomePage() {
  return (
    <>
      <HeaderMenu />
      <HeroSection />
      <CTASection />
      <Footer />
    </>
  );
}

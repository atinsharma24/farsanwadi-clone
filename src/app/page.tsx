import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { GuiltFreeSection } from "@/components/GuiltFreeSection";
import { BestSellers } from "@/components/BestSellers";
import { TrustStats } from "@/components/TrustStats";
import { ShopByCategory } from "@/components/ShopByCategory";
import { HealthyChoices } from "@/components/HealthyChoices";
import { ShopByOccasion } from "@/components/ShopByOccasion";
import { ShopByTaste } from "@/components/ShopByTaste";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSlider />
        <GuiltFreeSection />
        <BestSellers />
        <TrustStats />
        <ShopByCategory />
        <HealthyChoices />
        <ShopByOccasion />
        <ShopByTaste />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

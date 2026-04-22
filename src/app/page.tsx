import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { NewsPreview } from "@/components/NewsPreview";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ActivitiesSection />
        <GalleryCarousel />
        <NewsPreview />
      </main>
      <Footer />
    </>
  );
}

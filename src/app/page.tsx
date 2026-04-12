import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandCarousel } from "@/components/BrandCarousel";
import { StatsBar } from "@/components/StatsBar";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ToolkitGrid } from "@/components/ToolkitGrid";
import { Results } from "@/components/Results";
import { CaseStudies } from "@/components/CaseStudies";
import { BlogSection } from "@/components/BlogSection";
import { TrustBadges } from "@/components/TrustBadges";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandCarousel />
        <StatsBar />
        <ProcessSteps />
        <ToolkitGrid />
        <Results />
        <CaseStudies />
        <BlogSection />
        <TrustBadges />
      </main>
      <Footer />
    </>
  );
}

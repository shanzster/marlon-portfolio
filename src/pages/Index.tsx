import CallIntro from "@/components/CallIntro";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ToolsSection from "@/components/ToolsSection";
import GallerySection from "@/components/GallerySection";
// import VideoIntro from "@/components/VideoIntro"; // hidden
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ResultsSection from "@/components/ResultsSection";
import EducationSection from "@/components/EducationSection";
import SetupSection from "@/components/SetupSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CallIntro />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ToolsSection />
      <GallerySection />
      {/* <VideoIntro /> hidden */}
      <SkillsSection />
      <ExperienceSection />
      <ResultsSection />
      <EducationSection />
      <SetupSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

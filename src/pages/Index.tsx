import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoIntro from "@/components/VideoIntro";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VideoIntro />
      <SkillsSection />
      <ToolsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToolsSection from "@/components/ToolsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SetupSection from "@/components/SetupSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ToolsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <SetupSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

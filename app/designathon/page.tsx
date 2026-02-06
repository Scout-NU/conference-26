import HeroSection from "@/components/designathon/HeroSection";
import AboutSection from "@/components/designathon/AboutSection";
import ScheduleSection from "@/components/designathon/ScheduleSection";
import PrizesSection from "@/components/designathon/PrizesSection";
import JudgesSection from "@/components/designathon/JudgesSection";
import CriteriaSection from "@/components/designathon/CriteriaSection";
import Footer from "@/components/designathon/Footer";

export default function DesignathonPage() {
  return (
    <main className="min-h-screen bg-charcoal">
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <PrizesSection />
      <JudgesSection />
      <CriteriaSection />
      <Footer />
    </main>
  );
}

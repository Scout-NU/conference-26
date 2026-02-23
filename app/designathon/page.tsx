import AboutSection from "@/components/designathon/AboutSection";
import DecorativeBackground from "@/components/designathon/DecorativeBackground";
import HeroSection from "@/components/designathon/HeroSection";
import JudgesSection from "@/components/designathon/JudgesSection";
import JudgingCriteriaSection from "@/components/designathon/JudgingCriteriaSection";
import PrizesSection from "@/components/designathon/PrizesSection";
import ScheduleSection from "@/components/designathon/ScheduleSection";
import {
  designathonSchedule,
  judges,
  judgingCriteria,
  prizes,
} from "@/components/designathon/data";

export default function DesignathonPage() {
  return (
    <main className="relative overflow-hidden bg-charcoal text-cream font-medium">
      <DecorativeBackground />
      <HeroSection />
      <AboutSection />
      <ScheduleSection schedule={designathonSchedule} />
      <PrizesSection prizes={prizes} />
      <JudgesSection judges={judges} />
      <JudgingCriteriaSection criteria={judgingCriteria} />
    </main>
  );
}

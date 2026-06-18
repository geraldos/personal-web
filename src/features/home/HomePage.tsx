import { calculateYearsOfExperience, getCurrentYear } from "../../shared/lib/date";
import { FloatingWhatsappButton } from "./components/FloatingWhatsappButton";
import { SiteHeader } from "./components/SiteHeader";
import { SkillMarquee } from "./components/SkillMarquee";
import { principles, profile, skills } from "./homeData";
import { AboutSection } from "./sections/AboutSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ProcessSection } from "./sections/ProcessSection";
import { ProofSection } from "./sections/ProofSection";
import { WorkSection } from "./sections/WorkSection";

export function HomePage({ currentDate = new Date() }: { currentDate?: Date }) {
  const yearsOfExperience = calculateYearsOfExperience(
    profile.careerStartDate,
    currentDate,
  );

  return (
    <main id="top" className="overflow-hidden">
      <div className="noise" />
      <SiteHeader whatsappHref={profile.whatsappHref} />
      <FloatingWhatsappButton whatsappHref={profile.whatsappHref} />
      <HeroSection yearsOfExperience={yearsOfExperience} />
      <SkillMarquee skills={skills} />
      <AboutSection principles={principles} />
      <ProofSection />
      <WorkSection />
      <ProcessSection />
      <FooterSection
        currentYear={getCurrentYear(currentDate)}
        email={profile.email}
        githubHref={profile.githubHref}
        linkedInHref={profile.linkedInHref}
        whatsappHref={profile.whatsappHref}
      />
    </main>
  );
}

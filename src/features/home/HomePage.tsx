"use client";

import { useState } from "react";
import { useEffect } from "react";

import { calculateYearsOfExperience, getCurrentYear } from "../../shared/lib/date";
import { FloatingWhatsappButton } from "./components/FloatingWhatsappButton";
import { SiteHeader } from "./components/SiteHeader";
import { SkillMarquee } from "./components/SkillMarquee";
import { homeContent, type LanguageCode } from "./homeContent";
import { profile, skills } from "./homeData";
import { AboutSection } from "./sections/AboutSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ProcessSection } from "./sections/ProcessSection";
import { ProofSection } from "./sections/ProofSection";
import { WorkSection } from "./sections/WorkSection";

export function HomePage({ currentDate = new Date() }: { currentDate?: Date }) {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const content = homeContent[language];

  useEffect(() => {
    const browserLanguage = navigator.language.toLowerCase();

    if (browserLanguage.startsWith("ja")) {
      setLanguage("ja");
      return;
    }

    if (browserLanguage.startsWith("id")) {
      setLanguage("id");
    }
  }, []);
  const yearsOfExperience = calculateYearsOfExperience(
    profile.careerStartDate,
    currentDate,
  );

  return (
    <main id="top" className="overflow-hidden">
      <div className="noise" />
      <SiteHeader
        activeLanguage={language}
        labels={content.nav}
        onLanguageChange={setLanguage}
        whatsappHref={profile.whatsappHref}
      />
      <FloatingWhatsappButton whatsappHref={profile.whatsappHref} />
      <HeroSection content={content.hero} yearsOfExperience={yearsOfExperience} />
      <SkillMarquee skills={skills} />
      <AboutSection content={content.about} />
      <ProofSection content={content.proof} />
      <WorkSection content={content.work} />
      <ProcessSection content={content.process} />
      <FooterSection
        content={content.footer}
        currentYear={getCurrentYear(currentDate)}
        email={profile.email}
        githubHref={profile.githubHref}
        linkedInHref={profile.linkedInHref}
        whatsappHref={profile.whatsappHref}
      />
    </main>
  );
}

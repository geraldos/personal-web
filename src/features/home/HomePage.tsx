"use client";

import { useState } from "react";
import { useEffect } from "react";

import { calculateYearsOfExperience, getCurrentYear } from "../../shared/lib/date";
import { FloatingWhatsappButton } from "./components/FloatingWhatsappButton";
import { SiteHeader } from "./components/SiteHeader";
import { SkillMarquee } from "./components/SkillMarquee";
import { homeContent, type LanguageCode } from "./homeContent";
import { getLocalizedGreeting } from "./greeting";
import { experienceContent } from "./experienceContent";
import { profile, skills } from "./homeData";
import { AboutSection } from "./sections/AboutSection";
import { ExperienceSection } from "./sections/ExperienceSection";
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

    if (browserLanguage.startsWith("zh")) {
      setLanguage("zh");
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
  const greeting = getLocalizedGreeting(language, currentDate);

  return (
    <main id="top" data-language={language} className="overflow-hidden">
      <div className="noise" />
      <SiteHeader
        activeLanguage={language}
        labels={content.nav}
        onLanguageChange={setLanguage}
        whatsappHref={profile.whatsappHref}
      />
      <FloatingWhatsappButton whatsappHref={profile.whatsappHref} />
      <HeroSection content={{ ...content.hero, intro: greeting ?? content.hero.intro }} yearsOfExperience={yearsOfExperience} />
      <SkillMarquee skills={skills} />
      <AboutSection content={content.about} />
      <ExperienceSection content={experienceContent[language]} />
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

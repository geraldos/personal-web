import type { Meta, StoryObj } from "@storybook/react";

import { experienceContent } from "../experienceContent";
import { homeContent, type LanguageCode } from "../homeContent";
import { profile } from "../homeData";
import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { ProcessSection } from "./ProcessSection";
import { WorkSection } from "./WorkSection";

function SectionGallery({ language }: { language: LanguageCode }) {
  const content = homeContent[language];

  return (
    <main className="overflow-hidden">
      <HeroSection content={content.hero} yearsOfExperience={5} />
      <AboutSection content={content.about} />
      <ExperienceSection content={experienceContent[language]} />
      <WorkSection content={content.work} />
      <ProcessSection content={content.process} />
      <FooterSection
        content={content.footer}
        contactHref={profile.contactHref}
        currentYear={2026}
        email={profile.email}
        githubHref={profile.githubHref}
        linkedinHref={profile.linkedinHref}
      />
    </main>
  );
}

const meta = {
  title: "Home/Sections/SectionGallery",
  component: SectionGallery,
  args: {
    language: "en",
  },
  argTypes: {
    language: {
      control: "select",
      options: ["en", "id", "ja", "zh", "hi"],
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SectionGallery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const Indonesian: Story = {
  args: { language: "id" },
};

export const Japanese: Story = {
  args: { language: "ja" },
};

export const Chinese: Story = {
  args: { language: "zh" },
};

export const Hindi: Story = {
  args: { language: "hi" },
};

export const LightTheme: Story = {
  globals: { theme: "light" },
};

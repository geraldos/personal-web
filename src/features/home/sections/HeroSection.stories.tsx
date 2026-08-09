import type { Meta, StoryObj } from "@storybook/react";

import { homeContent } from "../homeContent";
import { HeroSection } from "./HeroSection";

const meta = {
  title: "Home/Sections/HeroSection",
  component: HeroSection,
  args: {
    content: homeContent.en.hero,
    yearsOfExperience: 5,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeroSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const Indonesian: Story = {
  args: { content: homeContent.id.hero },
};

export const Japanese: Story = {
  args: { content: homeContent.ja.hero },
};

export const Chinese: Story = {
  args: { content: homeContent.zh.hero },
};

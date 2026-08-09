import type { Meta, StoryObj } from "@storybook/react";

import { experienceContent } from "../experienceContent";
import { ExperienceSection } from "./ExperienceSection";

const meta = {
  title: "Home/Sections/ExperienceSection",
  component: ExperienceSection,
  args: {
    content: experienceContent.en,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ExperienceSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const Indonesian: Story = {
  args: { content: experienceContent.id },
};

export const Japanese: Story = {
  args: { content: experienceContent.ja },
};

export const Chinese: Story = {
  args: { content: experienceContent.zh },
};

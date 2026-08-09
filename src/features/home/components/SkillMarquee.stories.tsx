import type { Meta, StoryObj } from "@storybook/react";

import { skills } from "../homeData";
import { SkillMarquee } from "./SkillMarquee";

const meta = {
  title: "Home/Components/SkillMarquee",
  component: SkillMarquee,
  args: {
    skills,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SkillMarquee>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FullStack: Story = {};

export const ShortList: Story = {
  args: { skills: skills.slice(0, 4) },
};

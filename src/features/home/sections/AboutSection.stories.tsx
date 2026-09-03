import type { Meta, StoryObj } from "@storybook/react";

import { homeContent } from "../homeContent";
import { AboutSection } from "./AboutSection";

const meta = {
  title: "Home/Sections/AboutSection",
  component: AboutSection,
  args: {
    content: homeContent.en.about,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof AboutSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const Indonesian: Story = {
  args: { content: homeContent.id.about },
};

export const Japanese: Story = {
  args: { content: homeContent.ja.about },
};

export const Chinese: Story = {
  args: { content: homeContent.zh.about },
};

export const Hindi: Story = {
  args: { content: homeContent.hi.about },
};

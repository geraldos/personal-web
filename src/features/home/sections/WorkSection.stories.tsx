import type { Meta, StoryObj } from "@storybook/react";

import { homeContent } from "../homeContent";
import { WorkSection } from "./WorkSection";

const meta = {
  title: "Home/Sections/WorkSection",
  component: WorkSection,
  args: {
    content: homeContent.en.work,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof WorkSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const Indonesian: Story = {
  args: { content: homeContent.id.work },
};

export const Japanese: Story = {
  args: { content: homeContent.ja.work },
};

export const Chinese: Story = {
  args: { content: homeContent.zh.work },
};

export const Hindi: Story = {
  args: { content: homeContent.hi.work },
};

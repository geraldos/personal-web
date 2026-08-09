import type { Meta, StoryObj } from "@storybook/react";

import { homeContent } from "../homeContent";
import { ProcessSection } from "./ProcessSection";

const meta = {
  title: "Home/Sections/ProcessSection",
  component: ProcessSection,
  args: {
    content: homeContent.en.process,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ProcessSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const Indonesian: Story = {
  args: { content: homeContent.id.process },
};

export const Japanese: Story = {
  args: { content: homeContent.ja.process },
};

export const Chinese: Story = {
  args: { content: homeContent.zh.process },
};

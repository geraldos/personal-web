import type { Meta, StoryObj } from "@storybook/react";

import { profile } from "../homeData";
import { homeContent } from "../homeContent";
import { ResumeSection } from "./ResumeSection";

const meta = {
  title: "Home/Sections/ResumeSection",
  component: ResumeSection,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    content: homeContent.en.resume,
    cvFileName: profile.cvFileName,
    cvHref: profile.cvHref,
    whatsappHref: profile.whatsappHref,
  },
} satisfies Meta<typeof ResumeSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Indonesian: Story = {
  args: {
    content: homeContent.id.resume,
  },
};

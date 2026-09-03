import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";

import { homeContent } from "../homeContent";
import { profile } from "../homeData";
import { FooterSection } from "./FooterSection";

const meta = {
  title: "Home/Sections/FooterSection",
  component: FooterSection,
  args: {
    content: homeContent.en.footer,
    contactHref: profile.contactHref,
    currentYear: 2026,
    email: profile.email,
    githubHref: profile.githubHref,
    linkedinHref: profile.linkedinHref,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FooterSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const English: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("link", { name: profile.email })).toHaveAttribute(
      "href",
      profile.contactHref,
    );
    await expect(canvas.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      profile.githubHref,
    );
    await expect(canvas.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      profile.linkedinHref,
    );
  },
};

export const Indonesian: Story = {
  args: { content: homeContent.id.footer },
};

export const Japanese: Story = {
  args: { content: homeContent.ja.footer },
};

export const Chinese: Story = {
  args: { content: homeContent.zh.footer },
};

export const Hindi: Story = {
  args: { content: homeContent.hi.footer },
};

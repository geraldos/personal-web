import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";

import { ThemeToggle } from "./ThemeToggle";

const meta = {
  title: "Shared/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  globals: {
    theme: "dark",
  },
  play: async ({ canvas }) => {
    await expect(
      await canvas.findByRole("button", { name: "Switch to light theme" }),
    ).toHaveAttribute("aria-pressed", "false");
  },
};

export const Light: Story = {
  globals: {
    theme: "light",
  },
  play: async ({ canvas }) => {
    await expect(
      await canvas.findByRole("button", { name: "Switch to dark theme" }),
    ).toHaveAttribute("aria-pressed", "true");
  },
};

export const InteractiveToggle: Story = {
  globals: {
    theme: "dark",
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      await canvas.findByRole("button", { name: "Switch to light theme" }),
    );

    await expect(
      canvas.getByRole("button", { name: "Switch to dark theme" }),
    ).toHaveAttribute("aria-pressed", "true");
  },
};

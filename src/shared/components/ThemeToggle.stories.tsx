import type { Meta, StoryObj } from "@storybook/react";

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
};

export const Light: Story = {
  globals: {
    theme: "light",
  },
};

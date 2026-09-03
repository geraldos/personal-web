import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "./Logo";

const meta = {
  title: "Shared/Logo",
  component: Logo,
  decorators: [
    (Story) => (
      <div className="bg-ink p-8 text-paper">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    language: {
      control: "select",
      options: ["en", "id", "ja", "zh", "hi"],
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const English: Story = {
  args: { language: "en" },
};

export const Indonesian: Story = {
  args: { language: "id" },
};

export const Japanese: Story = {
  args: { language: "ja" },
};

export const Chinese: Story = {
  args: { language: "zh" },
};

export const Hindi: Story = {
  args: { language: "hi" },
};

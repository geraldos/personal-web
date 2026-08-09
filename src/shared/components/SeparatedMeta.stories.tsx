import type { Meta, StoryObj } from "@storybook/react";

import { SeparatedMeta } from "./SeparatedMeta";

const meta = {
  title: "Shared/SeparatedMeta",
  component: SeparatedMeta,
  decorators: [
    (Story) => (
      <div className="bg-ink p-8 text-paper">
        <Story />
      </div>
    ),
  ],
  args: {
    items: ["Jakarta", "Remote", "UTC+7"],
  },
} satisfies Meta<typeof SeparatedMeta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleItem: Story = {
  args: { items: ["Jakarta"] },
};

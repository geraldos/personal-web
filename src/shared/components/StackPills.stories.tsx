import type { Meta, StoryObj } from "@storybook/react";

import { skills } from "../../features/home/homeData";
import { StackPills } from "./StackPills";

const meta = {
  title: "Shared/StackPills",
  component: StackPills,
  decorators: [
    (Story) => (
      <div className="max-w-3xl bg-ink p-8 text-paper">
        <Story />
      </div>
    ),
  ],
  args: {
    stacks: skills.slice(0, 5),
  },
} satisfies Meta<typeof StackPills>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    stacks: skills.slice(0, 2),
  },
};

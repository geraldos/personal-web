import type { Meta, StoryObj } from "@storybook/react";

import { ProofSection } from "./ProofSection";

const meta = {
  title: "Home/Sections/ProofSection",
  component: ProofSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ProofSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

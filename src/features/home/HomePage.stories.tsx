import type { Meta, StoryObj } from "@storybook/react";

import { HomePage } from "./HomePage";

const meta = {
  title: "Home/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentDate: new Date("2026-06-18T00:00:00"),
  },
};

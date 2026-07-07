import type { Meta, StoryObj } from "@storybook/react";

import { homeContent } from "../homeContent";
import { FieldNotesSection } from "./FieldNotesSection";

const meta = {
  title: "Home/Sections/FieldNotesSection",
  component: FieldNotesSection,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    content: homeContent.en.fieldNotes,
  },
} satisfies Meta<typeof FieldNotesSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Indonesian: Story = {
  args: {
    content: homeContent.id.fieldNotes,
  },
};

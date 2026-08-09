import type { ComponentProps } from "react";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn } from "storybook/test";

import { homeContent, type LanguageCode } from "../homeContent";
import { SiteHeader } from "./SiteHeader";

function StatefulHeader(args: ComponentProps<typeof SiteHeader>) {
  const [language, setLanguage] = useState<LanguageCode>(args.activeLanguage);

  return (
    <div className="min-h-40 bg-ink text-paper">
      <SiteHeader
        {...args}
        activeLanguage={language}
        labels={homeContent[language].nav}
        onLanguageChange={(nextLanguage) => {
          setLanguage(nextLanguage);
          args.onLanguageChange(nextLanguage);
        }}
      />
    </div>
  );
}

const meta = {
  title: "Home/Components/SiteHeader",
  component: SiteHeader,
  args: {
    activeLanguage: "en",
    labels: homeContent.en.nav,
    contactHref: "https://mail.google.com/mail/?view=cm&fs=1&to=sepdwijaya18%40gmail.com",
    cvFileName: "geraldo-cv.pdf",
    cvHref: "https://example.com/geraldo-cv.pdf",
    onLanguageChange: fn(),
  },
  argTypes: {
    activeLanguage: {
      control: "select",
      options: ["en", "id", "ja", "zh"],
    },
  },
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => <StatefulHeader {...args} />,
} satisfies Meta<typeof SiteHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const Indonesian: Story = {
  args: {
    activeLanguage: "id",
    labels: homeContent.id.nav,
  },
};

export const Japanese: Story = {
  args: {
    activeLanguage: "ja",
    labels: homeContent.ja.nav,
  },
};

export const Chinese: Story = {
  args: {
    activeLanguage: "zh",
    labels: homeContent.zh.nav,
  },
};

export const LocalCvDownload: Story = {
  args: {
    cvHref: "/cv/geraldo.pdf",
  },
};

export const LanguagePickerOpen: Story = {
  play: async ({ canvas, userEvent }) => {
    const languageButton = canvas.getByRole("button", {
      name: "Current language: English",
    });

    await userEvent.click(languageButton);
    await expect(languageButton).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByLabelText("Select language")).toBeVisible();
  },
};

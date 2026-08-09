import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { homeContent, type LanguageCode } from "../homeContent";
import { SiteHeader } from "./SiteHeader";

const defaultProps = {
  activeLanguage: "en" as LanguageCode,
  labels: homeContent.en.nav,
  contactHref: "https://mail.google.com/mail/?view=cm&fs=1&to=sepdwijaya18%40gmail.com",
  cvFileName: "geraldo-cv.pdf",
  cvHref: "https://example.com/geraldo-cv.pdf",
  onLanguageChange: vi.fn(),
};

describe("SiteHeader", () => {
  beforeEach(() => {
    vi.stubGlobal("matchMedia", vi.fn().mockReturnValue({ matches: true }));
  });

  afterEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
    vi.unstubAllGlobals();
  });

  it("treats an external CV as a new-tab link instead of a forced download", () => {
    render(<SiteHeader {...defaultProps} />);

    for (const link of screen.getAllByRole("link", { name: "Download CV" })) {
      expect(link).toHaveAttribute("href", defaultProps.cvHref);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
      expect(link).not.toHaveAttribute("download");
    }
  });

  it("adds a filename when the CV is served locally", () => {
    render(<SiteHeader {...defaultProps} cvHref="/cv/geraldo.pdf" />);

    for (const link of screen.getAllByRole("link", { name: "Download CV" })) {
      expect(link).toHaveAttribute("download", "geraldo-cv.pdf");
      expect(link).not.toHaveAttribute("target");
    }
  });

  it("opens a Gmail draft from every call-to-action", () => {
    render(<SiteHeader {...defaultProps} />);

    for (const link of screen.getAllByRole("link", { name: "Let's talk" })) {
      expect(link).toHaveAttribute("href", defaultProps.contactHref);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    }
  });

  it("selects a desktop language and closes the picker", async () => {
    const user = userEvent.setup();
    const onLanguageChange = vi.fn();
    render(<SiteHeader {...defaultProps} onLanguageChange={onLanguageChange} />);

    const languageButton = screen.getByRole("button", {
      name: "Current language: English",
    });
    await user.click(languageButton);
    expect(languageButton).toHaveAttribute("aria-expanded", "true");

    const picker = screen.getByLabelText("Select language");
    await user.click(within(picker).getByRole("button", {
      name: "Switch language to Indonesia",
    }));

    expect(onLanguageChange).toHaveBeenCalledWith("id");
    expect(languageButton).toHaveAttribute("aria-expanded", "false");
  });

  it("opens and closes the mobile navigation from its menu button", async () => {
    const user = userEvent.setup();
    render(<SiteHeader {...defaultProps} />);

    await user.click(screen.getByRole("button", { name: "Open navigation menu" }));
    const mobileNav = screen.getByLabelText("Mobile navigation");
    expect(mobileNav).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close navigation menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    await user.click(within(mobileNav).getByRole("link", { name: "About" }));
    expect(screen.queryByLabelText("Mobile navigation")).not.toBeInTheDocument();
  });

  it("changes language from the mobile navigation", async () => {
    const user = userEvent.setup();
    const onLanguageChange = vi.fn();
    render(<SiteHeader {...defaultProps} onLanguageChange={onLanguageChange} />);

    await user.click(screen.getByRole("button", { name: "Open navigation menu" }));
    const mobileNav = screen.getByLabelText("Mobile navigation");
    await user.click(within(mobileNav).getByRole("button", {
      name: "Switch language to Japanese",
    }));

    expect(onLanguageChange).toHaveBeenCalledWith("ja");
    expect(screen.queryByLabelText("Mobile navigation")).not.toBeInTheDocument();
  });
});

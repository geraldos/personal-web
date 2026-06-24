import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ThemeToggle } from "./ThemeToggle";

function mockSystemTheme(matches: boolean) {
  vi.stubGlobal("matchMedia", vi.fn().mockImplementation(() => ({ matches })));
}

describe("ThemeToggle", () => {
  afterEach(() => {
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.style.removeProperty("color-scheme");
    window.localStorage.clear();
    vi.unstubAllGlobals();
  });

  it("uses the saved theme preference", async () => {
    window.localStorage.setItem("geraldo-theme", "light");
    mockSystemTheme(true);

    render(<ThemeToggle />);

    expect(await screen.findByRole("button", { name: "Switch to dark theme" })).toBeInTheDocument();
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("uses the system preference when no preference has been saved", async () => {
    mockSystemTheme(false);

    render(<ThemeToggle />);

    expect(await screen.findByRole("button", { name: "Switch to dark theme" })).toBeInTheDocument();
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("toggles the theme and persists the new choice", async () => {
    mockSystemTheme(true);
    const user = userEvent.setup();

    render(<ThemeToggle />);

    await user.click(await screen.findByRole("button", { name: "Switch to light theme" }));

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(window.localStorage.getItem("geraldo-theme")).toBe("light");
  });
});

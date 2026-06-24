import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createElement } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { HomePage } from "./HomePage";

function mockBrowserLanguage(language: string) {
  vi.spyOn(window.navigator, "language", "get").mockReturnValue(language);
}

describe("HomePage", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders computed experience and current year from the provided date", () => {
    render(createElement(HomePage, { currentDate: new Date("2026-11-20T00:00:00") }));

    expect(screen.getByText("6+ Years")).toBeInTheDocument();
    expect(screen.getByText(/Geraldo.*2026/)).toBeInTheDocument();
  });

  it("renders the primary proof of work entries", () => {
    render(createElement(HomePage, { currentDate: new Date("2026-06-18T00:00:00") }));

    expect(screen.getByText("M2U Web")).toBeInTheDocument();
    expect(screen.getByText("Backoffice platforms")).toBeInTheDocument();
    expect(screen.getByText("React Developer Learning Path")).toBeInTheDocument();
    expect(screen.getByText("Backend JavaScript Learning Path")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Maybank Indonesia")).toBeInTheDocument();
  });

  it("switches the page copy to Indonesian", async () => {
    render(createElement(HomePage, { currentDate: new Date("2026-06-18T00:00:00") }));

    await userEvent.click(screen.getByRole("button", { name: "Current language: English" }));
    await userEvent.click(screen.getByRole("button", { name: "Switch language to Indonesia" }));

    expect(screen.getByText("Halo, saya Geraldo.")).toBeInTheDocument();
    expect(screen.getByText("Pengalaman produksi.")).toBeInTheDocument();
  });

  it("uses Indonesian by default for Indonesian browser language", async () => {
    mockBrowserLanguage("id-ID");

    render(createElement(HomePage, { currentDate: new Date("2026-06-18T00:00:00") }));

    expect(await screen.findByText("Halo, saya Geraldo.")).toBeInTheDocument();
  });

  it("uses Japanese by default for Japanese browser language", async () => {
    mockBrowserLanguage("ja-JP");

    render(createElement(HomePage, { currentDate: new Date("2026-06-18T00:00:00") }));

    expect(await screen.findByRole("button", { name: "Current language: Japanese" })).toBeInTheDocument();
    expect(document.querySelector("main")).toHaveAttribute("data-language", "ja");
  });

  it("uses Chinese by default for Chinese browser language", async () => {
    mockBrowserLanguage("zh-CN");

    render(createElement(HomePage, { currentDate: new Date("2026-06-18T00:00:00") }));

    expect(await screen.findByRole("button", { name: "Current language: Chinese" })).toBeInTheDocument();
    expect(document.querySelector("main")).toHaveAttribute("data-language", "zh");
  });

  it("switches the page copy to Japanese", async () => {
    render(createElement(HomePage, { currentDate: new Date("2026-06-18T00:00:00") }));

    await userEvent.click(screen.getByRole("button", { name: "Current language: English" }));
    await userEvent.click(screen.getByRole("button", { name: "Switch language to Japanese" }));

    expect(screen.getByRole("button", { name: "Current language: Japanese" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "フルスタック" })).toBeInTheDocument();
    expect(screen.getByText("M2U Web")).toBeInTheDocument();
    expect(screen.getByText("ソフトウェアエンジニア")).toBeInTheDocument();
  });

  it("switches the page copy to Chinese", async () => {
    render(createElement(HomePage, { currentDate: new Date("2026-06-18T00:00:00") }));

    await userEvent.click(screen.getByRole("button", { name: "Current language: English" }));
    await userEvent.click(screen.getByRole("button", { name: "Switch language to Chinese" }));

    expect(screen.getByText("凌晨好，我是杰拉尔多。")).toBeInTheDocument();
  });

  it("opens a compact navigation menu for mobile", async () => {
    render(createElement(HomePage, { currentDate: new Date("2026-06-18T00:00:00") }));

    await userEvent.click(screen.getByRole("button", { name: "Open navigation menu" }));

    expect(screen.getByLabelText("Mobile navigation")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close navigation menu" })).toBeInTheDocument();
  });

  it("throws when the provided current date is invalid", () => {
    expect(() =>
      render(createElement(HomePage, { currentDate: new Date("not-a-date") })),
    ).toThrow("Invalid current date");
  });
});

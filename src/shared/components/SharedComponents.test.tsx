import { render, screen } from "@testing-library/react";
import { Code2, Database } from "lucide-react";
import { describe, expect, it } from "vitest";

import { SkillMarquee } from "../../features/home/components/SkillMarquee";
import { Logo } from "./Logo";
import { SeparatedMeta } from "./SeparatedMeta";
import { StackPills, type StackItem } from "./StackPills";

const stacks: StackItem[] = [
  { name: "React", icon: Code2 },
  { name: "PostgreSQL", icon: Database },
];

describe("shared presentation components", () => {
  it("localizes the visible identity while keeping a stable home label", () => {
    render(<Logo language="ja" />);

    expect(screen.getByRole("link", { name: "Geraldo home" })).toHaveAttribute("href", "#top");
    expect(screen.getByText("ジェラルド")).toBeInTheDocument();
    expect(screen.getByText("フルスタックエンジニア")).toBeInTheDocument();
  });

  it("renders every technology in a stack", () => {
    render(<StackPills stacks={stacks} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
    expect(document.querySelectorAll("svg")).toHaveLength(2);
  });

  it("does not append a separator after the final metadata item", () => {
    const { container } = render(<SeparatedMeta items={["Jakarta", "Remote", "UTC+7"]} />);

    expect(screen.getByText("Jakarta")).toBeInTheDocument();
    expect(screen.getByText("UTC+7")).toBeInTheDocument();
    expect(container.querySelectorAll(".text-paper\\/20")).toHaveLength(2);
  });

  it("hides the duplicated marquee content from assistive technology", () => {
    const { container } = render(<SkillMarquee skills={stacks} />);

    expect(screen.getByLabelText("Technology stack")).toBeInTheDocument();
    expect(screen.getAllByText("React")).toHaveLength(2);
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });
});

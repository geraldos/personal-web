import { describe, expect, it } from "vitest";

import {
  credentials,
  experienceStacks,
  professionalProof,
  projects,
  skills,
} from "./homeData";

describe("project cards", () => {
  it("uses the same blue surface with white typography for every project", () => {
    expect(projects.map((project) => project.color)).toEqual([
      "bg-acid text-paper",
      "bg-acid text-paper",
      "bg-acid text-paper",
    ]);
  });
});

describe("technology stacks", () => {
  it("places infrastructure skills after the backend stack", () => {
    expect(skills.slice(-3).map((skill) => skill.name)).toEqual([
      "Docker",
      "AWS",
      "Jenkins",
    ]);
  });

  it("includes the infrastructure used by each proof item", () => {
    expect(professionalProof[0].stacks.map((stack) => stack.name)).toEqual(
      expect.arrayContaining(["Docker", "Jenkins"]),
    );
    expect(professionalProof[1].stacks.map((stack) => stack.name)).toEqual(
      expect.arrayContaining(["Docker", "Jenkins"]),
    );
    expect(experienceStacks[0].map((stack) => stack.name)).toEqual(
      expect.arrayContaining(["Docker", "Jenkins"]),
    );
    expect(credentials[1].stacks.map((stack) => stack.name)).toContain("AWS");
  });
});

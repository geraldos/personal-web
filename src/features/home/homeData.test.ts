import { describe, expect, it } from "vitest";

import { projects } from "./homeData";

describe("project cards", () => {
  it("uses the same blue surface with white typography for every project", () => {
    expect(projects.map((project) => project.color)).toEqual([
      "bg-acid text-paper",
      "bg-acid text-paper",
      "bg-acid text-paper",
    ]);
  });
});

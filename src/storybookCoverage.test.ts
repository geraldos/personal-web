import { existsSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";

const uiRoots = [
  "src/features/home/components",
  "src/features/home/sections",
  "src/shared/components",
];

const componentPaths = [
  "src/features/home/HomePage.tsx",
  ...uiRoots.flatMap((root) =>
    readdirSync(join(process.cwd(), root), { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isFile() &&
          entry.name.endsWith(".tsx") &&
          !entry.name.endsWith(".stories.tsx") &&
          !entry.name.endsWith(".test.tsx"),
      )
      .map((entry) => join(root, entry.name)),
  ),
];

describe("Storybook coverage", () => {
  it.each(componentPaths)("keeps a colocated story for %s", (componentPath) => {
    const storyPath = componentPath.replace(/\.tsx$/, ".stories.tsx");

    expect(
      existsSync(join(process.cwd(), storyPath)),
      `Missing Storybook story: ${relative(process.cwd(), storyPath)}`,
    ).toBe(true);
  });
});

import { describe, expect, it } from "vitest";

import { GET } from "./route";

describe("CV download route", () => {
  it("returns a downloadable Markdown CV", async () => {
    const response = await GET();
    const body = await response.text();

    expect(response.headers.get("content-type")).toBe("text/markdown; charset=utf-8");
    expect(response.headers.get("content-disposition")).toBe(
      'attachment; filename="geraldo-sepdwijaya-cv.md"',
    );
    expect(body).toContain("# Geraldo Sepdwijaya");
    expect(body).toContain("Full-stack Engineer");
    expect(body).toContain("Maybank Indonesia");
    expect(body).toContain("React Developer Learning Path");
  });
});

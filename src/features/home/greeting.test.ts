import { describe, expect, it } from "vitest";

import { getLocalizedGreeting } from "./greeting";

describe("getLocalizedGreeting", () => {
  it.each([
    [4, "こんばんは、ジェラルドです。"],
    [5, "おはようございます、ジェラルドです。"],
    [10, "おはようございます、ジェラルドです。"],
    [11, "こんにちは、ジェラルドです。"],
    [17, "こんにちは、ジェラルドです。"],
    [18, "こんばんは、ジェラルドです。"],
  ])("uses the correct Japanese greeting at hour %i", (hour, expected) => {
    expect(getLocalizedGreeting("ja", new Date(2026, 5, 18, hour))).toBe(expected);
  });

  it.each([
    [4, "凌晨好，我是杰拉尔多。"],
    [5, "早上好，我是杰拉尔多。"],
    [10, "早上好，我是杰拉尔多。"],
    [11, "你好，我是杰拉尔多。"],
    [17, "你好，我是杰拉尔多。"],
    [18, "晚上好，我是杰拉尔多。"],
  ])("uses the correct Chinese greeting at hour %i", (hour, expected) => {
    expect(getLocalizedGreeting("zh", new Date(2026, 5, 18, hour))).toBe(expected);
  });

  it("keeps the original greeting for languages without a time-aware greeting", () => {
    expect(getLocalizedGreeting("en", new Date("2026-06-18T14:00:00"))).toBeNull();
    expect(getLocalizedGreeting("id", new Date("2026-06-18T14:00:00"))).toBeNull();
  });
});

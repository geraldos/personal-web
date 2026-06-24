import { describe, expect, it } from "vitest";

import { getLocalizedGreeting } from "./greeting";

describe("getLocalizedGreeting", () => {
  it("uses Japanese greetings that match the local time", () => {
    expect(getLocalizedGreeting("ja", new Date("2026-06-18T08:00:00"))).toBe("おはようございます、ジェラルドです。");
    expect(getLocalizedGreeting("ja", new Date("2026-06-18T14:00:00"))).toBe("こんにちは、ジェラルドです。");
    expect(getLocalizedGreeting("ja", new Date("2026-06-18T20:00:00"))).toBe("こんばんは、ジェラルドです。");
  });

  it("uses Chinese greetings that match the local time", () => {
    expect(getLocalizedGreeting("zh", new Date("2026-06-18T08:00:00"))).toBe("早上好，我是杰拉尔多。");
    expect(getLocalizedGreeting("zh", new Date("2026-06-18T14:00:00"))).toBe("你好，我是杰拉尔多。");
    expect(getLocalizedGreeting("zh", new Date("2026-06-18T20:00:00"))).toBe("晚上好，我是杰拉尔多。");
  });

  it("keeps the original greeting for languages without a time-aware greeting", () => {
    expect(getLocalizedGreeting("en", new Date("2026-06-18T14:00:00"))).toBeNull();
    expect(getLocalizedGreeting("id", new Date("2026-06-18T14:00:00"))).toBeNull();
  });
});

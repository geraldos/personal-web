import { describe, expect, it } from "vitest";

import { calculateYearsOfExperience, getCurrentYear } from "./date";

const careerStartDate = new Date("2020-11-20T00:00:00");

describe("date helpers", () => {
  it("keeps the previous experience year before the anniversary date", () => {
    expect(calculateYearsOfExperience(careerStartDate, new Date("2026-11-19T12:00:00"))).toBe(5);
  });

  it("increments experience on the anniversary date", () => {
    expect(calculateYearsOfExperience(careerStartDate, new Date("2026-11-20T00:00:00"))).toBe(6);
  });

  it("never returns a negative experience value before the career start date", () => {
    expect(calculateYearsOfExperience(careerStartDate, new Date("2019-11-20T00:00:00"))).toBe(0);
  });

  it("throws when the career start date is invalid", () => {
    expect(() =>
      calculateYearsOfExperience(new Date("not-a-date"), new Date("2026-11-20T00:00:00")),
    ).toThrow("Invalid start date");
  });

  it("throws when the current date is invalid", () => {
    expect(() =>
      calculateYearsOfExperience(careerStartDate, new Date("not-a-date")),
    ).toThrow("Invalid current date");
  });

  it("returns the current calendar year", () => {
    expect(getCurrentYear(new Date("2030-01-01T00:00:00"))).toBe(2030);
  });

  it("throws when the current year date is invalid", () => {
    expect(() => getCurrentYear(new Date("not-a-date"))).toThrow("Invalid current date");
  });
});

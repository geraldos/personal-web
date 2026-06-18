function assertValidDate(date: Date, label: string) {
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid ${label} date`);
  }
}

export function calculateYearsOfExperience(startDate: Date, currentDate = new Date()) {
  assertValidDate(startDate, "start");
  assertValidDate(currentDate, "current");

  const years = currentDate.getFullYear() - startDate.getFullYear();
  const hasHadAnniversary =
    currentDate.getMonth() > startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() &&
      currentDate.getDate() >= startDate.getDate());

  return Math.max(0, hasHadAnniversary ? years : years - 1);
}

export function getCurrentYear(currentDate = new Date()) {
  assertValidDate(currentDate, "current");

  return currentDate.getFullYear();
}

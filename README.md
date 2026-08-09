# Geraldo Personal Profile

A creative personal profile website built with Next.js, TypeScript, Tailwind CSS, and a tech-stack icon marquee.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run check
```

The command runs coverage, the Next.js production build, and the Storybook build.

The Vitest suite covers domain helpers, API routes, page integration, navigation,
theme persistence, localization, CV links, and shared presentation components.
Coverage thresholds are enforced at 80% for lines, functions, and statements,
with a 75% branch threshold.

## TDD workflow

Run the focused watch mode before changing production code:

```bash
npm run test:tdd
```

Follow the Red-Green-Refactor loop:

1. Add one behavioral test and confirm it fails (Red).
2. Add the smallest implementation that makes it pass (Green).
3. Improve the implementation while keeping the suite green (Refactor).

Failing tests are not committed as the default repository state. To prove that
the green tests really detect defects, run mutation testing:

```bash
npm run test:mutation
```

Stryker temporarily changes production code and reruns the full Vitest suite.
A killed mutant means at least one test turned red; a surviving mutant identifies
a behavior that needs a stronger assertion. The source files remain unchanged.
An HTML report is generated at `reports/mutation/index.html`. Mutation testing
also runs weekly and on demand through GitHub Actions.

## Storybook

```bash
npm run storybook
```

Storybook documents the complete page, interactive navigation states, shared UI
primitives, localized section variants, light/dark themes, and CV link behavior.
The accessibility addon exposes automated WCAG checks and visual impairment tools
directly in the Storybook interface.

## Personalize

Update contact links and skills in `src/features/home/homeData.tsx`. Localized page
copy lives in `src/features/home/homeContent.ts`, while work history is maintained
in `src/features/home/experienceContent.ts`.

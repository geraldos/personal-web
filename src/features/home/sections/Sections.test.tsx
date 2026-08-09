import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { experienceContent } from "../experienceContent";
import { homeContent } from "../homeContent";
import { experienceStacks, profile, projects } from "../homeData";
import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { FieldNotesSection } from "./FieldNotesSection";
import { ProcessSection } from "./ProcessSection";
import { ResumeSection } from "./ResumeSection";
import { WorkSection } from "./WorkSection";

describe("home sections", () => {
  it("renders every about paragraph and principle", () => {
    const content = homeContent.en.about;
    render(<AboutSection content={content} />);

    const section = document.querySelector("#about");
    expect(section).toBeInTheDocument();
    expect(within(section!).getByRole("heading", { name: `${content.titleTop}${content.titleBottom}` })).toBeInTheDocument();
    for (const paragraph of content.paragraphs) {
      expect(within(section!).getByText(paragraph)).toBeInTheDocument();
    }
    for (const [number, title, copy] of content.principles) {
      expect(within(section!).getByText(number)).toBeInTheDocument();
      expect(within(section!).getByRole("heading", { name: title })).toBeInTheDocument();
      expect(within(section!).getByText(copy)).toBeInTheDocument();
    }
  });

  it("renders every experience role, highlight, and technology", () => {
    const content = experienceContent.en;
    render(<ExperienceSection content={content} />);

    const section = document.querySelector("#experience");
    expect(section).toBeInTheDocument();
    const roleCards = within(section!).getAllByRole("article");
    content.roles.forEach((role, index) => {
      const roleCard = roleCards[index];
      expect(within(roleCard).getByRole("heading", { name: role.role })).toBeInTheDocument();
      expect(within(roleCard).getByText(role.company)).toBeInTheDocument();
      expect(within(roleCard).getByText(role.location)).toBeInTheDocument();
      for (const highlight of role.highlights) {
        expect(within(roleCard).getByText(highlight)).toBeInTheDocument();
      }
      for (const stack of experienceStacks[index]) {
        expect(within(roleCard).getByText(stack.name)).toBeInTheDocument();
      }
    });
  });

  it("renders all field-note evidence", () => {
    const content = homeContent.en.fieldNotes;
    render(<FieldNotesSection content={content} />);

    const section = document.querySelector("#field-notes");
    expect(section).toBeInTheDocument();
    for (const note of content.notes) {
      expect(within(section!).getByRole("heading", { name: note.title })).toBeInTheDocument();
      expect(within(section!).getByText(note.context)).toBeInTheDocument();
      expect(within(section!).getByText(note.move)).toBeInTheDocument();
      expect(within(section!).getByText(note.signal)).toBeInTheDocument();
    }
    expect(within(section!).getAllByText(content.contextLabel)).toHaveLength(content.notes.length);
    expect(within(section!).getAllByText(content.moveLabel)).toHaveLength(content.notes.length);
    expect(within(section!).getAllByText(content.signalLabel)).toHaveLength(content.notes.length);
  });

  it("renders the complete process narrative", () => {
    const content = homeContent.en.process;
    render(<ProcessSection content={content} />);

    expect(screen.getByRole("heading", { name: `${content.titleTop}${content.titleBottom}` })).toBeInTheDocument();
    for (const paragraph of content.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    }
  });

  it("renders all resume signals and safe contact links", () => {
    const content = homeContent.en.resume;
    render(
      <ResumeSection
        content={content}
        contactHref={profile.contactHref}
        cvFileName={profile.cvFileName}
        cvHref={profile.cvHref}
      />,
    );

    for (const highlight of content.highlights) {
      expect(screen.getByRole("heading", { name: highlight.title })).toBeInTheDocument();
      expect(screen.getByText(highlight.description)).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: content.downloadLabel })).toHaveAttribute("href", profile.cvHref);
    expect(screen.getByRole("link", { name: content.contactLabel })).toHaveAttribute("href", profile.contactHref);
  });

  it("renders every work card and its localized details", () => {
    const content = homeContent.en.work;
    render(<WorkSection content={content} />);

    const section = document.querySelector("#work");
    expect(section).toBeInTheDocument();
    content.projects.forEach((project, index) => {
      expect(within(section!).getByRole("heading", { name: project.title })).toBeInTheDocument();
      expect(within(section!).getByText(project.description)).toBeInTheDocument();
      expect(within(section!).getByText(`${projects[index].number} / 03`)).toBeInTheDocument();
      for (const tag of project.tags) {
        expect(within(section!).getByText(tag)).toBeInTheDocument();
      }
    });
  });
});

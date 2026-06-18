import { Github, Linkedin, Mail, MoveUpRight } from "lucide-react";

import type { HomeContent } from "../homeContent";

export function FooterSection({
  content,
  currentYear,
  email,
  githubHref,
  linkedInHref,
  whatsappHref,
}: {
  content: HomeContent["footer"];
  currentYear: number;
  email: string;
  githubHref: string;
  linkedInHref: string;
  whatsappHref: string;
}) {
  return (
    <footer id="contact" className="relative bg-acid px-5 pb-8 pt-24 text-ink md:px-10 md:pt-36">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em]">{content.eyebrow}</p>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="group block">
          <h2 className="font-display text-[15vw] font-bold uppercase leading-[0.75] tracking-[-0.085em] transition group-hover:tracking-[-0.06em] md:text-[12vw]">
            {content.titleTop}
            <span className="flex items-center">
              {content.titleBottom} <MoveUpRight className="ml-4 h-[10vw] w-[10vw]" strokeWidth={1.2} />
            </span>
          </h2>
        </a>

        <div className="mt-24 grid gap-8 border-t border-ink/25 pt-8 text-xs uppercase tracking-wider md:grid-cols-3">
          <div>
            <span className="block text-ink/45">{content.contact}</span>
            <a
              className="mt-2 inline-flex items-center gap-2 font-bold hover:underline"
              href={`mailto:${email}`}
            >
              <Mail size={14} /> {email}
            </a>
          </div>
          <div className="flex gap-5 md:justify-center">
            <a
              aria-label="GitHub"
              href={githubHref}
              target="_blank"
              rel="noreferrer"
              className="transition hover:scale-125"
            >
              <Github size={20} />
            </a>
            <a
              aria-label="LinkedIn"
              href={linkedInHref}
              target="_blank"
              rel="noreferrer"
              className="transition hover:scale-125"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <div className="md:text-right">
            <span className="block text-ink/45">{content.credit}</span>
            <span className="mt-2 block font-bold">Geraldo © {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

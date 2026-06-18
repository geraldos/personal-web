import { ArrowUpRight } from "lucide-react";

import { Logo } from "../../../shared/components/Logo";

export function SiteHeader({ whatsappHref }: { whatsappHref: string }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-paper/15 bg-ink/80 px-5 py-4 backdrop-blur-xl md:px-10">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-8 text-xs uppercase tracking-widest md:flex">
          <a className="transition hover:text-acid" href="#about">
            About
          </a>
          <a className="transition hover:text-acid" href="#proof">
            Proof
          </a>
          <a className="transition hover:text-acid" href="#work">
            What I Do
          </a>
          <a className="transition hover:text-acid" href="#contact">
            Contact
          </a>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-paper/30 px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition hover:border-acid hover:bg-acid hover:text-ink md:text-xs"
        >
          Let&apos;s talk <ArrowUpRight size={14} />
        </a>
      </div>
    </nav>
  );
}

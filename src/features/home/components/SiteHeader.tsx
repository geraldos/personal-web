"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { Logo } from "../../../shared/components/Logo";
import type { LanguageCode } from "../homeContent";
import { languages } from "../homeContent";

function FlagIcon({ language }: { language: LanguageCode }) {
  if (language === "id") {
    return (
      <svg viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-[2px]" aria-hidden="true">
        <rect width="24" height="8" fill="#ef4444" />
        <rect y="8" width="24" height="8" fill="#f8fafc" />
      </svg>
    );
  }

  if (language === "ja") {
    return (
      <svg viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-[2px]" aria-hidden="true">
        <rect width="24" height="16" fill="#f8fafc" />
        <circle cx="12" cy="8" r="4" fill="#bc002d" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-[2px]" aria-hidden="true">
      <rect width="24" height="16" fill="#1d4ed8" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#f8fafc" strokeWidth="3" />
      <path d="M0 0 24 16M24 0 0 16" stroke="#ef4444" strokeWidth="1.4" />
      <path d="M12 0v16M0 8h24" stroke="#f8fafc" strokeWidth="5" />
      <path d="M12 0v16M0 8h24" stroke="#ef4444" strokeWidth="2.6" />
    </svg>
  );
}

export function SiteHeader({
  activeLanguage,
  labels,
  onLanguageChange,
  whatsappHref,
}: {
  activeLanguage: LanguageCode;
  labels: {
    about: string;
    proof: string;
    work: string;
    contact: string;
    cta: string;
  };
  onLanguageChange: (language: LanguageCode) => void;
  whatsappHref: string;
}) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const activeLanguageName = languages.find((language) => language.code === activeLanguage)?.name;

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-paper/15 bg-ink/80 px-5 py-4 backdrop-blur-xl md:px-10">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-8 text-xs uppercase tracking-widest md:flex">
          <a className="transition hover:text-acid" href="#about">
            {labels.about}
          </a>
          <a className="transition hover:text-acid" href="#proof">
            {labels.proof}
          </a>
          <a className="transition hover:text-acid" href="#work">
            {labels.work}
          </a>
          <a className="transition hover:text-acid" href="#contact">
            {labels.contact}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              aria-label={`Current language: ${activeLanguageName}`}
              aria-expanded={isLanguageOpen}
              onClick={() => setIsLanguageOpen((isOpen) => !isOpen)}
              className="flex h-10 items-center gap-2 border border-paper/20 px-3 text-paper/70 transition hover:border-acid hover:text-acid"
            >
              <FlagIcon language={activeLanguage} />
              <ChevronDown
                size={14}
                className={`transition ${isLanguageOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`absolute right-0 top-full mt-2 grid gap-1 border border-paper/15 bg-ink p-2 shadow-[0_18px_45px_rgba(0,0,0,0.35)] ${
                isLanguageOpen ? "block" : "hidden"
              }`}
              aria-label="Select language"
            >
              {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                aria-label={`Switch language to ${language.name}`}
                title={language.name}
                onClick={() => {
                  onLanguageChange(language.code);
                  setIsLanguageOpen(false);
                }}
                className={`flex h-9 w-11 items-center justify-center transition ${
                  activeLanguage === language.code
                    ? "bg-acid"
                    : "text-paper/50 hover:bg-paper/10"
                }`}
              >
                <FlagIcon language={language.code} />
              </button>
              ))}
            </div>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-paper/30 px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition hover:border-acid hover:bg-acid hover:text-ink md:text-xs"
          >
            {labels.cta} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}

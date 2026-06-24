"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

import { Logo } from "../../../shared/components/Logo";
import { ThemeToggle } from "../../../shared/components/ThemeToggle";
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

  if (language === "zh") {
    return (
      <svg viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-[2px]" aria-hidden="true">
        <rect width="24" height="16" fill="#de2910" />
        <path d="m4 2 .7 1.7L6.5 3l-1 1.5.7 1.7-1.8-.6-1.5 1 .1-1.9-1.5-1 1.8-.5Z" fill="#ffde00" />
        <circle cx="8.3" cy="2.7" r="0.8" fill="#ffde00" />
        <circle cx="9.4" cy="5.1" r="0.8" fill="#ffde00" />
        <circle cx="8.8" cy="7.6" r="0.8" fill="#ffde00" />
        <circle cx="6.8" cy="9.3" r="0.8" fill="#ffde00" />
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
    language: string;
  };
  onLanguageChange: (language: LanguageCode) => void;
  whatsappHref: string;
}) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeLanguageName = languages.find((language) => language.code === activeLanguage)?.name;
  const experienceLabel = {
    en: "Experience",
    id: "Pengalaman",
    ja: "職務経歴",
    zh: "工作经历",
  }[activeLanguage];

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-paper/15 bg-ink/80 px-4 py-3 backdrop-blur-xl lg:px-10 lg:py-4">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between">
        <Logo language={activeLanguage} />
        <div className="hidden items-center gap-8 text-xs uppercase tracking-widest lg:flex">
          <a className="transition hover:text-acid" href="#about">
            {labels.about}
          </a>
          <a className="transition hover:text-acid" href="#experience">
            {experienceLabel}
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
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <div className="relative">
            <button
              type="button"
              aria-label={`Current language: ${activeLanguageName}`}
              aria-expanded={isLanguageOpen}
              onClick={() => setIsLanguageOpen((isOpen) => !isOpen)}
              className="flex h-10 items-center gap-2 rounded-xl border border-paper/20 px-3 text-paper/70 transition hover:border-acid hover:text-acid"
            >
              <FlagIcon language={activeLanguage} />
              <ChevronDown
                size={14}
                className={`transition ${isLanguageOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`absolute right-0 top-full mt-2 grid gap-1 rounded-2xl border border-paper/15 bg-ink p-2 shadow-[0_18px_45px_rgba(0,0,0,0.35)] ${
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
                className={`flex h-9 w-11 items-center justify-center rounded-xl transition ${
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
            className="flex items-center gap-2 rounded-full border border-paper/30 px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition hover:border-acid hover:bg-acid hover:text-paper lg:text-xs"
          >
            {labels.cta} <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/30 text-paper transition hover:border-acid hover:bg-acid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid"
          >
            {isMobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <div
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mx-4 mt-3 grid gap-5 rounded-3xl border border-paper/15 bg-ink p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] lg:hidden"
        >
          <div className="grid border-y border-paper/15">
            {[
              ["#about", labels.about],
              ["#experience", experienceLabel],
              ["#proof", labels.proof],
              ["#work", labels.work],
              ["#contact", labels.contact],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl border-b border-paper/15 py-3 text-xs font-bold uppercase tracking-widest transition hover:bg-paper/10 last:border-b-0"
              >
                {label}
              </a>
            ))}
          </div>
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-paper/55">
              {labels.language}
            </p>
            <div className="grid grid-cols-4 gap-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  aria-label={`Switch language to ${language.name}`}
                  onClick={() => {
                    onLanguageChange(language.code);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex h-11 items-center justify-center rounded-xl border transition ${
                    activeLanguage === language.code
                      ? "border-acid bg-acid"
                      : "border-paper/20 text-paper/70 hover:border-acid"
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
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-acid px-4 py-3 text-xs font-bold uppercase tracking-wider text-paper"
          >
            {labels.cta} <ArrowUpRight size={15} />
          </a>
        </div>
      ) : null}
    </nav>
  );
}

import { SiWhatsapp } from "react-icons/si";

export function FloatingWhatsappButton({ whatsappHref }: { whatsappHref: string }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-acid text-ink shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <SiWhatsapp className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
    </a>
  );
}

import { SiWhatsapp } from "react-icons/si";

export function FloatingWhatsappButton({ whatsappHref }: { whatsappHref: string }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-acid text-paper shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <SiWhatsapp className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
    </a>
  );
}

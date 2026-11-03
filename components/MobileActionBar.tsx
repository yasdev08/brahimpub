"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, FileText } from "lucide-react";

const PHONE = "+213553924419";

// Fixed bottom bar on phones/tablets: call, WhatsApp, quote.
// Appears after the first screen so it doesn't compete with the hero CTAs.
export default function MobileActionBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname === "/offline") return null;

  return (
    <>
      {/* Spacer so the bar never hides the end of the footer */}
      <div className="h-[calc(4.25rem+env(safe-area-inset-bottom))] bg-dark lg:hidden" aria-hidden="true" />

      <nav
        aria-label="Contact rapide"
        className={`fixed inset-x-0 bottom-0 z-40 lg:hidden bg-dark/95 backdrop-blur-md border-t border-white/10 pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="grid grid-cols-3 gap-2 px-3 py-2.5 max-w-lg mx-auto">
          <a
            href={`tel:${PHONE}`}
            data-track="mobile_bar_call"
            tabIndex={visible ? 0 : -1}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-white/10 text-white text-sm font-semibold py-3 active:bg-white/20"
          >
            <Phone size={17} />
            Appeler
          </a>
          <a
            href={`https://wa.me/${PHONE.slice(1)}`}
            target="_blank"
            rel="noopener noreferrer"
            data-track="mobile_bar_whatsapp"
            tabIndex={visible ? 0 : -1}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-dark text-sm font-bold py-3 active:opacity-90"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>
          <Link
            href="/contact"
            data-track="mobile_bar_quote"
            tabIndex={visible ? 0 : -1}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-brand text-white text-sm font-bold py-3 font-display active:bg-brand-dark"
          >
            <FileText size={17} />
            Devis
          </Link>
        </div>
      </nav>
    </>
  );
}

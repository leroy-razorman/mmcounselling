"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactLink, navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape and when the viewport grows to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 901px)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav aria-label="Main" className="nav">
        <Link href="/" className="brand" onClick={close}>
          <span className="brand-mark">mm</span>
          <span className="brand-text">
            <span className="brand-name">{site.name}</span>
            <span className="brand-sub">
              {site.counsellor} · {site.role}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <div id="primary-menu" className="nav-menu" data-open={open}>
          <div className="nav-links">
            {navLinks.map((l) => {
              const active = l.href === pathname;
              return (
                <Link key={l.href} href={l.href} className="navlink" aria-current={active ? "page" : undefined} onClick={close}>
                  {l.label}
                </Link>
              );
            })}
          </div>
          <Link href={contactLink.href} className="btn btn-primary nav-cta" onClick={close}>
            {contactLink.label}
          </Link>
        </div>
      </nav>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import { contactLink, navLinks, site } from "@/lib/site";
import { FacebookIcon } from "./Icons";

const accreditations = [
  { src: "/images/accreditations/hpcsa.png", alt: "HPCSA — Health Professions Council of South Africa", w: 530, h: 227 },
  { src: "/images/accreditations/psyssa.jpg", alt: "PsySSA — Psychological Society of South Africa", w: 900, h: 293 },
  { src: "/images/accreditations/psychology-today.png", alt: "Verified by Psychology Today", w: 902, h: 297 },
  { src: "/images/accreditations/bhf.png", alt: "BHF — Board of Healthcare Funders", w: 900, h: 331 },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <span className="footer-logo">
            <span className="brand-mark">mm</span>
            <span className="footer-name">{site.name}</span>
          </span>
          <span className="footer-tagline">{site.tagline}</span>
          <a href={site.facebook} className="footer-social" target="_blank" rel="noopener noreferrer">
            <FacebookIcon size={18} />
            Facebook
          </a>
        </div>
        <div className="footer-col">
          <span className="footer-heading">Explore</span>
          {[...navLinks, contactLink].map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="footer-col">
          <span className="footer-heading">Contact</span>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.location}</span>
        </div>
        <div className="footer-col">
          <span className="footer-heading">{site.counsellor}</span>
          <span>{site.role}</span>
          <span>BA Hons Psych (UNISA)</span>
          <span>PGDip Public Health (UWC)</span>
          <span>HPCSA no. {site.hpcsa}</span>
          <span>Practice no. {site.practiceNo}</span>
        </div>
      </div>
      <ul className="footer-logos" aria-label="Registrations and memberships">
        {accreditations.map((l) => (
          <li key={l.src}>
            <Image src={l.src} alt={l.alt} width={l.w} height={l.h} sizes="200px" />
          </li>
        ))}
      </ul>
      <div className="footer-base">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
      </div>
    </footer>
  );
}

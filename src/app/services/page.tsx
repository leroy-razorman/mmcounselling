import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, PinIcon, VideoIcon } from "@/components/Icons";
import ServiceExplorer from "@/components/ServiceExplorer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Individual, couples, family, adolescent and youth counselling, career guidance and psychometric assessment, pastoral counselling, and supervision and mentorship.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <section className="container page-hero">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> Services
        </nav>
        <h1 className="display display-services">
          Nurturing minds &amp; <em>healing</em> hearts.
        </h1>
      </section>

      <ServiceExplorer />

      <section id="where" className="container where">
        <div className="section-head">
          <span className="kicker">Where we meet</span>
          <h2 className="h2 h2-sm">In person or online.</h2>
        </div>
        <div className="where-grid">
          <div className="where-card">
            <span className="icon-tile icon-sage">
              <PinIcon />
            </span>
            <span className="where-title">In person</span>
            <span className="where-text">
              {site.location} · {site.area}
            </span>
          </div>
          <div className="where-card">
            <span className="icon-tile icon-clay">
              <VideoIcon />
            </span>
            <span className="where-title">Online</span>
            <span className="where-text">Sessions are also available online.</span>
          </div>
        </div>
      </section>

      <section className="cta-wrap">
        <div className="cta">
          <h2 className="h2 cta-title">Get in touch.</h2>
          <div className="cta-actions">
            <a className="btn btn-ghost-light btn-lg" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <Link className="btn btn-light btn-lg" href="/#contact">
              Send a message
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

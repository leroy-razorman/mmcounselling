"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from "@/lib/content";
import { site } from "@/lib/site";
import { ArrowIcon, CheckIcon } from "./Icons";

const ids = services.map((s) => s.id);

export default function ServiceExplorer() {
  const [sel, setSel] = useState(ids[0]);

  // Allow deep links such as /services#couples (used by the home page cards).
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (!ids.includes(id)) return;
      setSel(id);
      document.getElementById("services")?.scrollIntoView();
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const pick = (id: string) => {
    setSel(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const svc = services.find((s) => s.id === sel) ?? services[0];

  return (
    <section id="services" className="container explorer">
      <div role="group" aria-label="Choose a service" className="tabs">
        {services.map((s) => (
          <button key={s.id} type="button" className="tab" aria-pressed={s.id === sel} onClick={() => pick(s.id)}>
            {s.label}
          </button>
        ))}
      </div>

      <div className="explorer-body">
        <div className="service-panel" key={svc.id}>
          <span className="kicker">How I can help</span>
          <h2 className="service-title">{svc.title}</h2>
          {svc.paragraphs.map((p) => (
            <p key={p} className="service-text">
              {p}
            </p>
          ))}
          <div className="service-list">
            <span className="list-title">{svc.listTitle}</span>
            <ul>
              {svc.helps.map((h) => (
                <li key={h}>
                  <CheckIcon />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="service-actions">
            <Link className="btn btn-primary btn-md" href="/#contact">
              Get in touch
              <ArrowIcon />
            </Link>
            <a className="btn btn-outline btn-md" href={site.phoneHref}>
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>

        <aside className="service-aside">
          <div className="service-photo">
            <Image
              key={svc.image}
              src={svc.image}
              alt={svc.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              style={{ objectPosition: svc.imagePosition ?? "50% 50%" }}
            />
          </div>
          <div className="sessions-card">
            <span className="kicker kicker-sm">Sessions</span>
            <div className="sessions-row">
              <span>In person</span>
              <span>{site.area}</span>
            </div>
            <div className="sessions-row">
              <span>Online</span>
              <span>Available</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

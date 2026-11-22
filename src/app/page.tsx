import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  ArrowIcon,
  ChatIcon,
  CompassIcon,
  CoupleIcon,
  CrossIcon,
  FacebookIcon,
  HomeIcon,
  Leaf,
  MailIcon,
  PersonIcon,
  PhoneIcon,
  PinIcon,
  SchoolIcon,
  ShieldIcon,
  SproutIcon,
  VideoIcon,
} from "@/components/Icons";
import { supportAreas, testimonials } from "@/lib/content";
import { site } from "@/lib/site";

const audiences = [
  { title: "Individuals", text: "Tweens, teens and adults.", href: "/services#individual", Icon: PersonIcon },
  { title: "Couples", text: "Marriage counselling.", href: "/services#couples", Icon: CoupleIcon },
  { title: "Families", text: "Parents, caregivers and family members.", href: "/services#family", Icon: HomeIcon },
  { title: "Teens & tweens", text: "Adolescents and youth counselling.", href: "/services#youth", Icon: SproutIcon },
  { title: "Schools", text: "Organisations.", href: "/services", Icon: SchoolIcon },
  { title: "Career guidance", text: "Career guidance and psychometric assessment.", href: "/services#career", Icon: CompassIcon },
  { title: "Pastoral counselling", text: "A pastoral or biblically based approach, when you prefer it.", href: "/services#pastoral", Icon: CrossIcon },
  { title: "Other counsellors", text: "Professional guidance and mentoring.", href: "/services#supervision", Icon: ChatIcon },
];

const modalities = [
  { n: "i.", title: "Narrative Therapy" },
  { n: "ii.", title: "CBT", sub: "Cognitive Behavioural Therapy" },
  { n: "iii.", title: "DBT", sub: "Dialectical Behaviour Therapy" },
];

export default function HomePage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="container hero">
        <div className="hero-copy">
          <span className="badge">
            <span className="dot dot-accent" />
            HPCSA Registered Counsellor · over 14 years of experience
          </span>
          <h1 className="display">
            A space for <em>healing</em>, growth and connection.
          </h1>
          <p className="lead">
            Counselling for tweens, teens, adults, couples and families — in person in {site.area}, or online.
          </p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/#contact">
              Get in touch
              <ArrowIcon />
            </Link>
            <Link className="btn btn-outline btn-lg" href="/services">
              More about services
            </Link>
          </div>
          <div className="trust">
            <span>
              <ShieldIcon size={18} strokeWidth={1.7} />
              HPCSA {site.hpcsa}
            </span>
            <span>
              <VideoIcon size={18} strokeWidth={1.7} />
              In person or online
            </span>
            <span>
              <SproutIcon size={18} strokeWidth={1.7} />
              Practice no. {site.practiceNo}
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <div className="hero-arch">
              <Image
                src="/images/hero-room.jpg"
                alt="A calm, light room with a white sofa and a small green plant"
                fill
                priority
                sizes="(max-width: 640px) 150vw, 860px"
                style={{ objectPosition: "46% 50%" }}
              />
            </div>
            <div className="hero-card">
              <span>
                <span className="dot dot-deep" />
                In person · {site.area}
              </span>
              <span>
                <span className="dot dot-accent" />
                Online
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container section about">
        <div className="about-media">
          <div className="portrait">
            <Image
              src="/images/michelle-mackrell.jpg"
              alt="Michelle Mackrell, registered counsellor in Table View"
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              style={{ objectPosition: "50% 18%" }}
            />
          </div>
          <div className="stat-grid">
            <div className="stat">
              <span className="stat-value">14+</span>
              <span className="stat-label">years of experience</span>
            </div>
            <div className="stat">
              <span className="stat-value stat-value-sm">Public · Private · NGO</span>
              <span className="stat-label">settings</span>
            </div>
          </div>
        </div>
        <div className="about-copy">
          <span className="kicker">01 — About me</span>
          <h2 className="h2 h2-xl">
            Michelle <em>Mackrell</em>
          </h2>
          <p className="body body-relaxed">
            I’m a HPCSA Registered Counsellor with over 14 years of experience supporting people across a range of
            public, private and NGO settings. My work is more than a profession — it’s a calling. I’m drawn to people’s
            stories and hold a strong belief in their ability to grow, adapt and find meaning, even in the hardest
            seasons.
          </p>
          <p className="body body-relaxed">
            I offer a warm, approachable presence and a commitment to walking alongside others through life’s
            challenges. Over and above professional training, my own experiences with trauma and personal hardship have
            shaped me into the compassionate, grounded counsellor I am today, and they continue to deepen my empathy and
            connection with those I support.
          </p>
          <div className="cred-grid">
            <div className="cred">
              <span className="cred-label">Qualification</span>
              <span className="cred-value">BA Hons Psych</span>
              <span className="cred-sub">UNISA</span>
            </div>
            <div className="cred">
              <span className="cred-label">Qualification</span>
              <span className="cred-value">PGDip Public Health</span>
              <span className="cred-sub">UWC</span>
            </div>
            <div className="cred">
              <span className="cred-label">HPCSA no.</span>
              <span className="cred-value">{site.hpcsa}</span>
              <span className="cred-sub">Registered Counsellor</span>
            </div>
            <div className="cred">
              <span className="cred-label">Practice no.</span>
              <span className="cred-value">{site.practiceNo}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Support-with strip */}
      <section aria-label="Areas of support" className="strip">
        <div className="container strip-inner">
          <span className="strip-label">Support with</span>
          {supportAreas.map((a) => (
            <span key={a} className="chip">
              {a}
            </span>
          ))}
        </div>
      </section>

      {/* Who I work with */}
      <section id="who" className="container section">
        <div className="section-head section-head-split">
          <div className="section-head-main">
            <span className="kicker">02 — Who I work with</span>
            <h2 className="h2">Individuals, couples, families and organisations.</h2>
            <p className="body body-wide">
              At Michelle Mackrell Counselling, a range of therapeutic services are offered to support psychological
              wellbeing, personal growth and emotional resilience.
            </p>
          </div>
          <div className="section-head-aside">
            <span className="aside-quote">Together we can start your journey towards healing</span>
            <Link href="/services" className="text-link">
              More about services →
            </Link>
          </div>
        </div>

        <div className="card-grid">
          {audiences.map(({ title, text, href, Icon }, i) => (
            <Link key={title} className="card" href={href}>
              <span className={`icon-tile ${i % 2 ? "icon-clay" : "icon-sage"}`}>
                <Icon />
              </span>
              <span className="card-title">{title}</span>
              <span className="card-text">{text}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="panel-wrap">
        <div className="panel panel-sage">
          <Leaf className="panel-leaf" />
          <div className="panel-inner">
            <div className="panel-copy">
              <span className="kicker">03 — My approach</span>
              <h2 className="h2 h2-lg">
                Eclectic and <em className="em-clay">client-centred</em>.
              </h2>
              <p className="body">
                My approach to counselling is eclectic and client-centred, shaped by the unique needs and experiences of
                each individual. I primarily work within Narrative Therapy but integrate practical tools and techniques
                from Cognitive Behavioural Therapy (CBT) and Dialectical Behaviour Therapy (DBT) when appropriate,
                ensuring that each person receives the most effective support for their journey.
              </p>
              <p className="body">
                I work alongside tweens, teens and adults as they navigate challenges such as anxiety, depression,
                grief, trauma in its many forms and major life changes. I also work with couples, parents, families and
                others facing relational struggles - providing a safe, supportive space to talk things through, heal and
                rebuild meaningful connection.
              </p>
              <p className="body">
                In addition to client work, I’m committed to mentoring and supporting fellow counsellors, particularly
                those new to the field. I offer professional guidance, reflective spaces, and encouragement to help
                other practitioners grow in confidence, deepen their clinical insight and remain grounded in their own
                wellbeing.
              </p>
            </div>
            <div className="modalities">
              {modalities.map((m) => (
                <div key={m.title} className="modality">
                  <span className="modality-n">{m.n}</span>
                  <span className="modality-text">
                    <span className="modality-title">{m.title}</span>
                    {m.sub && <span className="modality-sub">{m.sub}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section id="expect" className="container section section-tight">
        <div className="split">
          <div className="split-copy">
            <span className="kicker">04 — What to expect</span>
            <h2 className="h2">A relaxed and comfortable space.</h2>
            <p className="body">
              Clients can expect to be welcomed into a relaxed and comfortable space where you will be given the
              opportunity to talk openly and be met with respect, authenticity and compassion.
            </p>
            <p className="body">
              Whether you’re working through generational trauma, a difficult relationship or navigating a tough season,
              counselling invites someone to walk beside you through the valley. Supporting, encouraging and gently
              challenging you to move towards healing and growth.
            </p>
            <div className="pills">
              <span>Respect</span>
              <span>Authenticity</span>
              <span>Compassion</span>
            </div>
          </div>
          <div className="split-photo">
            <Image
              src="/images/counselling-space.jpg"
              alt="A comfortable chair beside tall, softly curtained windows"
              fill
              sizes="(max-width: 900px) 100vw, 600px"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container section">
        <div className="section-head">
          <span className="kicker">05 — Testimonials</span>
          <h2 className="h2">Kind words from clients.</h2>
        </div>
        <div className="quotes">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="quote-card">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className={`avatar ${i % 2 ? "icon-clay" : "icon-sage"}`}>
                  {t.name === "Anonymous" ? "·" : t.name[0]}
                </span>
                <span>{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Quote band */}
      <section className="quote-band">
        <figure>
          <SproutIcon size={40} strokeWidth={1.4} />
          <blockquote>“There are far better things ahead than any we leave behind.”</blockquote>
          <figcaption>C.S. Lewis</figcaption>
        </figure>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-wrap">
        <div className="contact">
          <div className="contact-info">
            <span className="kicker">06 — Contact</span>
            <h2 className="h2">Get in touch.</h2>
            <p className="body">Get in touch today and start your journey towards emotional wellbeing.</p>
            <div className="contact-list">
              <a className="contact-item btn" href={site.phoneHref}>
                <span className="icon-tile icon-tile-sm icon-sage">
                  <PhoneIcon size={20} />
                </span>
                <span className="contact-item-text">
                  <span>Call</span>
                  <span>{site.phoneDisplay}</span>
                </span>
              </a>
              <a className="contact-item btn" href={`mailto:${site.email}`}>
                <span className="icon-tile icon-tile-sm icon-sage">
                  <MailIcon size={20} />
                </span>
                <span className="contact-item-text">
                  <span>Email</span>
                  <span>{site.email}</span>
                </span>
              </a>
              <div className="contact-item">
                <span className="icon-tile icon-tile-sm icon-sage">
                  <PinIcon size={20} />
                </span>
                <span className="contact-item-text">
                  <span>Location</span>
                  <span>{site.location}</span>
                </span>
              </div>
              <a className="contact-item btn" href={site.facebook} target="_blank" rel="noopener noreferrer">
                <span className="icon-tile icon-tile-sm icon-sage">
                  <FacebookIcon size={20} />
                </span>
                <span className="contact-item-text">
                  <span>Facebook</span>
                  <span>{site.name}</span>
                </span>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

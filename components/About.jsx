'use client';
import Image from 'next/image';
import { EnvelopeSimple } from '@phosphor-icons/react';

const AREAS = ['North Port', 'Venice', 'Englewood', 'Port Charlotte', 'Osprey', 'Southwest FL'];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner">
        <div className="about__inner">
          <div className="about__content">
            <header className="section-header reveal-up">
              <p className="section-eyebrow">About</p>
              <div className="title-reveal">
                <h2 className="section-title">
                  A real person,<br className="br-desktop" /> not an agency.
                </h2>
              </div>
            </header>

            <p className="about__body reveal-up">
              I'm Charles — a web designer in SW Florida. I work directly with local business
              owners, building sites that bring in customers and hold up over time. No account
              managers, no layers to get through for support. You talk to the person who builds your site.
            </p>

            <p className="about__body reveal-up" style={{ '--delay': '60ms' }}>
              I design and build, so the site looks right and works right — not one at the expense
              of the other. I've built sites for restaurants, trades, and professional practices
              across Southwest Florida.
            </p>

            <a
              href="mailto:charles@chuckdesign.com"
              className="about__email reveal-up"
              style={{ '--delay': '120ms' }}
            >
              <EnvelopeSimple weight="duotone" aria-hidden="true" />
              charles@chuckdesign.com
            </a>
          </div>

          <div className="about__areas">
            <div className="about__portrait reveal-up">
              <Image
                src="/images/family.jpg"
                alt="Charles Spivey with family in North Port, FL"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="about__portrait-img"
              />
            </div>

            <p className="about__areas-label">Serving</p>
            <ul className="areas-list" aria-label="Service areas">
              {AREAS.map(city => (
                <li key={city}><span className="area-tag">{city}</span></li>
              ))}
            </ul>
            <p className="about__local-note">34291 · North Port, FL · Sarasota County</p>
          </div>
        </div>
      </div>
    </section>
  );
}

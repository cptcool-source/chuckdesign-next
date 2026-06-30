'use client';
import { useEffect } from 'react';
import { Monitor, MagnifyingGlassPlus, MapPin, ShareNetwork, ShieldCheck } from '@phosphor-icons/react';

const SERVICES = [
  {
    id: 'web-design',
    Icon: Monitor,
    title: 'Web Design & Development',
    desc: 'Built from scratch — no templates, no shortcuts. Fast, clean, and made to turn visitors into customers.',
    featured: true,
    list: [
      'Designed from scratch — no templates, no page builders',
      'Mobile-first, responsive on every screen',
      'Technical SEO and Google Analytics built in from day one',
      'Fast load times — 90+ PageSpeed score at launch',
    ],
    price: '$1,600–$7,500, estimated. Most sites land around $2,200–$4,000.',
    color: '#E05C3A',
  },
  {
    id: 'seo',
    Icon: MagnifyingGlassPlus,
    title: 'Built for Search',
    desc: 'Every site ships SEO-focused — what Google needs to find it: proper structure, schema markup, fast load times, Search Console connected at launch.',
    price: 'Included with every site. No separate fee.',
    color: '#4A90D9',
  },
  {
    id: 'gbp',
    Icon: MapPin,
    title: 'Google Business Profile',
    desc: 'Your listing, set up, verified, and handed off. Shows up on Maps and search when someone nearby is looking.',
    price: '$200, one-time, estimated.',
    color: '#2D9E6B',
  },
  {
    id: 'social',
    Icon: ShareNetwork,
    title: 'Social Profile Launch',
    desc: 'The right accounts created, your branding applied, handed off ready to use. No long-term content writing — just a professional presence, set up right.',
    price: '$150, one-time, estimated. Covers up to two platforms.',
    color: '#8B5CF6',
  },
  {
    id: 'care',
    Icon: ShieldCheck,
    title: 'Site Care Plan',
    desc: 'Monthly backups, updates, and uptime monitoring so your site stays healthy. Routine requests handled within 48 hours. Urgent issues — site down, broken form — within 24 hours. One person, no tickets.',
    wide: true,
    price: '$75–$100/month, estimated.',
    color: '#F59E0B',
  },
];

export default function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll('.svc-card');

    function handleMove(e, card) {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const cx = r.width / 2;
      const cy = r.height / 2;
      const rotX = ((y - cy) / cy) * -5;
      const rotY = ((x - cx) / cx) * 5;
      card.style.transform = `translateY(-4px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      card.style.transformStyle = 'preserve-3d';
    }

    function handleLeave(card) {
      card.style.transform = '';
    }

    const cleanups = [];
    cards.forEach(card => {
      const move = e => handleMove(e, card);
      const leave = () => handleLeave(card);
      card.addEventListener('mousemove', move);
      card.addEventListener('mouseleave', leave);
      cleanups.push(() => {
        card.removeEventListener('mousemove', move);
        card.removeEventListener('mouseleave', leave);
      });
    });

    return () => cleanups.forEach(fn => fn());
  }, []);

  return (
    <section id="services" className="services">
      <div className="section-inner">
        <header className="section-header reveal-up">
          <p className="section-eyebrow">Services</p>
          <div className="title-reveal">
            <h2 className="section-title">
              Everything a local&nbsp;<br className="br-desktop" />
              business needs online.
            </h2>
          </div>
          <p className="section-sub">
            Most projects run $1,800–$6,000, depending on size. Estimates below — your number depends on what you need.
          </p>
        </header>

        <div className="services-grid services-grid--asymmetric">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              className={[
                'svc-card reveal-up',
                svc.featured ? 'svc-card--featured' : '',
                svc.wide ? 'svc-card--wide' : '',
              ].filter(Boolean).join(' ')}
              style={{ '--card-color': svc.color, '--delay': `${i * 60}ms` }}
            >
              <div className="svc-card__icon-wrap">
                <svc.Icon weight="duotone" aria-hidden="true" />
              </div>
              {svc.featured ? (
                <div className="svc-card__feature-body">
                  <h3 className="svc-card__title">{svc.title}</h3>
                  <p className="svc-card__desc">{svc.desc}</p>
                  <ul className="svc-card__list">
                    {svc.list.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <p className="svc-card__price">{svc.price}</p>
                </div>
              ) : (
                <>
                  <h3 className="svc-card__title">{svc.title}</h3>
                  <p className="svc-card__desc">{svc.desc}</p>
                  <p className="svc-card__price">{svc.price}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

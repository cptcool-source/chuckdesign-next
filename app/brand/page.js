import './brand.css';

export default function BrandPage() {
  return (
    <div className="bd-page">

      {/* ── Nav ── */}
      <nav className="bd-nav">
        <div className="bd-nav-brand">
          chuck<span className="bd-nav-dot" />design
          <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 400, marginLeft: 12 }}>
            Brand System
          </span>
        </div>
        <ul className="bd-nav-links">
          <li><a href="#directions">Directions</a></li>
          <li><a href="#logo">Logo</a></li>
          <li><a href="#color">Color</a></li>
          <li><a href="#typography">Type</a></li>
          <li><a href="#voice">Voice</a></li>
          <li><a href="#components">Components</a></li>
        </ul>
      </nav>

      {/* ── Hero ── */}
      <section className="bd-hero">
        <div className="bd-hero-top">
          <img
            src="/images/logo-wordmark.png"
            alt="chuck design"
            className="bd-hero-wordmark"
          />
          <div className="bd-hero-meta">
            <span className="bd-hero-label">Brand Identity System</span>
            <span className="bd-hero-version">v1.0 · 2026</span>
          </div>
        </div>
        <hr className="bd-hero-divider" />
        <div className="bd-hero-desc">
          <h1>Every design decision,<br />documented.</h1>
          <p>
            This document defines how the chuck design brand looks, speaks, and behaves
            across every touchpoint. It exists so that every deliverable — a website,
            a proposal, a social post — feels like it came from the{' '}
            <em>same intentional place.</em>
          </p>
        </div>
      </section>

      {/* ── Direction Exploration ── */}
      <section id="directions" className="bd-section-full bd-section-surface">
        <div style={{ maxWidth: 1160, margin: '0 auto', paddingBottom: 48 }}>
          <p className="bd-eyebrow">Phase 01 — Discovery</p>
          <h2 className="bd-section-title">Three directions. One choice.</h2>
          <p className="bd-section-sub">
            Before any design work begins, we explore distinct creative directions. Each one
            is a fully considered path — different in feeling, different in strategy.
            The client chooses the one that fits.
          </p>
        </div>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div className="bd-directions">

            {/* Direction A */}
            <div className="bd-dir-card bd-dir-a">
              <span className="bd-dir-badge">Explored</span>
              <div>
                <p className="bd-dir-a-label">Direction A</p>
                <h3 className="bd-dir-a-heading">The Serif<br />Legacy</h3>
              </div>
              <p className="bd-dir-a-sub">Elevated. Precise. Authoritative.</p>
              <div className="bd-dir-a-swatches">
                <div className="bd-dir-a-swatch" style={{ background: '#0A0A14' }} title="#0A0A14" />
                <div className="bd-dir-a-swatch" style={{ background: '#C9A96E' }} title="#C9A96E" />
                <div className="bd-dir-a-swatch" style={{ background: '#F5F4F0' }} title="#F5F4F0" />
                <div className="bd-dir-a-swatch" style={{ background: '#2A1F0E' }} title="#2A1F0E" />
              </div>
              <p className="bd-dir-a-body">
                Cormorant Garamond at 600 weight. Deep navy background with gold
                as the only accent. Borrowed from law firm and architecture studio
                aesthetics — the brand of institutions that have been around for decades.
              </p>
              <div className="bd-dir-a-verdict">
                Not chosen — felt too formal for how Charles actually works.
                The warmth of the studio didn&apos;t come through.
              </div>
            </div>

            {/* Direction B */}
            <div className="bd-dir-card bd-dir-b">
              <span className="bd-dir-badge">Explored</span>
              <div>
                <p className="bd-dir-b-label">Direction B</p>
                <h3 className="bd-dir-b-heading">The Agency<br />Standard</h3>
              </div>
              <p className="bd-dir-b-sub">Scalable. Structured. Professional.</p>
              <div className="bd-dir-b-swatches">
                <div className="bd-dir-b-swatch" style={{ background: '#0E1117' }} title="#0E1117" />
                <div className="bd-dir-b-swatch" style={{ background: '#2D7DD2' }} title="#2D7DD2" />
                <div className="bd-dir-b-swatch" style={{ background: '#4A5568' }} title="#4A5568" />
                <div className="bd-dir-b-swatch" style={{ background: '#E8EDF2' }} title="#E8EDF2" />
              </div>
              <p className="bd-dir-b-body">
                DM Sans at 700. Navy foundation with slate-blue as the action color.
                Clean grid, tight spacing, corporate confidence. Looks like it scales
                to a team of twenty — which is exactly the problem.
              </p>
              <div className="bd-dir-b-verdict">
                Not chosen — could belong to any agency. Missing the direct,
                personal voice that makes chuck design different.
              </div>
            </div>

            {/* Direction C — Chosen */}
            <div className="bd-dir-card bd-dir-c">
              <span className="bd-dir-badge">Chosen ✓</span>
              <div>
                <p className="bd-dir-c-label">Direction C</p>
                <h3 className="bd-dir-c-heading">The Direct<br />Voice</h3>
              </div>
              <p className="bd-dir-c-sub">Warm. Confident. Human.</p>
              <div className="bd-dir-c-swatches">
                <div className="bd-dir-c-swatch" style={{ background: '#FAFAF8', border: '1.5px solid #DDDBD7' }} title="#FAFAF8" />
                <div className="bd-dir-c-swatch" style={{ background: '#E05C3A' }} title="#E05C3A" />
                <div className="bd-dir-c-swatch" style={{ background: '#111111' }} title="#111111" />
                <div className="bd-dir-c-swatch" style={{ background: '#F2F0ED', border: '1.5px solid #DDDBD7' }} title="#F2F0ED" />
              </div>
              <p className="bd-dir-c-body">
                Outfit at 800 for headlines — heavy, confident, zero padding.
                Warm off-white background with coral as the single accent.
                Feels like a real person made it, not a committee.
              </p>
              <div className="bd-dir-c-verdict">
                Chosen — direct without being cold. The coral accent signals
                creativity while the light mode keeps it approachable for
                any local business owner.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Logo System ── */}
      <section id="logo" className="bd-section">
        <p className="bd-eyebrow">Phase 02 — Identity</p>
        <h2 className="bd-section-title">Logo system</h2>
        <p className="bd-section-sub">
          Two marks. One wordmark for full-context usage — nav, headers, documents.
          One icon mark for avatars, favicons, and tight spaces.
        </p>

        <div className="bd-logo-grid">
          <div className="bd-logo-cell bd-logo-cell-dark">
            <img src="/images/logo-wordmark.png" alt="chuck design wordmark" style={{ height: 40, width: 'auto' }} />
            <span className="bd-logo-usage-label">Primary — dark background</span>
          </div>
          <div className="bd-logo-cell bd-logo-cell-light">
            <span style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 800,
              fontSize: 32,
              letterSpacing: '-0.03em',
              color: '#111111',
              lineHeight: 1
            }}>
              chuck<span style={{ color: '#E05C3A' }}>.</span>
              <span style={{ display: 'block', fontSize: 18, fontWeight: 300, color: '#E05C3A', marginTop: 2 }}>design</span>
            </span>
            <span className="bd-logo-usage-label" style={{ color: '#BBBAB6' }}>Primary — light background</span>
          </div>
          <div className="bd-logo-cell bd-logo-cell-surface">
            <img src="/images/logo-mark.png" alt="chuck design icon" className="bd-logo-mark" />
            <span className="bd-logo-usage-label" style={{ color: '#BBBAB6' }}>Icon mark — avatars &amp; favicons</span>
          </div>
          <div className="bd-logo-cell bd-logo-cell-coral">
            <img src="/images/logo-mark.png" alt="chuck design icon" className="bd-logo-mark" style={{ filter: 'brightness(0) invert(1)' }} />
            <span className="bd-logo-usage-label">Icon mark — accent background</span>
          </div>
        </div>

        <div className="bd-logo-rules">
          <div className="bd-logo-rule">
            <h4 className="bd-rule-do">
              <span className="bd-rule-icon bd-rule-icon-do">✓</span>
              Use on dark or light backgrounds
            </h4>
            <p>The wordmark works on #111111 and #FAFAF8. Always maintain clear space equal to the height of the &ldquo;c&rdquo; on all sides.</p>
          </div>
          <div className="bd-logo-rule">
            <h4 className="bd-rule-dont">
              <span className="bd-rule-icon bd-rule-icon-dont">✕</span>
              Never place on busy backgrounds
            </h4>
            <p>Don&apos;t place the wordmark on photographs, gradients, or any surface that reduces legibility. Use the icon mark instead.</p>
          </div>
          <div className="bd-logo-rule">
            <h4 className="bd-rule-do">
              <span className="bd-rule-icon bd-rule-icon-do">✓</span>
              Scale proportionally
            </h4>
            <p>Minimum wordmark width: 120px on screen, 1.2&quot; in print. Minimum icon mark: 32×32px on screen.</p>
          </div>
          <div className="bd-logo-rule">
            <h4 className="bd-rule-dont">
              <span className="bd-rule-icon bd-rule-icon-dont">✕</span>
              Never recolor or distort
            </h4>
            <p>Don&apos;t change typeface, spacing, or color. Don&apos;t stretch, rotate, or add effects like drop shadows.</p>
          </div>
        </div>
      </section>

      {/* ── Color System ── */}
      <section id="color" className="bd-section-full bd-section-surface">
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <p className="bd-eyebrow">Phase 02 — Identity</p>
          <h2 className="bd-section-title">Color system</h2>
          <p className="bd-section-sub">
            One accent color. Used sparingly so it always lands. Every other color
            is neutral — warm whites, dark charcoals, and the grays between them.
          </p>

          <div className="bd-color-row">
            <div>
              <p className="bd-color-group-label">Accent</p>
              <div className="bd-swatches-row">
                {[
                  { name: 'Coral', hex: '#E05C3A', rgb: '224, 92, 58', usage: 'CTAs, key moments, accents' },
                  { name: 'Coral Light', hex: '#F07A5A', rgb: '240, 122, 90', usage: 'Hover states, soft emphasis' },
                  { name: 'Coral Dark', hex: '#B84928', rgb: '184, 73, 40', usage: 'Active states, pressed' },
                ].map(s => (
                  <div className="bd-swatch-card" key={s.hex}>
                    <div className="bd-swatch-color" style={{ background: s.hex }} />
                    <div className="bd-swatch-info">
                      <p className="bd-swatch-name">{s.name}</p>
                      <p className="bd-swatch-hex">{s.hex}</p>
                      <p className="bd-swatch-hex">RGB {s.rgb}</p>
                      <p className="bd-swatch-usage">{s.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="bd-color-group-label">Backgrounds &amp; Surfaces</p>
              <div className="bd-swatches-row">
                {[
                  { name: 'Canvas', hex: '#FAFAF8', rgb: '250, 250, 248', usage: 'Page background' },
                  { name: 'Surface', hex: '#F2F0ED', rgb: '242, 240, 237', usage: 'Cards, sections' },
                  { name: 'Surface Raised', hex: '#ECEAE6', rgb: '236, 234, 230', usage: 'Hover, elevated' },
                  { name: 'Border', hex: '#DDDBD7', rgb: '221, 219, 215', usage: 'Dividers, outlines' },
                ].map(s => (
                  <div className="bd-swatch-card" key={s.hex}>
                    <div className="bd-swatch-color" style={{ background: s.hex, border: '1px solid #DDDBD7' }} />
                    <div className="bd-swatch-info">
                      <p className="bd-swatch-name">{s.name}</p>
                      <p className="bd-swatch-hex">{s.hex}</p>
                      <p className="bd-swatch-hex">RGB {s.rgb}</p>
                      <p className="bd-swatch-usage">{s.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="bd-color-group-label">Text &amp; Dark</p>
              <div className="bd-swatches-row">
                {[
                  { name: 'Ink', hex: '#111111', rgb: '17, 17, 17', usage: 'Headings, dark sections' },
                  { name: 'Muted', hex: '#6B6965', rgb: '107, 105, 101', usage: 'Body copy, descriptions' },
                  { name: 'Faint', hex: '#BBBAB6', rgb: '187, 186, 182', usage: 'Placeholders, disabled' },
                ].map(s => (
                  <div className="bd-swatch-card" key={s.hex}>
                    <div className="bd-swatch-color" style={{ background: s.hex }} />
                    <div className="bd-swatch-info">
                      <p className="bd-swatch-name">{s.name}</p>
                      <p className="bd-swatch-hex">{s.hex}</p>
                      <p className="bd-swatch-hex">RGB {s.rgb}</p>
                      <p className="bd-swatch-usage">{s.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Typography ── */}
      <section id="typography" className="bd-section">
        <p className="bd-eyebrow">Phase 02 — Identity</p>
        <h2 className="bd-section-title">Typography</h2>
        <p className="bd-section-sub">
          Two typefaces. Outfit handles everything from display headlines to body copy —
          the weight range does the work. Geist Mono appears only for technical content.
        </p>

        <div className="bd-type-samples">
          {[
            { role: 'Display', spec: 'Outfit 800 / −0.03em', sample: 'Designs Built to Lead', className: 'bd-type-display' },
            { role: 'Heading 1', spec: 'Outfit 800 / −0.03em', sample: 'Web Design for Real Businesses', className: 'bd-type-h1' },
            { role: 'Heading 2', spec: 'Outfit 600 / −0.02em', sample: 'What you get when you work with us', className: 'bd-type-h2' },
            { role: 'Heading 3', spec: 'Outfit 600', sample: 'North Port · Venice · Englewood', className: 'bd-type-h3' },
            { role: 'Body', spec: 'Outfit 400 / 1.65', sample: 'Every business in Southwest Florida deserves a site that works as hard as they do. We build with intention — no templates, no shortcuts.', className: 'bd-type-body' },
            { role: 'Small / Label', spec: 'Outfit 500', sample: 'Web Design · Development · SEO', className: 'bd-type-small' },
            { role: 'Accent / Italic', spec: 'Outfit 300 italic', sample: '"Design without strategy is decoration."', className: 'bd-type-accent' },
            { role: 'Mono', spec: 'Geist Mono 400', sample: 'chuckdesign.com', className: 'bd-type-mono' },
          ].map(({ role, spec, sample, className }) => (
            <div className="bd-type-row" key={role}>
              <div className="bd-type-meta">
                <p className="bd-type-role">{role}</p>
                <p className="bd-type-spec">{spec}</p>
              </div>
              <p className={`bd-type-sample ${className}`}>{sample}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 13, fontWeight: 600, color: '#111', marginBottom: 16 }}>
          Outfit weight scale
        </p>
        <div className="bd-type-scale">
          {[
            { weight: 300, label: 'Light / Contrast', sample: 'chuck.' },
            { weight: 400, label: 'Regular / Body', sample: 'chuck.' },
            { weight: 600, label: 'SemiBold / Sub-heading', sample: 'chuck.' },
            { weight: 800, label: 'ExtraBold / Display', sample: 'chuck.' },
          ].map(({ weight, label, sample }) => (
            <div className="bd-type-weight-cell" key={weight}>
              <p className="bd-type-weight-sample" style={{ fontWeight: weight }}>{sample}</p>
              <p className="bd-type-weight-label">{weight} — {label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Spacing ── */}
      <section className="bd-section-full bd-section-surface">
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <p className="bd-eyebrow">Phase 02 — Identity</p>
          <h2 className="bd-section-title">Spacing &amp; grid</h2>
          <p className="bd-section-sub">
            An 8-point base grid. Everything aligns to multiples of 8.
            Max content width 1160px with fluid gutters.
          </p>

          <div className="bd-spacing-grid">
            {[
              { name: 'XS', value: '8px', height: 8 },
              { name: 'SM', value: '16px', height: 16 },
              { name: 'MD', value: '24px', height: 24 },
              { name: 'LG', value: '32px', height: 32 },
              { name: 'XL', value: '48px', height: 40 },
              { name: '2XL', value: '64px', height: 48 },
              { name: 'Section', value: 'clamp(60px,8vw,100px)', height: 48 },
              { name: 'Gutter', value: 'clamp(20px,5vw,60px)', height: 32 },
            ].map(({ name, value, height }) => (
              <div className="bd-spacing-item" key={name}>
                <div className="bd-spacing-bar-wrap">
                  <div className="bd-spacing-bar" style={{ height }} />
                </div>
                <p className="bd-spacing-name">{name}</p>
                <p className="bd-spacing-label">{value}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 13, fontWeight: 600, color: '#111', marginBottom: 16, marginTop: 48 }}>
            Border radius
          </p>
          <div className="bd-radius-row">
            {[
              { label: '4px — Tags, badges', r: 4 },
              { label: '8px — Buttons, inputs', r: 8 },
              { label: '14px — Cards, panels', r: 14 },
              { label: '20px — Large sections', r: 20 },
              { label: '50% — Avatars, dots', r: 100 },
            ].map(({ label, r }) => (
              <div className="bd-radius-item" key={r}>
                <div className="bd-radius-demo" style={{ borderRadius: r }} />
                <p className="bd-radius-label">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Voice & Tone ── */}
      <section id="voice" className="bd-section">
        <p className="bd-eyebrow">Phase 02 — Identity</p>
        <h2 className="bd-section-title">Voice &amp; tone</h2>
        <p className="bd-section-sub">
          Direct. Short sentences. No buzzwords. Write like you&apos;re talking to the
          business owner — not pitching them.
        </p>

        <div className="bd-voice-grid">
          <div className="bd-voice-cell">
            <p className="bd-voice-label bd-voice-label-do">✓ Say this</p>
            <p className="bd-voice-example bd-voice-example-do">
              &ldquo;I build websites for <em>local businesses</em> that need to show up on Google and convert visitors into customers.&rdquo;
            </p>
            <p className="bd-voice-example bd-voice-example-do">
              &ldquo;Most small business sites have <em>three problems</em>. Here&apos;s what they are.&rdquo;
            </p>
            <p className="bd-voice-example bd-voice-example-do">
              &ldquo;You talk to me directly. <em>Not an account manager.</em>&rdquo;
            </p>
          </div>
          <div className="bd-voice-cell">
            <p className="bd-voice-label bd-voice-label-dont">✕ Not this</p>
            <p className="bd-voice-example bd-voice-example-dont">
              &ldquo;We <em>leverage</em> cutting-edge digital solutions to empower your brand&apos;s online presence.&rdquo;
            </p>
            <p className="bd-voice-example bd-voice-example-dont">
              &ldquo;Our <em>synergistic</em> approach to web development delivers measurable ROI.&rdquo;
            </p>
            <p className="bd-voice-example bd-voice-example-dont">
              &ldquo;We are passionate about <em>disrupting</em> the local business web design space.&rdquo;
            </p>
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#111', marginBottom: 16 }}>
            Brand personality traits
          </p>
          <div className="bd-voice-traits">
            {['Direct', 'Confident', 'Human', 'Local', 'No-nonsense', 'Knowledgeable', 'Unpretentious', 'Results-focused'].map(t => (
              <span className="bd-voice-trait" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photography Direction ── */}
      <section className="bd-section-full" style={{ background: '#111111' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <p className="bd-eyebrow">Phase 02 — Identity</p>
          <h2 className="bd-section-title" style={{ color: '#fff' }}>Photography direction</h2>
          <p className="bd-section-sub">
            Real people, real businesses. Natural light. Southwest Florida context.
            Nothing that looks like it came from a stock photo subscription.
          </p>

          <div className="bd-photo-grid">
            <div className="bd-photo-cell bd-photo-cell-a">
              <p className="bd-photo-title">Real workspaces</p>
              <p className="bd-photo-desc">Actual businesses, not staged studios. The restaurant kitchen, the trades truck, the salon chair.</p>
            </div>
            <div className="bd-photo-cell bd-photo-cell-b">
              <p className="bd-photo-title">Candid interactions</p>
              <p className="bd-photo-desc">People at work, not posing. Action shots over portraits. Natural expressions over stock smiles.</p>
            </div>
            <div className="bd-photo-cell bd-photo-cell-c">
              <p className="bd-photo-title">SW Florida context</p>
              <p className="bd-photo-desc">Local color, natural light, coastal warmth. Avoid generic city backgrounds or generic office scenes.</p>
            </div>
          </div>

          <div className="bd-photo-rules" style={{ marginTop: 32 }}>
            <div className="bd-photo-rule-group">
              <h4 className="bd-photo-rule-do-head">✓ Use</h4>
              <ul>
                <li>Natural window light or outdoor light</li>
                <li>Warm tones — no cool filters</li>
                <li>Real clients and real businesses where possible</li>
                <li>Screenshots of actual built sites</li>
                <li>Before/after comparisons showing real work</li>
              </ul>
            </div>
            <div className="bd-photo-rule-group">
              <h4 className="bd-photo-rule-dont-head">✕ Avoid</h4>
              <ul>
                <li>Generic stock photo people in suits</li>
                <li>Overly polished, studio-lit product shots</li>
                <li>Abstract tech imagery (circuit boards, binary code)</li>
                <li>Cool blue tones or heavy filter presets</li>
                <li>Watermarked or compressed images</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Components ── */}
      <section id="components" className="bd-section-full bd-section-surface">
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <p className="bd-eyebrow">Phase 03 — Application</p>
          <h2 className="bd-section-title">Component library</h2>
          <p className="bd-section-sub">
            The core UI elements — buttons, cards, inputs, and navigation — as they
            appear in the final build.
          </p>

          <div className="bd-components-grid">

            {/* Buttons */}
            <div className="bd-comp-cell">
              <p className="bd-comp-label">Buttons</p>
              <div className="bd-btn-row">
                <button className="bd-btn-primary">Get started</button>
                <button className="bd-btn-secondary">Learn more</button>
              </div>
              <div className="bd-btn-row">
                <button className="bd-btn-ghost">View portfolio →</button>
              </div>
              <div style={{ fontSize: 12, color: '#BBBAB6', marginTop: 8, lineHeight: 1.6 }}>
                Primary — coral fill, white text, 8px radius<br />
                Secondary — outlined, dark text<br />
                Ghost — underlined coral, no border
              </div>
            </div>

            {/* Service Card */}
            <div className="bd-comp-cell">
              <p className="bd-comp-label">Service card</p>
              <div className="bd-sample-card">
                <div className="bd-sample-card-color" style={{ background: '#E05C3A' }} />
                <div className="bd-sample-card-body">
                  <p className="bd-sample-card-tag">Web Design</p>
                  <p className="bd-sample-card-title">Custom Website</p>
                  <p className="bd-sample-card-desc">Built from scratch. No templates. Designed around how your specific business gets customers.</p>
                  <button className="bd-btn-ghost" style={{ fontSize: 13 }}>View details →</button>
                </div>
              </div>
            </div>

            {/* Form inputs */}
            <div className="bd-comp-cell">
              <p className="bd-comp-label">Form inputs</p>
              <div className="bd-sample-input-wrap">
                <label className="bd-sample-label">Your name</label>
                <input className="bd-sample-input" type="text" placeholder="Charles Spivey" readOnly />
              </div>
              <div className="bd-sample-input-wrap">
                <label className="bd-sample-label">Business type</label>
                <input className="bd-sample-input" type="text" placeholder="Restaurant, trades, health..." readOnly />
                <span className="bd-sample-hint">Helps us understand your customers.</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="bd-comp-cell bd-comp-cell-dark">
              <p className="bd-comp-label">Navigation</p>
              <div className="bd-nav-preview">
                <span className="bd-nav-preview-brand">
                  chuck<span style={{ color: '#E05C3A' }}>.</span>
                </span>
                <div className="bd-nav-preview-links">
                  {['Work', 'Services', 'Process', 'Contact'].map(l => (
                    <span className="bd-nav-preview-link" key={l}>{l}</span>
                  ))}
                </div>
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', lineHeight: 1.6 }}>
                Transparent dark glass at top<br />
                Crossfades to warm white on scroll<br />
                Height: 56px · Backdrop blur: 12px
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bd-footer">
        <img src="/images/logo-wordmark.png" alt="chuck design" className="bd-footer-wordmark" />
        <span className="bd-footer-copy">
          © 2026 chuck design · North Port, FL · Confidential
        </span>
        <span className="bd-footer-version">Brand System v1.0</span>
      </footer>

    </div>
  );
}

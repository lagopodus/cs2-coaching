import { useMemo, useState } from 'react';
import './App.css';

const themes = {
  aurora: {
    name: 'Aurora Neon',
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    accent: '#06b6d4',
    glow: '0 0 30px rgba(6,182,212,0.4)',
  },
  desert: {
    name: 'Desert Mirage',
    background: 'linear-gradient(135deg, #2b1b0f, #5a3419)',
    accent: '#f59e0b',
    glow: '0 0 30px rgba(245,158,11,0.4)',
  },
  arctic: {
    name: 'Arctic Ops',
    background: 'linear-gradient(135deg, #0b1021, #121f33)',
    accent: '#8b5cf6',
    glow: '0 0 30px rgba(139,92,246,0.35)',
  },
};

const plans = [
  {
    title: 'Aim Essentials',
    price: '€49',
    description: 'Perfekte Basis für Einsteiger mit Fokus auf Aim, Movement und CSGO2-Mechaniken.',
    perks: ['2h 1:1 Coaching', 'Weekly Aim Drills', 'VOD Review & Feedback', 'Personal Warmup Routine'],
    bestFor: 'Spieler, die sichere Grundlagen aufbauen möchten.',
  },
  {
    title: 'Strat Mastery',
    price: '€129',
    description: 'Teamplay, Utility und Mid-round Entscheidungen mit klaren Playbook-Vorteilen.',
    perks: ['5h Team Sessions', 'Map-by-Map Playbook', 'Utility Lineups Library', 'Live Scrim Coaching'],
    bestFor: 'Clans, die T- und CT-Strukturen festigen wollen.',
    highlighted: true,
  },
  {
    title: 'Pro League',
    price: '€249',
    description: 'High-Performance Programm mit Datenanalyse, Match-Prep und Mental Game.',
    perks: ['8h Coaching + Reviews', 'Stat Breakdown Dashboard', 'Match Prep Templates', 'Mental & Routine Coaching'],
    bestFor: 'Ambitionierte Teams auf der Suche nach konstanten Ergebnissen.',
  },
];

const reviews = [
  {
    name: 'Lena “Nova” K.',
    role: 'IGL - Diamond League',
    text: 'Unsere Executes sitzen endlich. Die Utility-Pläne sparen uns jede Woche Zeit und die Mid-round Calls fühlen sich klar an.',
  },
  {
    name: 'Marek “Pulse” S.',
    role: 'Entry - Mixed Stack',
    text: 'Aim-Drills + Feedback nach jeder Session – nach 3 Wochen +15% Headshot-Rate. Genau das, was wir brauchten.',
  },
  {
    name: 'Team Fenix',
    role: 'Open Qualifier Squad',
    text: 'Das Pro League Paket hat uns durch zwei Qualifier gebracht. Match-Prep und Refrag-Planung waren Gold wert.',
  },
];

function App() {
  const [themeKey, setThemeKey] = useState('aurora');
  const theme = useMemo(() => themes[themeKey], [themeKey]);

  return (
    <div className="App" style={{ backgroundImage: theme.background }}>
      <div className="glow" style={{ boxShadow: theme.glow }} />
      <header className="nav" style={{ borderColor: theme.accent }}>
        <div className="logo">CS2 Coaching</div>
        <nav>
          <a href="#plans">Pakete</a>
          <a href="#reviews">Reviews</a>
          <a href="#booking">Termin buchen</a>
        </nav>
        <div className="theme-switcher">
          {Object.entries(themes).map(([key, value]) => (
            <button
              key={key}
              className={key === themeKey ? 'active' : ''}
              onClick={() => setThemeKey(key)}
              aria-label={`Switch to ${value.name}`}
            >
              {value.name}
            </button>
          ))}
        </div>
      </header>

      <main style={{ '--accent': theme.accent }}>
        <section className="hero">
          <div>
            <p className="eyebrow">CS2 Coaching • Perform like a Pro</p>
            <h1>Anti-eco? Post-plant? Wir bauen deinen perfekten Gameplan.</h1>
            <p className="lede">
              Persönliche CS2 Coaches mit klaren Drills, Utility-Vorteilen und Match-Prep Templates.
              Buche jetzt dein Training und dominiere die nächste Quali.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="#booking">Termin sichern</a>
              <a className="btn ghost" href="#plans">Pakete ansehen</a>
            </div>
            <div className="meta">
              <span>Reaktionszeit-Workouts</span>
              <span>Map-Pool Coaching</span>
              <span>Deutsch & Englisch</span>
            </div>
          </div>
          <div className="stat-card">
            <h3>Match-Impact</h3>
            <ul>
              <li><strong>+18%</strong> mehr Pistol-Runden durch Utility-Pläne</li>
              <li><strong>2x</strong> schnellere Mid-round Calls</li>
              <li><strong>4</strong> map-spezifische Drills pro Woche</li>
              <li><strong>100%</strong> VOD Feedback nach jeder Session</li>
            </ul>
          </div>
        </section>

        <section className="advantages" aria-label="Vorteile">
          <div className="section-head">
            <p className="eyebrow">Vorteile</p>
            <h2>Alles, was dich schneller besser macht</h2>
            <p className="lede">Aufbauende Sessions, klare Playbooks und Daten, die zeigen, wo du stehst.</p>
          </div>
          <div className="grid">
            {[
              {
                title: 'Individuelle Roadmap',
                detail: 'Dein Coach erstellt ein Wochenprogramm mit Aim, Utility und Decision Making.',
              },
              {
                title: 'VOD & Demo Review',
                detail: 'Jede Session endet mit konkreten Clips, Kommentaren und Timecodes.',
              },
              {
                title: 'Teamplay & Calls',
                detail: 'Practice-Setups, Default-Routinen und Mid-round Kommunikation werden geübt.',
              },
              {
                title: 'Tools & Vorlagen',
                detail: 'Callout-Maps, Smoke-Library, Warmup-Routinen und Match-Prep Sheets inklusive.',
              },
            ].map((card) => (
              <article key={card.title} className="feature">
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="plans" className="plans" aria-label="Pakete">
          <div className="section-head">
            <p className="eyebrow">Pakete</p>
            <h2>Wähle deinen Coaching Plan</h2>
            <p className="lede">Skalierbare Modelle mit klaren Vorteilen für Solo-Spieler und Teams.</p>
          </div>
          <div className="plan-grid">
            {plans.map((plan) => (
              <article key={plan.title} className={`plan ${plan.highlighted ? 'highlight' : ''}`}>
                <div className="plan-top">
                  <p className="eyebrow">{plan.bestFor}</p>
                  <h3>{plan.title}</h3>
                  <p className="price">{plan.price}<span className="freq"> / Paket</span></p>
                  <p className="description">{plan.description}</p>
                </div>
                <ul className="perks">
                  {plan.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <a className="btn secondary" href="#booking">Termin buchen</a>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="reviews" aria-label="Kundenstimmen">
          <div className="section-head">
            <p className="eyebrow">Reviews</p>
            <h2>Happy Players & Teams</h2>
            <p className="lede">Ergebnisse aus echten Stacks, die jede Woche trainieren.</p>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <figure key={review.name} className="review">
                <blockquote>“{review.text}”</blockquote>
                <figcaption>
                  <span className="name">{review.name}</span>
                  <span className="role">{review.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="booking" className="booking" aria-label="Termin buchen">
          <div>
            <p className="eyebrow">Termin buchen</p>
            <h2>Ready für dein erstes Review?</h2>
            <p className="lede">Wähle einen Slot, wir schicken dir sofort den Warmup-Guide und die Checkliste.</p>
            <div className="slots">
              {['Montag 18:00', 'Mittwoch 20:30', 'Freitag 19:00', 'Sonntag 16:00'].map((slot) => (
                <button key={slot} className="slot">{slot}</button>
              ))}
            </div>
            <p className="small">Wunsch-Termin nicht dabei? Schreib uns via Discord oder Mail und wir finden einen Slot.</p>
          </div>
          <form className="booking-form">
            <label>
              Dein Ingame Name
              <input type="text" placeholder="z. B. Nova_IGL" />
            </label>
            <label>
              Team / Rang
              <input type="text" placeholder="Faceit 6, 5-Stack" />
            </label>
            <label>
              Fokus
              <select>
                <option>Aim & Mechanics</option>
                <option>Mid-round Calls</option>
                <option>Utility & Defaults</option>
                <option>Vollständiges Playbook</option>
              </select>
            </label>
            <label>
              Wunschpaket
              <select>
                {plans.map((plan) => (
                  <option key={plan.title}>{plan.title}</option>
                ))}
              </select>
            </label>
            <button className="btn primary" type="button">Termin anfragen</button>
          </form>
        </section>

        <section className="cta">
          <div>
            <h2>CS2 Skills on lock. Coaching, das wirkt.</h2>
            <p>Buche jetzt deinen Slot – egal ob Solo oder Team. Wir kümmern uns um den Rest.</p>
          </div>
          <a className="btn ghost" href="#booking">Termin sichern</a>
        </section>
      </main>

      <footer className="footer">
        <div>Made for CS2 Grinder • Coach Support 24/7</div>
        <div className="footer-links">
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
          <a href="mailto:coach@cs2clinic.gg">coach@cs2clinic.gg</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

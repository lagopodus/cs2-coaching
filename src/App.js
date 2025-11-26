import { useEffect, useMemo, useState } from 'react';
import './App.css';

const themes = {
  aurora: {
    label: 'Aurora',
    primary: '#9b5de5',
    accent: '#f15bb5',
    glow: '#fee440',
    background: '#0f1020',
    muted: '#f2f2f2',
  },
  desert: {
    label: 'Desert Sun',
    primary: '#f6aa1c',
    accent: '#ef5f67',
    glow: '#f9dbbd',
    background: '#11100e',
    muted: '#faf6f0',
  },
  neon: {
    label: 'Neon Pulse',
    primary: '#2de1fc',
    accent: '#f26df9',
    glow: '#08f7fe',
    background: '#05060a',
    muted: '#e8f0ff',
  },
};

const plans = [
  {
    name: 'Aim Warmup',
    price: '€39',
    description: '45-min session focused on mechanics, aim drills, and movement polishing.',
    features: ['Kovaaks-inspired routines', 'Personalized training card', 'VoD review follow-up'],
  },
  {
    name: 'Strat Architect',
    price: '€69',
    description: '90-min deep dive into map control, utility lineups, and micro-calling.',
    features: ['Utility labs for Mirage/Inferno/Anubis', 'Attack/defense gameplans', 'Live scrim simulation'],
    highlight: true,
  },
  {
    name: 'Team Bootcamp',
    price: '€129',
    description: '3-hour intensive for full squads with role definitions and playbook building.',
    features: ['5-stack role audit', 'Mid-round protocols', 'Demo study with instant clips'],
  },
];

const perks = [
  'Coaching auf Deutsch & Englisch',
  'Screencasts & Drills als PDF download',
  'Steam & Discord Support für 30 Tage',
  'Terminbestätigung in <24h',
];

const reviews = [
  {
    name: 'Lena “DustQueen” K.',
    text: 'Nach einer Session waren meine CT-Rotations viel cleaner. Die Utility-Overlays haben Gold wert.',
    rating: 5,
  },
  {
    name: 'Max “Entry” H.',
    text: 'Wir haben ein komplettes B-Exec Playbook für Mirage gebaut. Seitdem +15% Winrate in Faceit.',
    rating: 5,
  },
  {
    name: 'Team Valkyrie',
    text: 'Coach hat Rollen klar definiert und die Midround Calls streamlined. Scrims fühlen sich strukturiert an.',
    rating: 4,
  },
];

function App() {
  const [theme, setTheme] = useState('aurora');
  const palette = useMemo(() => themes[theme], [theme]);

  useEffect(() => {
    Object.entries(palette).forEach(([token, value]) => {
      document.documentElement.style.setProperty(`--${token}`, value);
    });
  }, [palette]);

  return (
    <div className="app">
      <div className="noise" aria-hidden />
      <div className="gradient" aria-hidden />
      <header className="nav">
        <div className="logo">CS2 Pro Coaching</div>
        <div className="theme-switcher" role="group" aria-label="Farbschema wählen">
          {Object.entries(themes).map(([id, option]) => (
            <button
              key={id}
              className={`theme-button ${theme === id ? 'active' : ''}`}
              onClick={() => setTheme(id)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
        <a href="#booking" className="ghost-button">
          Termin sichern
        </a>
      </header>

      <main className="content">
        <section className="hero">
          <div className="pill">Individuelle CS2 Sessions · EU</div>
          <h1>
            Präzision, Game Sense, <span className="accent">Confidence.</span>
          </h1>
          <p className="lede">
            Wöchentliche Coaching Slots für Spieler & Teams, die mehr als Aim-Maps wollen. Wir verbinden
            Pro-Strats mit klaren Drills und liefern dir einen umsetzbaren Plan.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#booking">
              Termin buchen
            </a>
            <a className="secondary" href="#plans">
              Pakete ansehen
            </a>
          </div>
          <div className="status-row">
            <span className="dot" />
            <span>Nächste freien Slots: Freitag & Sonntag</span>
          </div>
        </section>

        <section className="perk-grid" aria-label="Coaching Vorteile">
          {perks.map((perk) => (
            <div key={perk} className="perk-card">
              <span className="perk-dot" />
              <p>{perk}</p>
            </div>
          ))}
        </section>

        <section id="plans" className="plans">
          <div className="section-header">
            <p className="eyebrow">Pakete & Vorteile</p>
            <h2>Wähle dein Coaching Setup</h2>
            <p className="subtext">
              Alle Sessions enthalten individuelle Roadmaps, Notion-Checklisten und Video-Aufzeichnungen.
            </p>
          </div>
          <div className="cards">
            {plans.map((plan) => (
              <article key={plan.name} className={`card ${plan.highlight ? 'highlight' : ''}`}>
                <div className="card-top">
                  <h3>{plan.name}</h3>
                  <p className="price">{plan.price}</p>
                </div>
                <p className="description">{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="cta" href="#booking">
                  Termin anfragen
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews" aria-label="Kundenstimmen">
          <div className="section-header">
            <p className="eyebrow">Happy Players</p>
            <h2>Feedback aus der Community</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article key={review.name} className="review-card">
                <div className="stars" aria-label={`${review.rating} Sterne`}>
                  {'★'.repeat(review.rating)}
                </div>
                <p className="quote">“{review.text}”</p>
                <p className="author">{review.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="booking" className="booking">
          <div className="booking-inner">
            <div>
              <p className="eyebrow">Termin buchen</p>
              <h2>Dein Slot in 60 Sekunden</h2>
              <p className="subtext">
                Fülle das Formular, wähle dein Paket und wir bestätigen deinen Termin per Discord oder Mail.
              </p>
              <ul className="booking-list">
                <li>Discord Screen-Share oder Demo Review</li>
                <li>Check-in Sheet & Trainingsplan nach dem Call</li>
                <li>Optional: Team-Session mit 5 Stack</li>
              </ul>
            </div>
            <form className="booking-form">
              <label>
                Dein Name
                <input type="text" name="name" placeholder="Alex" />
              </label>
              <label>
                Discord / E-Mail
                <input type="text" name="contact" placeholder="@nickname oder mail" />
              </label>
              <label>
                Wunschpaket
                <select name="plan">
                  {plans.map((plan) => (
                    <option key={plan.name}>{plan.name}</option>
                  ))}
                </select>
              </label>
              <label>
                Terminpräferenz
                <input type="text" name="date" placeholder="z.B. Sonntag 19:00 CET" />
              </label>
              <button type="submit">Termin sichern</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 CS2 Pro Coaching · Discord: coach.gg/cs2</p>
        <p className="footer-links">FAQ · AGB · Impressum</p>
      </footer>
    </div>
  );
}

export default App;

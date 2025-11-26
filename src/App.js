import './App.css';

const packages = [
  {
    title: 'Aim & Mechanik',
    description:
      'Crosshair-Placement, Movement und Utility-Lines: sauber, wiederholbar, messbar.',
    focus: 'Kurze Drills, Szenarien und Warmups, die zu deinem Profil passen.',
    time: '60 Minuten'
  },
  {
    title: 'Game Sense & Mid-Round',
    description:
      'Reads, Win-Conditions und klare Mid-Calls, damit dein Team sofort weiß, was zu tun ist.',
    focus: 'Demo-Breakdowns, Live-Scrims und einfache Entscheidungsbäume.',
    time: '90 Minuten'
  },
  {
    title: 'Team Systeme',
    description:
      'Rollen, Utility-Protokolle, Practice-Struktur und Feedback-Loops für konstante Fortschritte.',
    focus: 'VOD-Reviews für das ganze Team plus Templates für eure Playbooks.',
    time: '2 Stunden'
  }
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="brand">CS2 Coaching von mir</div>
        <p className="eyebrow">Sessions, die zu deinem Spielstil passen</p>
        <h1>Smarter spielen, stabiler traden, sicherer finishen.</h1>
        <p className="lede">
          Ich coache Counter-Strike 2 Spieler:innen, die klare, wiederholbare Abläufe wollen. Wir
          verbinden Server-Zeit, VOD-Review und fokussierte Drills, damit jede Entscheidung sitzt.
        </p>
        <div className="hero-actions">
          <a className="primary" href="#book">Termin anfragen</a>
          <a className="ghost" href="#packages">Pakete ansehen</a>
        </div>
        <div className="metrics">
          <div className="metric">
            <span className="metric-number">2.000+</span>
            <span className="metric-label">Coaching-Stunden in FPS</span>
          </div>
          <div className="metric">
            <span className="metric-number">Top 0,5 %</span>
            <span className="metric-label">Peak-Rank in CS2</span>
          </div>
          <div className="metric">
            <span className="metric-number">Action-first</span>
            <span className="metric-label">Klare To-Dos nach jedem Call</span>
          </div>
        </div>
      </header>

      <main>
        <section className="card-grid" id="packages">
          {packages.map((pkg) => (
            <article key={pkg.title} className="card">
              <div className="card-top">
                <p className="eyebrow">Coaching-Paket</p>
                <h2>{pkg.title}</h2>
                <p className="card-copy">{pkg.description}</p>
              </div>
              <div className="card-bottom">
                <p className="detail"><strong>Fokus:</strong> {pkg.focus}</p>
                <p className="detail"><strong>Dauer:</strong> {pkg.time}</p>
                <a className="secondary" href="#book">Dieses Paket buchen</a>
              </div>
            </article>
          ))}
        </section>

        <section className="strip">
          <div className="strip-text">
            <p className="eyebrow">Ablauf</p>
            <h3>Coaching, das zu deinem Playstyle passt.</h3>
            <ul className="list">
              <li>Kurzer Vorab-Check, damit wir die richtigen Baustellen priorisieren.</li>
              <li>Live-Server für Mechanik, dazu Demo-Reviews für klare Entscheidungen.</li>
              <li>Einfache Routinen, die du solo oder mit dem Team zwischen Sessions nutzen kannst.</li>
            </ul>
          </div>
          <div className="strip-card">
            <div className="step">
              <span className="step-number">01</span>
              <div>
                <h4>Analyse</h4>
                <p>Rollen, Demos und Ziele teilen, damit ich gezielt vorbereiten kann.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">02</span>
              <div>
                <h4>Session</h4>
                <p>Server, VODs, Scrims – wir machen das, was dich am schnellsten voranbringt.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">03</span>
              <div>
                <h4>Action Plan</h4>
                <p>Drills, Utility-Lineups und ein klarer Übungsplan für die nächsten Wochen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="book">
          <div>
            <p className="eyebrow">Termin buchen</p>
            <h3>Bereit für spürbare Fortschritte in den nächsten 10 Matches?</h3>
            <p className="lede">
              Schick mir Rolle, Rank und Ziele. Ich bestätige einen Termin und schicke dir eine kurze Vorbereitung, damit wir direkt loslegen.
            </p>
          </div>
          <div className="cta-actions">
            <a className="primary" href="mailto:coach@cs2.example">Per E-Mail anfragen</a>
            <a className="ghost" href="https://discord.gg" target="_blank" rel="noreferrer">
              Direkt auf Discord
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

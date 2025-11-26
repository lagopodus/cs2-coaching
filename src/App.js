import './App.css';

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

const curriculum = [
  {
    title: 'Warmup & Mechanics',
    detail: 'Crosshair Placement, Counter-Strafing, Prefire-Drills, High-Tempo Routines.',
  },
  {
    title: 'Utility Lab',
    detail: 'Lineup Library für Mirage, Anubis & Inferno inkl. Run-Boosts und Refrag-Plays.',
  },
  {
    title: 'Midround & Calling',
    detail: 'Win-Conditions erkennen, Tempo Shifts callen, klare Winlose-Kriterien kommunizieren.',
  },
  {
    title: 'Post-Review & Plan',
    detail: 'VoD Review, individuelle Drillsheet, Check-ins nach 7 Tagen und frische Scrim-Notes.',
  },
];

const faqs = [
  {
    question: 'Kann ich solo oder mit Team buchen?',
    answer: 'Beides. Solo-Sessions sind 1:1, Team-Bootcamps sind auf bis zu 5 Spieler ausgelegt.',
  },
  {
    question: 'Welche Sprachen?',
    answer: 'Deutsch oder Englisch – je nachdem, was für dich und dein Team komfortabler ist.',
  },
  {
    question: 'Was bekomme ich nach dem Call?',
    answer: 'Notion-Roadmap, personalisierte Drills, Recap-Video und 30 Tage Discord-Support.',
  },
];

function App() {
  return (
    <div className="app">
      <div className="noise" aria-hidden />
      <div className="gradient" aria-hidden />
      <header className="nav">
        <div className="logo">CS2 Pro Coaching</div>
        <nav className="nav-links" aria-label="Navigation">
          <a href="#plans">Pakete</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#reviews">Reviews</a>
          <a href="#booking">Termin</a>
        </nav>
        <div className="nav-actions">
          <div className="nav-pill">Dust2 · Mirage · Anubis</div>
          <a href="#booking" className="ghost-button">
            Termin sichern
          </a>
        </div>
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
          <div className="stat-grid" aria-label="Highlights">
            <div className="stat-card">
              <p className="stat-number">+18%</p>
              <p className="stat-label">Team Winrate nach 4 Wochen</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">120+</p>
              <p className="stat-label">Lineups in deiner persönlichen Library</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">24h</p>
              <p className="stat-label">Feedback & Recap Lieferung</p>
            </div>
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

        <section id="curriculum" className="curriculum">
          <div className="section-header">
            <p className="eyebrow">Ablauf</p>
            <h2>Dein CS2 Curriculum</h2>
            <p className="subtext">
              Von Aim bis Midround Calling – wir arbeiten strukturiert, messbar und mit klaren Drills.
            </p>
          </div>
          <div className="curriculum-grid">
            {curriculum.map((block) => (
              <article key={block.title} className="curriculum-card">
                <h3>{block.title}</h3>
                <p>{block.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="reviews" aria-label="Kundenstimmen">
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

        <section className="faq">
          <div className="section-header">
            <p className="eyebrow">FAQ</p>
            <h2>Antworten vor deinem Termin</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
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

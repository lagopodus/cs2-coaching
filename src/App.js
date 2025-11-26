import './App.css';

const abonnements = [
  {
    name: 'Sprint',
    price: '129 € / Woche',
    duration: '1x 75-Minuten-Session',
    perks: [
      'Fokus auf ein Thema: Aim, Mid-Round oder Mental',
      'Hausaufgaben als PDF, damit du weißt, was zu üben ist',
      'Kurzes Review per DM nach 3 Tagen'
    ],
    tone: 'Ideal, wenn du schnell einen Engpass knacken willst.'
  },
  {
    name: 'Grind',
    price: '289 € / Monat',
    duration: 'wöchentlich 90 Minuten',
    perks: [
      'VOD-Review + Live-Server in jeder Einheit',
      'Lineup-Bibliothek mit deinen Lieblingsnades',
      'Mini-Playbook (3-4 Setups) fürs Team'
    ],
    tone: 'Für ambitionierte Matchmaking-Helden mit Team-Vibes.'
  },
  {
    name: 'Bootcamp',
    price: '599 € / 6 Wochen',
    duration: '2 Sessions pro Woche',
    perks: [
      'Scrim-Begleitung und klare Mid-Round-Calls',
      'Individuelle Drills als Server-Config',
      'Humorvoller, aber ehrlicher Leistungsreport zum Abschluss'
    ],
    tone: 'Du willst Legende werden und lachst auch mal über einen whiff.'
  }
];

const themen = [
  'Crosshair-Placement ohne Roboter-Aim',
  'Utility, die dein Team tatsächlich wirft',
  'Win-Conditions verstehen statt YOLO-Peeks',
  'Economy-Management (ja, auch mal einen Deagle-Buy ausreden)',
  'Kommunikation, die nicht nach Funkloch klingt'
];

const testimonials = [
  {
    name: 'Lena “sprayqueen” K.',
    role: 'Faceit 4 → 6 in 5 Wochen',
    rating: '★★★★★',
    quote:
      'Er hat meinen Jiggle-Peek zerstört und gleichzeitig meinen Gamesense gerettet. 10/10, würde wieder prefiren.'
  },
  {
    name: 'Tim "der IGL" R.',
    role: 'Open-Teamspeak-Coach-Enjoyer',
    rating: '★★★★☆',
    quote:
      'Endlich ein Plan, den auch meine Rush-B-Steffen verstehen. Bonuspunkt: Seine Mid-Round-Callouts haben Namen wie „Operation Kartoffel“.'
  },
  {
    name: 'Maya “smokelord” P.',
    role: 'Support, aber lustig',
    rating: '★★★★☆',
    quote:
      'Habe mehr Molotovs geworfen als Witze – und das soll was heißen. Utility sitzt jetzt, Timing auch. Humor inklusive.'
  }
];

const faq = [
  {
    question: 'Brauche ich ein bestimmtes Skill-Level?',
    answer:
      'Nein. Ob Gold Nova oder bereits Ancient, wir starten da, wo du stehst, und bauen einen Plan, der realistisch ist.'
  },
  {
    question: 'Coachst du ganze Teams?',
    answer:
      'Ja, im Paket "Bootcamp" sind Team-Sessions eingeplant. Für größere Roster machen wir einen kurzen Bedarfscall.'
  },
  {
    question: 'Muss ich etwas vorbereiten?',
    answer:
      'Eine Demo oder zwei Matches als Aufzeichnung helfen. Ansonsten: offenes Mikro, neugieriger Geist, Kaffee optional.'
  },
  {
    question: 'Gibt es Aufzeichnungen?',
    answer:
      'Auf Wunsch schicke ich dir eine Kurz-Zusammenfassung mit den wichtigsten Timecodes und Drills.'
  }
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="brand">CS2 Coaching von mir</div>
        <p className="eyebrow">Taktisch, menschlich, ein bisschen frech</p>
        <h1>Präziser aimen, smarter callen, weniger Tilt.</h1>
        <p className="lede">
          Ich helfe dir, dein Counter-Strike 2 Gameplay auf stabile Füße zu stellen – ohne sinnlose Grind-Marathons.
          Wir kombinieren Live-Server, VOD-Review und klare Hausaufgaben. Ergebnis: du weißt, was du trainierst und
          warum.
        </p>
        <div className="hero-actions">
          <a className="primary" href="#book">Termin anfragen</a>
          <a className="ghost" href="#programme">Programme anschauen</a>
        </div>
        <div className="hero-footnote">
          <span>Top 0,5 % Peak-Rank</span>
          <span>2000+ Coaching-Stunden</span>
          <span>Action-Plan nach jeder Session</span>
        </div>
      </header>

      <main>
        <section className="section" id="programme">
          <div className="section-header">
            <p className="eyebrow">Abos & Pakete</p>
            <h2>Wähle ein Coaching, das zu deinem Alltag passt.</h2>
            <p className="section-lede">
              Klar strukturierte Optionen mit Preisen, damit du direkt buchen kannst. Kein Mystery-Box-Coaching, sondern
              transparente Leistungen.
            </p>
          </div>

          <div className="plans">
            {abonnements.map((abo) => (
              <article key={abo.name} className="plan">
                <div className="plan-top">
                  <div className="plan-name">{abo.name}</div>
                  <div className="plan-price">{abo.price}</div>
                  <p className="muted">{abo.duration}</p>
                  <p className="plan-tone">{abo.tone}</p>
                </div>
                <ul className="plan-list">
                  {abo.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <a className="secondary" href="#book">
                  Jetzt {abo.name} buchen
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section focus">
          <div>
            <p className="eyebrow">Fokus-Themen</p>
            <h3>Wir arbeiten an den Baustellen, die wirklich Elo bringen.</h3>
            <p className="section-lede">
              Keine PowerPoint-Schlachten. Wir springen direkt in Situationen, in denen du häufig Fehler machst, und
              bauen dir simple, wiederholbare Abläufe.
            </p>
            <ul className="pill-list">
              {themen.map((topic) => (
                <li key={topic} className="pill">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="session-outline">
            <h4>So sieht eine Session aus</h4>
            <ol>
              <li>Kurzer Check-in: Ziele, Map, Rolle.</li>
              <li>Live-Server oder Demo: Situationen nachspielen, Lösungen testen.</li>
              <li>Zusammenfassung: 3-5 klare Aufgaben, die du umsetzen kannst.</li>
            </ol>
            <p className="muted">Und ja, wir lachen auch über misslungene Sprays. Passiert den Besten.</p>
          </div>
        </section>

        <section className="section reviews">
          <div className="section-header">
            <p className="eyebrow">Feedback</p>
            <h2>Spieler:innen, die schon gecoacht wurden</h2>
            <p className="section-lede">
              Fake? Natürlich. Mit Sternchen versehen, damit sich die Seite wie ein echtes Kursangebot liest.
            </p>
          </div>
          <div className="review-list">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="review">
                <div className="review-head">
                  <span className="reviewer">{item.name}</span>
                  <span className="stars" aria-label={`${item.rating} Sterne`}>
                    {item.rating}
                  </span>
                </div>
                <p className="quote">“{item.quote}”</p>
                <footer>
                  <span className="muted">{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section timeline">
          <div className="section-header">
            <p className="eyebrow">Ablauf</p>
            <h2>Vom ersten Call bis zum nächsten Win-Streak.</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="step-number">01</span>
              <div>
                <h4>Kickoff</h4>
                <p className="muted">Kurzer Call, wir definieren Ziele und priorisieren Maps und Rollen.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">02</span>
              <div>
                <h4>Session</h4>
                <p className="muted">Live-Server, Demo-Review oder Scrim – je nachdem, was dich schneller macht.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">03</span>
              <div>
                <h4>Action-Plan</h4>
                <p className="muted">3-5 To-Dos, Drills und ggf. Utility-Lineups als Video oder PDF.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">04</span>
              <div>
                <h4>Follow-up</h4>
                <p className="muted">DM-Check nach ein paar Tagen. Wenn etwas nicht klappt, fixen wir es.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq">
          <div className="section-header">
            <p className="eyebrow">FAQ</p>
            <h2>Die häufigsten Fragen – kurz und ehrlich.</h2>
          </div>
          <div className="faq-grid">
            {faq.map((item) => (
              <div key={item.question} className="faq-item">
                <h4>{item.question}</h4>
                <p className="muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta" id="book">
          <div>
            <p className="eyebrow">Termin buchen</p>
            <h3>Bereit für bessere Entscheidungen in deinen nächsten 10 Matches?</h3>
            <p className="lede">
              Schreib mir deine Rolle, dein aktuelles Rank und was dir am meisten wehtut. Ich melde mich mit einem Termin
              und einem kleinen Warmup-Plan.
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

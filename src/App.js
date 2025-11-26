import './App.css';

const packages = [
  {
    title: 'Aim & Mechanics',
    description:
      'Tighten crosshair placement, movement, and utility lineups so your fundamentals feel automatic.',
    focus: 'Micro drills, scenario reviews, and tailored warmups.',
    time: '60 minutes'
  },
  {
    title: 'Game Sense & Mid-Rounding',
    description:
      'Learn to read the map, identify win conditions, and adapt on the fly with clear, simple calls.',
    focus: 'Demo breakdowns, live scrims, and decision-tree mapping.',
    time: '90 minutes'
  },
  {
    title: 'Team Systems',
    description:
      'Plug coaching into your stack: roles, utility protocols, practice structure, and feedback loops.',
    focus: 'Full team VOD reviews and custom playbook templates.',
    time: '2 hours'
  }
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="brand">CS2 Coaching by You</div>
        <p className="eyebrow">Personal sessions tailored to how you actually play</p>
        <h1>Out-think, out-trade, and out-clutch—consistently.</h1>
        <p className="lede">
          I coach Counter-Strike 2 players who want practical, repeatable habits. We\'ll combine live
          scrims, VOD review, and focused drills so every decision you make has intent.
        </p>
        <div className="hero-actions">
          <a className="primary" href="#book">Book a session</a>
          <a className="ghost" href="#packages">View coaching packages</a>
        </div>
        <div className="metrics">
          <div className="metric">
            <span className="metric-number">2,000+</span>
            <span className="metric-label">Hours coaching shooters</span>
          </div>
          <div className="metric">
            <span className="metric-number">Top 0.5%</span>
            <span className="metric-label">Peak CS2 rank</span>
          </div>
          <div className="metric">
            <span className="metric-number">Action-first</span>
            <span className="metric-label">Clear homework after every call</span>
          </div>
        </div>
      </header>

      <main>
        <section className="card-grid" id="packages">
          {packages.map((pkg) => (
            <article key={pkg.title} className="card">
              <div className="card-top">
                <p className="eyebrow">Coaching track</p>
                <h2>{pkg.title}</h2>
                <p className="card-copy">{pkg.description}</p>
              </div>
              <div className="card-bottom">
                <p className="detail"><strong>Focus:</strong> {pkg.focus}</p>
                <p className="detail"><strong>Duration:</strong> {pkg.time}</p>
                <a className="secondary" href="#book">Book this track</a>
              </div>
            </article>
          ))}
        </section>

        <section className="strip">
          <div className="strip-text">
            <p className="eyebrow">How we work</p>
            <h3>Get coaching that fits your playstyle—not someone else\'s.</h3>
            <ul className="list">
              <li>Pre-call form so we focus on the exact problems hurting your games.</li>
              <li>Live server time for mechanics, plus demo reviews to tune decision-making.</li>
              <li>Simple routines you can run solo or with your stack between sessions.</li>
            </ul>
          </div>
          <div className="strip-card">
            <div className="step">
              <span className="step-number">01</span>
              <div>
                <h4>Assessment</h4>
                <p>Share roles, recent demos, and goals so I can prep targeted drills.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">02</span>
              <div>
                <h4>Session</h4>
                <p>We hop in: mechanics, VODs, scrims—whatever gets you confident fast.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">03</span>
              <div>
                <h4>Action plan</h4>
                <p>You leave with drills, utility lineups, and a practice schedule.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="book">
          <div>
            <p className="eyebrow">Book a slot</p>
            <h3>Ready to see progress in your next 10 matches?</h3>
            <p className="lede">
              Tell me your role, rank, and goals. I\'ll confirm a time and send a small prep checklist so we can dive straight in.
            </p>
          </div>
          <div className="cta-actions">
            <a className="primary" href="mailto:coach@cs2.example">Email to book</a>
            <a className="ghost" href="https://discord.gg" target="_blank" rel="noreferrer">
              DM on Discord
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

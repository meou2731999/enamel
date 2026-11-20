import Script from "next/script";

export default function Home() {
  return (
    <>
      <header className="nav">
        <a className="brand" href="#top" aria-label="ENAMEL Orthodontics home">
          ENAMEL<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#treatments">Treatments</a>
          <a href="#visit">First visit</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button nav-button" href="#consultation">
          Consultation
        </a>
      </header>
      <main id="top">
        <section
          className="portal"
          aria-label="ENAMEL Orthodontics introduction"
        >
          <div id="portal-open" aria-hidden="true"></div>
          <div className="stage">
            <img
              className="hero-image"
              src="/glass-jaw.jpg"
              alt="Transparent cast-glass dental arches, lit in amber and teal"
            />
            <div className="wash"></div>
            <div className="veil"></div>
            <div className="panel left"></div>
            <div className="panel right"></div>
            <div className="portal-axis" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="corner top-left">
              <b className="signal"></b> Orthodontic care
            </div>
            <div className="corner top-right">
              Braces · Clear aligners
              <br />
              Teens &amp; adults
            </div>
            <div className="dot amber"></div>
            <div className="dot teal"></div>
            <h1 className="portal-title" aria-label="ENAMEL Orthodontics">
              <span>ENA</span>
              <span>MEL</span>
            </h1>
            <a className="corner bottom-left scroll-link" href="#portal-open">
              <span className="scroll-line"></span> Scroll to open
            </a>
            <div className="corner bottom-right">
              ENAMEL
              <br />
              Orthodontics
            </div>
          </div>
        </section>
        <section className="statement section" id="statement">
          <div className="section-inner reveal">
            <p className="eyebrow">
              <span>01</span> / Our approach
            </p>
            <h2>
              Orthodontic care <em>built around you.</em>
            </h2>
            <p className="body-copy">
              Your first visit starts with a conversation about your teeth, your
              bite and what you’d like to change. We’ll explain your options and
              what each could involve.
            </p>
          </div>
          <div className="statement-art" aria-hidden="true">
            <img src="/glass-jaw.jpg" alt="" />
          </div>
          <span className="index" aria-hidden="true">
            01
          </span>
        </section>
        <section className="releases section" id="treatments">
          <div className="section-inner release-grid">
            <div className="reveal">
              <p className="eyebrow">
                <span>02</span> / Treatments
              </p>
              <h2>
                Find your
                <br />
                treatment<span className="accent">.</span>
              </h2>
              <p className="body-copy">
                Explore braces, clear aligners and retainers, and see where each
                fits in your orthodontic care.
              </p>
              <div className="actions">
                <a className="button" href="#treatment-details">
                  Compare options
                </a>
                <a className="button" href="#visit">
                  Plan your first visit
                </a>
              </div>
            </div>
            <div className="deck-wrap">
              <div
                className="deck"
                tabIndex="0"
                role="region"
                aria-label="Treatment cards. Use left and right arrow keys to browse"
                aria-describedby="deck-hint"
              >
                <article className="sleeve sleeve-one">
                  <div className="cover"></div>
                  <div className="sleeve-copy">
                    <span>01 / Fixed appliance</span>
                    <strong>Braces</strong>
                  </div>
                </article>
                <article className="sleeve sleeve-two">
                  <div className="cover"></div>
                  <div className="sleeve-copy">
                    <span>02 / Removable appliance</span>
                    <strong>Clear Aligners</strong>
                  </div>
                </article>
                <article className="sleeve sleeve-three">
                  <div className="cover"></div>
                  <div className="sleeve-copy">
                    <span>03 / After active treatment</span>
                    <strong>Retainers</strong>
                  </div>
                </article>
              </div>
              <div className="deck-controls">
                <button
                  type="button"
                  className="deck-arrow"
                  data-step="-1"
                  aria-label="Previous treatment"
                >
                  ←
                </button>
                <div>
                  <p id="deck-hint">Drag or use arrow keys</p>
                  <div className="progress" aria-label="Choose treatment"></div>
                  <span className="sr-only" role="status"></span>
                </div>
                <button
                  type="button"
                  className="deck-arrow"
                  data-step="1"
                  aria-label="Next treatment"
                >
                  →
                </button>
              </div>
            </div>
            <div id="treatment-details" className="catalogue">
              <details>
                <summary>
                  <span>01</span> Braces
                </summary>
                <p>
                  Fixed brackets and wires that your orthodontist adjusts as
                  treatment progresses.
                </p>
              </details>
              <details>
                <summary>
                  <span>02</span> Clear Aligners
                </summary>
                <p>
                  A series of removable trays made to fit your teeth. Your
                  orthodontist can assess whether aligners suit your bite and
                  treatment goals.
                </p>
              </details>
              <details>
                <summary>
                  <span>03</span> Retainers
                </summary>
                <p>
                  Custom appliances that help maintain tooth position after
                  active orthodontic treatment.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="section roster" id="visit">
          <div className="section-inner">
            <p className="eyebrow reveal">
              <span>03</span> / Your first visit
            </p>
            <h2 className="reveal">
              What to expect<span className="accent">.</span>
            </h2>
            <ol className="artist-list visit-list">
              <li>
                <span>01 / Conversation</span>
                <strong>Tell us your goals</strong>
                <small>Questions &amp; dental history</small>
              </li>
              <li>
                <span>02 / Assessment</span>
                <strong>Review your teeth and bite</strong>
                <small>Exam &amp; records as needed</small>
              </li>
              <li>
                <span>03 / Next steps</span>
                <strong>Discuss a treatment plan</strong>
                <small>Options, timing &amp; costs</small>
              </li>
            </ol>
          </div>
        </section>
        <section className="section dates" id="faq">
          <div className="section-inner">
            <p className="eyebrow reveal">
              <span>04</span> / Common questions
            </p>
            <h2 className="reveal">
              Before you visit<span className="accent">.</span>
            </h2>
            <div className="catalogue faq-list">
              <details>
                <summary>
                  Can I ask about both braces and clear aligners?
                </summary>
                <p>
                  Yes. Share your preferences during the consultation so your
                  orthodontist can explain which approaches may suit your teeth
                  and bite.
                </p>
              </details>
              <details>
                <summary>What should I bring to my first visit?</summary>
                <p>
                  Bring any dental records you already have and a list of
                  questions, concerns or goals you’d like to discuss.
                </p>
              </details>
              <details>
                <summary>
                  When will I know how long treatment could take?
                </summary>
                <p>
                  Ask for an estimate after your assessment. Your orthodontist
                  can explain what may affect the timeline for your case.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <footer className="close section" id="consultation">
        <div className="section-inner close-top">
          <div>
            <p className="eyebrow">
              <span>05</span> / Consultation
            </p>
            <h2>
              Start with a conversation<span className="accent">.</span>
            </h2>
            <p className="body-copy">
              Bring your questions about treatment options, timing and costs to
              your first consultation.
            </p>
          </div>
          <div className="actions">
            <a className="button" href="#visit">
              What to expect
            </a>
            <a className="button" href="#top">
              Back to top
            </a>
          </div>
        </div>
        <div className="footer-strip">
          <span>ENAMEL / Orthodontics</span>
          <span>Orthodontic clinic concept</span>
        </div>
        <div className="footer-mark" aria-hidden="true">
          ENAMEL<span>.</span>
        </div>
      </footer>
      <Script src="/site.js" strategy="afterInteractive" />
    </>
  );
}

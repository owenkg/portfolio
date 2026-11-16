const projects = [
  {
    index: "01",
    title: "RTV QA Infrastructure",
    description:
      "End-to-end QA automation for a 5-system NGO field platform — 1,200+ tests, 4 CI/CD pipelines, sprint-based release cycles across web, mobile, and API.",
    tags: ["Cypress", "PHPUnit", "GitHub Actions"],
    link: "https://github.com/owenkg",
  },
  {
    index: "02",
    title: "Spenditure",
    description:
      "A personal finance PWA for tracking income and expenses, built as a Remix + NestJS monorepo with SQLite.",
    tags: ["Remix", "NestJS", "SQLite"],
    link: "https://github.com/owenkg/spenditure",
  },
  {
    index: "03",
    title: "AgriPredict",
    description:
      "A React Native mobile app providing real-time market price predictions for smallholder farmers using a Flask ML backend.",
    tags: ["React Native", "Flask", "Python"],
    link: "https://github.com/owenkg",
  },
  {
    index: "04",
    title: "BaseGuard",
    description:
      "A tiered security management system with real-time location tracking and payroll automation, Dockerised on Google Cloud Platform.",
    tags: ["Docker", "Django", "GCP"],
    link: "https://github.com/owenkg",
  },
];

const skills = [
  {
    id: "01",
    label: "Test Automation",
    items: ["Cypress", "Jest", "PHPUnit", "Selenium", "Patrol", "Mockito"],
  },
  {
    id: "02",
    label: "CI/CD & Quality",
    items: [
      "GitHub Actions",
      "Trivy",
      "Qodana",
      "Shorebird OTA",
      "Conventional Commits",
    ],
  },
  {
    id: "03",
    label: "Languages & Stack",
    items: [
      "TypeScript",
      "PHP / Laravel",
      "Python",
      "Flutter / Dart",
      "React",
      "Node.js",
    ],
  },
];

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Hidden SVG filters used by role-stamp and focus-stamp */}
      <svg className="svg-filters" aria-hidden="true">
        <defs>
          <filter id="stamp-distress" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.065"
              numOctaves="4"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.4"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* ─── NAV ─── */}
      <header className="hero grain">
        <nav className="nav shell">
          <a href="/" className="monogram label" aria-label="George Kivumbi">
            GK
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="availability label">
            <span className="status-dot" aria-hidden="true" />
            Open to remote QA roles
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <div className="hero-content shell">
          <aside className="hero-index" aria-hidden="true">
            <span className="label">George Kivumbi</span>
            <div className="index-line" />
            <span className="label">SDET</span>
          </aside>

          <div>
            <div className="hero-title-wrap">
              <div className="hero-title-block">
                <p className="eyebrow label">Hello, I'm</p>
                <h1 className="hero-title">
                  George
                  <br />
                  <span>Kivumbi.</span>
                </h1>
              </div>

              {/* Newspaper cutout portrait — hidden on mobile via CSS */}
              <div className="hero-portrait-wrap" aria-hidden="true">
                <img
                  src="portfolio_photo_clean.png"
                  alt="George Kivumbi"
                  width="600"
                  height="600"
                />
              </div>
            </div>

            <div className="hero-bottom">
              <div
                className="role-stamp label"
                role="presentation"
                aria-label="SDET based in Mbarara, Uganda"
              >
                SDET
                <br />
                <span>Mbarara, Uganda</span>
              </div>
              <p className="hero-intro">
                I build test automation infrastructure and quality systems for
                teams shipping software that matters across East Africa.
              </p>
            </div>
          </div>
        </div>

      </header>

      {/* ─── WORK ─── */}
      <section id="work" className="page-section">
        <div className="section-inner">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true" />
            <span className="label">Selected work</span>
          </div>

          <div className="section-heading-row">
            <h2>Projects that ship quality.</h2>
            <p>
              Four years building QA infrastructure for systems used by field
              teams, farmers, and security operations across Uganda.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((p) => (
              <article key={p.index} className="project-card">
                <div className="project-top">
                  <span className="label">{p.index}</span>
                  <span className="project-mark" aria-hidden="true">
                    ✦
                  </span>
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
                <div className="project-bottom">
                  <ul aria-label="Technologies">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="arrow-link"
                    aria-label={`View ${p.title} on GitHub`}
                  >
                    View project <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="page-section">
        <div className="section-inner">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true" />
            <span className="label">About me</span>
          </div>

          <div className="about-grid">
            <div className="portrait-mark" role="presentation" aria-hidden="true">
              <span>GK</span>
              <small>Est. 2021</small>
            </div>

            <div className="about-copy">
              <blockquote>
                "Quality is not what you add at the end — it's the{" "}
                <em>architecture</em> you commit to from the first line."
              </blockquote>

              <div className="about-detail">
                <div
                  className="focus-stamp label"
                  role="presentation"
                  aria-label="Currently focused on remote QA and SDET roles"
                >
                  <span>Currently focused on</span>
                  Remote QA &amp;
                  <br />
                  SDET Roles
                </div>

                <p>
                  I'm an SDET based in Mbarara, Uganda, working at the
                  intersection of test automation and software delivery. Over
                  the past four years I've built QA pipelines from scratch,
                  owned UAT programmes across four systems, and authored the
                  testing standards used by my engineering team. I care about
                  software that actually works in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="page-section">
        <div className="section-inner">
          <div className="stack-heading">
            <h2>The tools I use to ship quality.</h2>
            <p>
              A focused stack built over four years of real QA work — not
              tutorials.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.id} className="skill-group">
                <div className="skill-label label">
                  <span aria-hidden="true">{group.id}</span>
                  {group.label}
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="page-section contact-section">
        <div className="section-inner">
          <div className="contact-content">
            <span className="contact-label label">
              Looking for a remote QA engineer?
            </span>
            <h2>
              Let's build something
              <br />
              <span>that actually works.</span>
            </h2>
            <a href="mailto:owenkg1@outlook.com" className="email-link label">
              owenkg1@outlook.com <span aria-hidden="true">→</span>
            </a>

            <div className="contact-meta">
              <div className="contact-meta-left">
                <p>Mbarara, Uganda · EAT (UTC+3)</p>
                <p className="sdet-full">Software Development Engineer in Test</p>
              </div>
              <div className="contact-meta-right">
                <a
                  href="george-kivumbi-sdet-resume.pdf"
                  download="George Kivumbi - SDET Resume 2026.pdf"
                  className="resume-download label"
                  aria-label="Download George Kivumbi's SDET resume"
                >
                  Download résumé <span aria-hidden="true">↓</span>
                </a>
                <nav className="social-links label" aria-label="Social links">
                  <a
                    href="https://github.com/owenkg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/george-owen-kivumbi-17985616b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-inner shell">
          <p>© {year} George Kivumbi. Built with intention.</p>
          <p>SDET · Mbarara, Uganda</p>
        </div>
      </footer>
    </>
  );
}

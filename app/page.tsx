export default function Home() {
  return (
      <div>
        <nav className="navbar">
          <a href="#" className="navbar-logo">eshaan.singh</a>
          <ul className="navbar-links">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="mailto:eshaan.singh09@gmail.com">Contact</a></li>
          </ul>
        </nav>

        <div className="content">
          <div className="hero">
            <h1>Eshaan <span>Singh</span></h1>
            <p className="hero-sub">Software Engineer &nbsp;·&nbsp; Bellevue, WA</p>
            <div className="hero-links">
              <a href="https://github.com/TrimStream" target="_blank" rel="noopener">GitHub</a>
              <a href="https://linkedin.com/in/eshaan-singh-72306021a" target="_blank" rel="noopener">LinkedIn</a>
              <a href="mailto:eshaan.singh09@gmail.com">Email</a>
            </div>
          </div>

          <section className="section" id="projects">
            <div className="section-label">Projects</div>

            <div className="project">
              <div className="project-name">FinSight</div>
              <p className="project-desc">
                Financial data platform built with Go and Python. Ingests real stock market data, stores it in PostgreSQL, and lets users query it in plain English using Gemini AI. The ingestion pipeline uses goroutines to parallelize API calls across tickers — chosen over Python for its concurrency model.
              </p>
              <div className="project-footer">
                <div className="tags">
                  <span className="tag">Go</span>
                  <span className="tag">Python</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">React</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Gemini</span>
                </div>
                <div className="project-links">
                  <a className="link-primary" href="https://eshaan-finsight.vercel.app" target="_blank" rel="noopener">Live</a>
                  <a href="https://github.com/TrimStream/FinSight" target="_blank" rel="noopener">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="project-name">MarketMind</div>
              <p className="project-desc">
                AI marketing content generator. Input a brand brief, get consumer personas, SWOT analysis, and marketing copy — with structured JSON output parsing via Gemini to keep responses reliable and consistent.
              </p>
              <div className="project-footer">
                <div className="tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Gemini</span>
                  <span className="tag">Tailwind</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/TrimStream/MarketMind" target="_blank" rel="noopener">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="project-name">TrainingARK</div>
              <p className="project-desc">
                Visual scenario builder for a 4-player card game. Manages state across 24 simultaneously tracked zones in real time, with a shared, stack-based resolution system and step-based scenario recording. Built primarily through daily collaboration with an AI coding agent, reviewing and rewriting every generated change.
              </p>
              <div className="project-footer">
                <div className="tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">React</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Zustand</span>
                  <span className="tag">Prisma</span>
                  <span className="tag">Supabase</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/TrimStream/TrainingARK" target="_blank" rel="noopener">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="project-name">Mod the Agents</div>
              <p className="project-desc">
                Real-time multi-agent debate platform built for the Cerebras x Google DeepMind Gemma 4 Hackathon. Four agents with distinct perspectives contest any input in parallel, streamed live over SSE with token batching, plus a mid-debate human injection flow feeding a synthesis agent for a final verdict.
              </p>
              <div className="project-footer">
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Vite</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Express</span>
                  <span className="tag">Cerebras</span>
                </div>
                <div className="project-links">
                  <a className="link-primary" href="https://mod-the-agents-front.onrender.com" target="_blank" rel="noopener">Live</a>
                  <a href="https://github.com/TrimStream/mod-the-agents" target="_blank" rel="noopener">GitHub</a>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="skills">
            <div className="section-label">Skills</div>
            <div className="skills-grid">
              <div>
                <div className="skill-label">Frontend</div>
                <div className="skill-items">React, Next.js, Vite, TypeScript, JavaScript, HTML/CSS, Tailwind, Zustand, Recharts</div>
              </div>
              <div>
                <div className="skill-label">Backend</div>
                <div className="skill-items">Python, Go, FastAPI, Django, Node.js, Express, REST APIs</div>
              </div>
              <div>
                <div className="skill-label">Databases</div>
                <div className="skill-items">PostgreSQL, Supabase, SQL, MongoDB</div>
              </div>
              <div>
                <div className="skill-label">Tools</div>
                <div className="skill-items">Docker, Git, CI/CD, GitHub Actions, Linux, Claude Code</div>
              </div>
              <div>
                <div className="skill-label">AI / ML</div>
                <div className="skill-items">Google Gemini, Cerebras, HuggingFace, LLM Integration</div>
              </div>
            </div>
          </section>

          <footer className="footer">
            <p>© 2026 Eshaan Singh</p>
            <a href="mailto:eshaan.singh09@gmail.com">eshaan.singh09@gmail.com</a>
          </footer>
        </div>
      </div>
  );
}

'use client';

import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="navbar-logo">ES</a>
        <ul className="navbar-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="mailto:eshaan.singh09@gmail.com">Contact</a></li>
        </ul>
      </nav>
      <section className="hero">
        <div className="hero-badge">
          ✦ Available for full-time roles
        </div>
        <h1>Eshaan Singh</h1>
        <div className="hero-typing">
          <TypeAnimation
            sequence={[
              'AI Engineer',
              2000,
              'Full-Stack Developer',
              2000,
              'Data Pipeline Builder',
              2000,
              'CS Graduate @ WSU',
              2000,
            ]}
            repeat={Infinity}
            speed={50}
          />
        </div>
        <p className="hero-description">
          Building AI-powered applications with expertise in generative AI,
          real-time data pipelines, and full-stack development.
        </p>
        <div className="hero-links">
          <a href="https://github.com/TrimStream" target="_blank" className="hero-link primary">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/eshaan-singh-72306021a/" target="_blank" className="hero-link secondary">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
          <a href="mailto:eshaan.singh09@gmail.com" className="hero-link secondary">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
            </svg>
            Contact
          </a>
        </div>
      </section>
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <p className="section-label">What I have built</p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A selection of projects that demonstrate my technical range across AI, data pipelines, and full-stack development.</p>
          </div>
          <div className="projects-grid">

            <div className="project-card orange">
              <p className="project-number">01</p>
              <h3 className="project-title">FinSight</h3>
              <p className="project-subtitle">AI-Powered Financial Intelligence Platform</p>
              <p className="project-description">
                Full-stack financial platform built in Go, Python, and TypeScript. Ingests real stock market data from Alpha Vantage, stores 100 days of price history in PostgreSQL, and lets users query it using plain English powered by Google Gemini AI. Features a dark trading terminal UI with interactive area charts.
              </p>
              <div className="tech-tags">
                <span className="tech-tag orange">Go</span>
                <span className="tech-tag orange">Python</span>
                <span className="tech-tag orange">TypeScript</span>
                <span className="tech-tag orange">PostgreSQL</span>
                <span className="tech-tag orange">Gemini AI</span>
                <span className="tech-tag orange">React</span>
              </div>
              <a href="https://github.com/TrimStream/FinSight" target="_blank" className="project-link">
                View on GitHub →
              </a>
            </div>

            <div className="project-card blue">
              <p className="project-number">02</p>
              <h3 className="project-title">MarketMind</h3>
              <p className="project-subtitle">AI-Powered Consumer Insight Generator</p>
              <p className="project-description">
                Full-stack AI tool that generates consumer personas, SWOT analyses, and marketing copy using the OpenAI API with chain-of-thought prompt engineering and structured JSON output parsing. Features a FastAPI backend with async endpoints and a modular React dashboard.
              </p>
              <div className="tech-tags">
                <span className="tech-tag blue">Next.js</span>
                <span className="tech-tag blue">TypeScript</span>
                <span className="tech-tag blue">Python</span>
                <span className="tech-tag blue">FastAPI</span>
                <span className="tech-tag blue">OpenAI API</span>
                <span className="tech-tag blue">React</span>
              </div>
              <a href="https://github.com/TrimStream/MarketMind" target="_blank" className="project-link">
                View on GitHub →
              </a>
            </div>

            <div className="project-card green">
              <p className="project-number">03</p>
              <h3 className="project-title">SentiPulse</h3>
              <p className="project-subtitle">Real-Time Social Sentiment Tracker</p>
              <p className="project-description">
                Real-time data pipeline that continuously ingests social media data via the Reddit API, runs it through a HuggingFace transformer model, and surfaces live sentiment scores and trending keywords. Features a live-updating React frontend with WebSockets.
              </p>
              <div className="tech-tags">
                <span className="tech-tag green">Python</span>
                <span className="tech-tag green">FastAPI</span>
                <span className="tech-tag green">React</span>
                <span className="tech-tag green">TypeScript</span>
                <span className="tech-tag green">HuggingFace</span>
                <span className="tech-tag green">WebSockets</span>
              </div>
              <a href="https://github.com/TrimStream/SentiPulse" target="_blank" className="project-link">
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-alt" id="skills">
        <div className="container">
          <div className="section-header">
            <p className="section-label">What I work with</p>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Technologies I have used to build real production projects.</p>
          </div>
          <div className="skills-grid">

            <div className="skill-category">
              <div className="skill-category-icon">⌨️</div>
              <h3>Languages</h3>
              <div className="skill-tags">
                {['Python', 'TypeScript', 'JavaScript', 'Go', 'Java', 'SQL', 'HTML/CSS', 'C++'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-category-icon">⚙️</div>
              <h3>Frameworks & Tools</h3>
              <div className="skill-tags">
                {['React.js', 'Next.js', 'FastAPI', 'Node.js', 'Django', 'REST APIs', 'WebSockets', 'PostgreSQL', 'Docker'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-category-icon">🤖</div>
              <h3>AI & ML</h3>
              <div className="skill-tags">
                {['OpenAI API', 'Google Gemini', 'HuggingFace', 'Prompt Engineering', 'LLM Integration', 'RAG'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-category-icon">☁️</div>
              <h3>Practices</h3>
              <div className="skill-tags">
                {['Agile', 'CI/CD', 'Git', 'REST API Design', 'Microservices', 'Data Pipelines'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      <footer className="footer">
        <p>© 2026 Eshaan Singh · Built with <a href="https://nextjs.org" target="_blank">Next.js</a> · <a href="https://github.com/TrimStream" target="_blank">GitHub</a></p>
      </footer>

    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Eshaan Singh</h1>
        <p className="subtitle">Computer Science Student | AI & Full-Stack Developer</p>
        <p className="description">
          Building AI-powered applications with expertise in generative AI, real-time data pipelines, and full-stack development.
          Graduating May 2026 from Washington State University.
        </p>
        <div className="hero-links">
          <a href="https://github.com/TrimStream" target="_blank">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://linkedin.com/in/eshaansingh" target="_blank">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:eshaan.singh@wsu.edu">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            Contact
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          
          <div className="projects-grid">
            {/* MarketMind */}
            <div className="project-card blue">
              <h3>MarketMind</h3>
              <p className="subtitle">AI-Powered Consumer Insight Generator</p>
              <p className="description">
                Full-stack AI tool that generates consumer personas, SWOT analyses, and marketing copy using the OpenAI API with 
                chain-of-thought prompt engineering and structured JSON output parsing. Features a FastAPI backend with async endpoints 
                and a modular React dashboard for visualizing AI outputs.
              </p>
              <div className="tech-tags">
                <span className="tech-tag blue">Next.js</span>
                <span className="tech-tag blue">TypeScript</span>
                <span className="tech-tag blue">Python</span>
                <span className="tech-tag blue">FastAPI</span>
                <span className="tech-tag blue">OpenAI API</span>
                <span className="tech-tag blue">React</span>
              </div>
              <a href="https://github.com/TrimStream/MarketMind" target="_blank">
                View on GitHub →
              </a>
            </div>

            {/* SentiPulse */}
            <div className="project-card green">
              <h3>SentiPulse</h3>
              <p className="subtitle">Real-Time Social Sentiment Tracker</p>
              <p className="description">
                Real-time data pipeline that continuously ingests social media data via the Reddit API, runs it through a HuggingFace 
                transformer model, and surfaces live sentiment scores and trending keywords. Features a live-updating React frontend 
                with WebSockets showing real-time charts and color-coded post feeds.
              </p>
              <div className="tech-tags">
                <span className="tech-tag green">Python</span>
                <span className="tech-tag green">FastAPI</span>
                <span className="tech-tag green">React</span>
                <span className="tech-tag green">TypeScript</span>
                <span className="tech-tag green">HuggingFace</span>
                <span className="tech-tag green">WebSockets</span>
              </div>
              <a href="https://github.com/TrimStream/SentiPulse" target="_blank">
                View on GitHub →
              </a>
            </div>

            {/* ClubHub */}
            <div className="project-card purple">
              <h3>ClubHub</h3>
              <p className="subtitle">Web App for College Club Management</p>
              <p className="description">
                Full-stack web application with club registration, event notifications, and multi-role analytics dashboards. 
                Managed everything from architecture through Docker deployment independently.
              </p>
              <div className="tech-tags">
                <span className="tech-tag purple">Next.js</span>
                <span className="tech-tag purple">TypeScript</span>
                <span className="tech-tag purple">React</span>
                <span className="tech-tag purple">Django</span>
                <span className="tech-tag purple">PostgreSQL</span>
                <span className="tech-tag purple">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <p>Python, TypeScript, JavaScript, Java, SQL, HTML/CSS, C++</p>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Tools</h3>
              <p>React.js, Next.js, Node.js, FastAPI, Django, REST APIs, WebSockets, PostgreSQL, Docker, Git</p>
            </div>
            <div className="skill-category">
              <h3>AI & ML</h3>
              <p>OpenAI API, HuggingFace Transformers, Prompt Engineering, LLM Integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Eshaan Singh. Built with Next.js.</p>
      </footer>
    </div>
  );
}
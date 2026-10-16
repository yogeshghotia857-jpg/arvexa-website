function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-dot"></span>
          DIGITAL SOLUTIONS AGENCY
        </div>

        <h1>
          We Build
          <br />
          <span className="gradient-text">Digital</span> Experiences.
        </h1>

        <p className="hero-description">
          We design and develop modern websites that help businesses
          stand out, connect with customers, and grow online.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Start Your Project ↗
          </a>

          <a href="#projects" className="btn-secondary">
            Explore Our Work →
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>Creative</h3>
            <p>Modern Design</p>
          </div>

          <div>
            <h3>Responsive</h3>
            <p>Every Screen</p>
          </div>

          <div>
            <h3>Scalable</h3>
            <p>Built for Growth</p>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="glow-orb"></div>

        <div className="floating-card card-top">
          <span>✦</span> Creative Design
        </div>

        <div className="dashboard-card">
          <div className="dashboard-top">
            <div className="window-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <span>ARVEXA STUDIO</span>
          </div>

          <div className="dashboard-body">
            <div className="dashboard-label">YOUR DIGITAL FUTURE</div>

            <h2>
              Ideas into
              <br />
              <span>Reality.</span>
            </h2>

            <div className="dashboard-line"></div>

            <div className="dashboard-bottom">
              <div>
                <strong>Design</strong>
                <small>Creative UI</small>
              </div>

              <div>
                <strong>Develop</strong>
                <small>Modern Web</small>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-card card-bottom">
          <span>↗</span> Built for Growth
        </div>
      </div>
    </section>
  );
}

export default Hero;
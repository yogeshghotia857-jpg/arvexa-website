import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  Palette,
  Rocket,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-dot"></span>
          YOUR DIGITAL GROWTH PARTNER
        </div>

        <h1>
          We Build
          <br />
          <span className="gradient-text">
            Digital Experiences
          </span>
          <br />
          That Move You Forward.
        </h1>

        <p className="hero-description">
          From standout websites to powerful digital strategies,
          Arvexa helps your business build its online presence,
          reach more people, and grow with confidence.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Start Your Project
            <ArrowUpRight size={18} />
          </a>

          <a href="#projects" className="btn-secondary">
            Explore Our Work
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <span className="stat-number">01</span>
            <h3>Design</h3>
            <p>Made to stand out</p>
          </div>

          <div>
            <span className="stat-number">02</span>
            <h3>Development</h3>
            <p>Built for performance</p>
          </div>

          <div>
            <span className="stat-number">03</span>
            <h3>Growth</h3>
            <p>Ready for the future</p>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-glow"></div>

        <div className="floating-card card-top">
          <span className="floating-icon">
            <Sparkles size={17} />
          </span>
          <div>
            <strong>Creative Thinking</strong>
            <small>Ideas into experiences</small>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-top">
            <div className="window-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>

            <span>ARVEXA / DIGITAL STUDIO</span>
          </div>

          <div className="dashboard-body">
            <div className="dashboard-label">
              <span className="status-dot"></span>
              DESIGN × TECHNOLOGY
            </div>

            <h2>
              Ideas Into
              <br />
              <span>Impact.</span>
            </h2>

            <p className="dashboard-description">
              Digital solutions designed around your vision
              and built to move your business forward.
            </p>

            <div className="dashboard-line"></div>

            <div className="dashboard-bottom">
              <div>
                <span className="dashboard-icon">
                  <Palette size={17} />
                </span>
                <strong>Design</strong>
                <small>Thoughtful UI/UX</small>
              </div>

              <div>
                <span className="dashboard-icon">
                  <Code2 size={17} />
                </span>
                <strong>Develop</strong>
                <small>Modern websites</small>
              </div>
            </div>

            <div className="dashboard-footer">
              <span>BUILT WITH PURPOSE</span>
              <Rocket size={16} />
            </div>
          </div>
        </div>

        <div className="floating-card card-bottom">
          <span className="status-dot"></span>
          <div>
            <strong>Built for What's Next</strong>
            <small>Let's create something great</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
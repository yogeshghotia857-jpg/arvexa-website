function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="logo">
            ARVEXA<span>.</span>
          </a>

          <p>
            Building meaningful digital experiences for businesses
            ready to grow.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>

        <div className="footer-links">
          <h4>Get Started</h4>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Arvexa. All rights reserved.
        </p>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
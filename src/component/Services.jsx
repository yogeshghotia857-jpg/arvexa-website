const services = [
  {
    icon: "✦",
    title: "Website Development",
    description:
      "Modern, responsive websites designed for your business.",
  },
  {
    icon: "◈",
    title: "E-commerce Websites",
    description:
      "Online stores with attractive product pages and shopping experiences.",
  },
  {
    icon: "⬡",
    title: "UI/UX Design",
    description:
      "Clean, user-friendly interfaces for websites and applications.",
  },
  {
    icon: "⌘",
    title: "Web Applications",
    description:
      "Interactive applications tailored to your business requirements.",
  },
  {
    icon: "✧",
    title: "AI Integration",
    description:
      "AI-powered features for smarter digital experiences.",
  },
  {
    icon: "↗",
    title: "Website Maintenance",
    description:
      "Website updates, bug fixes, and ongoing improvements.",
  },
];

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <span className="section-badge">OUR SERVICES</span>

        <h2>
          Digital solutions.
          <br />
          <span className="gradient-text">Unlimited possibilities.</span>
        </h2>

        <p>
          We combine design and technology to help businesses
          build a strong digital presence.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact" className="service-link">
              Discuss Your Project ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
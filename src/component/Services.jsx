import {
  Globe,
  Code2,
  Palette,
  Search,
  Smartphone,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, modern and responsive websites designed to turn visitors into customers.",
    tags: ["Business Websites", "Landing Pages", "React"],
  },
  {
    number: "02",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, intuitive and premium digital experiences that make your brand stand out.",
    tags: ["Web Design", "User Experience", "Prototyping"],
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Seamless experiences across mobile phones, tablets, laptops and desktops.",
    tags: ["Mobile First", "Responsive UI", "Performance"],
  },
  {
    number: "04",
    icon: Search,
    title: "SEO Optimization",
    description:
      "Build a stronger search presence with technical SEO, metadata and search-friendly pages.",
    tags: ["On-Page SEO", "Technical SEO", "Metadata"],
  },
  {
    number: "05",
    icon: Code2,
    title: "Web Applications",
    description:
      "Custom web solutions built around your business needs and future growth.",
    tags: ["React Apps", "Dashboards", "Integrations"],
  },
  {
    number: "06",
    icon: Rocket,
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern, polished and conversion-focused experiences.",
    tags: ["Modernization", "UX Improvement", "Speed"],
  },
];

function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="section-heading">
          <div className="section-eyebrow">
            <span className="status-dot"></span>
            WHAT WE DO
          </div>

          <h2>
            Digital solutions
            <br />
            <span className="gradient-text">built for growth.</span>
          </h2>

          <p>
            From your first website to a complete digital experience,
            we help transform your ideas into meaningful online solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="service-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  className="service-link"
                  href="#contact"
                  aria-label={`Discuss ${service.title}`}
                >
                  Discuss your project
                  <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="services-bottom">
          <p>
            Have a different idea in mind? Let's build something around it.
          </p>

          <a href="#contact" className="btn-primary">
            Let's Talk <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
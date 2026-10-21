import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Palette,
  ShoppingBag,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Business Website",
    description:
      "A modern online presence designed to showcase services and help businesses connect with potential customers.",
    type: "Business",
    icon: Code2,
    className: "project-purple",
    tags: ["React", "Responsive UI", "Modern Design"],
  },
  {
    number: "02",
    category: "UI/UX DESIGN",
    title: "Creative Brand Experience",
    description:
      "A clean, visually engaging digital experience focused on brand identity, usability and elegant layouts.",
    type: "Creative",
    icon: Palette,
    className: "project-blue",
    tags: ["UI/UX", "Branding", "Web Design"],
  },
  {
    number: "03",
    category: "E-COMMERCE",
    title: "Online Store Concept",
    description:
      "A product-focused storefront concept designed to make product discovery and online shopping feel effortless.",
    type: "E-Commerce",
    icon: ShoppingBag,
    className: "project-pink",
    tags: ["E-Commerce", "Product UI", "Mobile First"],
  },
];

function Projects() {
  return (
    <section className="projects section-padding" id="projects">
      <div className="container">
        <div className="section-heading projects-heading">
          <div className="section-eyebrow">
            <span className="status-dot"></span>
            SELECTED WORK
          </div>

          <h2>
            Ideas turned into
            <br />
            <span className="gradient-text">digital experiences.</span>
          </h2>

          <p>
            Explore the kinds of digital experiences Arvexa can create
            for businesses, brands and growing ideas.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article className="project-card" key={project.number}>
                <div className={`project-preview ${project.className}`}>
                  <div className="project-preview-top">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <span className="project-number">
                      {project.number}
                    </span>
                  </div>

                  <div className="project-artwork">
                    <div className="project-artwork-glow"></div>

                    <div className="project-mockup">
                      <div className="mockup-topbar">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="mockup-content">
                        <div className="mockup-icon">
                          <Icon size={28} strokeWidth={1.5} />
                        </div>

                        <div className="mockup-line mockup-line-long"></div>
                        <div className="mockup-line mockup-line-short"></div>

                        <div className="mockup-button">
                          Explore <ArrowUpRight size={13} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="project-preview-footer">
                    <span>{project.type}</span>
                    <span>ARVEXA STUDIO ↗</span>
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-info-title">
                    <h3>{project.title}</h3>

                    <span className="project-external-icon">
                      <ExternalLink size={18} />
                    </span>
                  </div>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects-cta">
          <div>
            <span className="section-eyebrow">HAVE A PROJECT IN MIND?</span>
            <h3>Let's create something great together.</h3>
          </div>

          <a href="#contact" className="btn-primary">
            Discuss Your Project <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
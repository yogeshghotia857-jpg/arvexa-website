const projects = [
  {
    title: "Business Website",
    category: "WEB DEVELOPMENT",
    description: "A professional website for a modern business.",
    style: "project-purple",
  },
  {
    title: "Online Store",
    category: "E-COMMERCE",
    description: "A modern storefront with a clean shopping experience.",
    style: "project-blue",
  },
  {
    title: "Salon Booking",
    category: "WEB APPLICATION",
    description: "A booking interface for salon services.",
    style: "project-pink",
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <span className="section-badge">OUR PORTFOLIO</span>

        <h2>
          Ideas brought
          <br />
          <span className="gradient-text">to life.</span>
        </h2>

        <p>
          Explore examples of the digital experiences we can create.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className={`project-preview ${project.style}`}>
              <span className="project-category">{project.category}</span>

              <div className="project-art">
                <span>ARVEXA</span>
                <h3>Design.</h3>
                <h3>Build.</h3>
                <h3>Grow.</h3>
              </div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-note">Demo concept</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

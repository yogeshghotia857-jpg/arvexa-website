const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your goals and project requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "We plan the layout and visual experience.",
  },
  {
    number: "03",
    title: "Develop",
    description: "We build and test your responsive website.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We prepare your website for deployment.",
  },
];

function Process() {
  return (
    <section className="section process-section" id="about">
      <div className="section-heading">
        <span className="section-badge">OUR PROCESS</span>

        <h2>
          From idea
          <br />
          <span className="gradient-text">to launch.</span>
        </h2>

        <p>A simple process to turn your vision into a digital product.</p>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <article className="process-card" key={step.number}>
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Process;
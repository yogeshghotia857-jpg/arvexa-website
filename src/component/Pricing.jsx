const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    description: "For individuals and small businesses.",
    features: [
      "Single-page website",
      "Responsive design",
      "Contact section",
      "Basic SEO setup",
    ],
  },
  {
    name: "Business",
    price: "₹7,999",
    description: "For growing businesses.",
    features: [
      "Up to 5 pages",
      "Custom design",
      "Mobile-friendly layout",
      "Contact form integration",
      "Basic SEO setup",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹14,999",
    description: "For advanced requirements.",
    features: [
      "Up to 8 pages",
      "Advanced UI design",
      "Interactive features",
      "Performance optimization",
      "Deployment assistance",
    ],
  },
];

function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-heading">
        <span className="section-badge">OUR PRICING</span>

        <h2>
          Plans for
          <br />
          <span className="gradient-text">every ambition.</span>
        </h2>

        <p>
          Choose a starting package for your project.
          Final pricing depends on your requirements.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <article
            className={`pricing-card ${plan.popular ? "featured-plan" : ""}`}
            key={plan.name}
          >
            {plan.popular && (
              <span className="popular-badge">POPULAR</span>
            )}

            <h3>{plan.name}</h3>
            <p className="pricing-description">{plan.description}</p>

            <div className="pricing-price">
              {plan.price}
              <span> starting</span>
            </div>

            <a href="#contact" className="pricing-button">
              Get a Quote ↗
            </a>

            <div className="pricing-divider"></div>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span>✓</span> {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="pricing-note">
        Prices are indicative. Domain, hosting, and additional features
        may cost extra.
      </p>
    </section>
  );
}

export default Pricing;
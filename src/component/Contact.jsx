import { useState } from "react";

const BUSINESS = {
  name: "ARVEXA",
  email: "yogeshdeveloper02@gmail.com",
  whatsapp: "916376610702",
  phone: "+917425050702",
  instagram: "https://www.instagram.com/arvexa.in/",
  location: "Hanumangarh, Rajasthan, India",
};

const SERVICES = [
  "Website Development",
  "E-commerce Website",
  "Web Application Development",
  "UI/UX Design",
  "Digital Marketing",
  "AI Integration",
  "Website Maintenance",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function validateForm() {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.service ||
      !formData.message.trim()
    ) {
      setError("Please fill in all required fields.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    setError("");
    return true;
  }

  function handleWhatsApp() {
    if (!validateForm()) return;

    const message = `
Hello Arvexa! I want to discuss a project.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Service: ${formData.service}
Budget: ${formData.budget || "Not decided"}

Project Details:
${formData.message}
    `.trim();

    const url =
      `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleEmail() {
    if (!validateForm()) return;

    const subject = encodeURIComponent(
      "New Website Project Inquiry"
    );

    const body = encodeURIComponent(`
Hello Arvexa,

I would like to discuss a project.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Service: ${formData.service}
Budget: ${formData.budget || "Not decided"}

Project Details:
${formData.message}
    `.trim());

    window.location.href =
      `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT: BUSINESS INFORMATION */}

        <div className="contact-content">
          <span className="section-badge">
            LET'S CONNECT
          </span>

          <h2>
            Let's Build
            <br />
            <span className="gradient-text">
              Something Great.
            </span>
          </h2>

          <p>
            Have a business idea or need a professional website?
            Tell us about your project. Let's create something
            meaningful together.
          </p>

          <div className="contact-details">

            <a
              href={`mailto:${BUSINESS.email}`}
              className="contact-detail"
            >
              <span>✉</span>

              <div>
                <small>Email Us</small>
                <p>{BUSINESS.email}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              className="contact-detail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>☏</span>

              <div>
                <small>WhatsApp</small>
                <p>+91 63766 10702</p>
              </div>
            </a>

            <a
              href={`tel:${BUSINESS.phone}`}
              className="contact-detail"
            >
              <span>↗</span>

              <div>
                <small>Call Us</small>
                <p>+91 74250 50702</p>
              </div>
            </a>

            <a
              href={BUSINESS.instagram}
              className="contact-detail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>◎</span>

              <div>
                <small>Instagram</small>
                <p>@arvexa.in</p>
              </div>
            </a>

            <div className="contact-detail">
              <span>⌖</span>

              <div>
                <small>Location</small>
                <p>{BUSINESS.location}</p>
              </div>
            </div>

          </div>

          <div className="contact-tagline">
            Turning Ideas Into Digital Experiences.
          </div>
        </div>

        {/* RIGHT: PROJECT INQUIRY FORM */}

        <form
          className="contact-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <h3>Start Your Project</h3>

          <p>
            Fill in your details and choose how you want to contact us.
          </p>

          <label htmlFor="contact-name">
            Full Name *
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <label htmlFor="contact-email">
            Email Address *
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label htmlFor="contact-phone">
            Phone Number (Optional)
          </label>

          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />

          <label htmlFor="contact-service">
            Service Required *
          </label>

          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a service
            </option>

            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          <label htmlFor="contact-budget">
            Estimated Budget
          </label>

          <select
            id="contact-budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">Select your budget</option>
            <option value="Under ₹5,000">Under ₹5,000</option>
            <option value="₹5,000 - ₹10,000">
              ₹5,000 - ₹10,000
            </option>
            <option value="₹10,000 - ₹25,000">
              ₹10,000 - ₹25,000
            </option>
            <option value="₹25,000+">₹25,000+</option>
            <option value="Not decided">Not decided</option>
          </select>

          <label htmlFor="contact-message">
            Project Details *
          </label>

          <textarea
            id="contact-message"
            name="message"
            rows="4"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          {error && (
            <p className="contact-error" role="alert">
              {error}
            </p>
          )}

          <div className="contact-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={handleWhatsApp}
            >
              WhatsApp Inquiry ↗
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={handleEmail}
            >
              Send Email ✉
            </button>
          </div>

          <small className="contact-privacy">
            Your inquiry will open in WhatsApp or your default email app.
          </small>
        </form>
      </div>
    </section>
  );
}

export default Contact;
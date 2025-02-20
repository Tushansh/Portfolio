import { useState } from "react";
import "../styles/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required!");
      return;
    }
    setError("");
    window.location.href = `mailto:tbb1242@gmail.com?subject=Contact&body=${form.message}`;
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Get in Touch</h2>
        <p>If you have any questions or opportunities, feel free to reach out!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {error && <p className="error">{error}</p>}
          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

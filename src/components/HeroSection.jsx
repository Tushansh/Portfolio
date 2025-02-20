import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const textToType = "AI/ML & Full Stack Engineer";
  const typingSpeed = 100;
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < textToType.length) {
        setTypedText(textToType.substring(0, i + 1)); // Correct substring method
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []); // Run only once on mount

  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Tushansh Bajaj</h1>
        <h3 className="hero-text">
          {typedText}
          <span className="cursor">|</span>
        </h3>
        <p className="hero-subtext">
          Passionate AI/ML enthusiast and full-stack developer with expertise in modern web technologies and Artificial Intelligence.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn btn-alt">Contact Me</a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

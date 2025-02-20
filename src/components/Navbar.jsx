import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <ul>
        <li>
          <a href="#hero" className={activeSection === "hero" ? "active" : ""}>Home</a>
        </li>
        <li>
          <a href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
        </li>
        <li>
          <a href="#experience" className={activeSection === "experience" ? "active" : ""}>Experience</a>
        </li>
        <li>
          <a href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a>
        </li>
        <li>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a>
        </li>
        <li>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

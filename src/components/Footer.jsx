import "../styles/Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Tushansh Bajaj</h3>
        <p>Full Stack Developer | AI/ML Enthusiast</p>
        <div className="footer-socials">
          <a href="http://www.linkedin.com/in/tushansh-bajaj-393169309" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Tushansh" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:tbb1242@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <p className="footer-copyright">
        © {new Date().getFullYear()} Tushansh Bajaj. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

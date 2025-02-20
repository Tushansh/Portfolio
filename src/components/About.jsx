import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          I am a passionate <strong>Full Stack Developer</strong> and <strong>AI/ML Enthusiast</strong> with a strong foundation in software engineering. 
          I specialize in building intelligent applications that merge modern web technologies with artificial intelligence.
        </p>
        <p>
          With expertise in <strong>React.js, Next.js, Python, and Machine Learning</strong>, I have developed projects in chatbot development, 
          budget analysis tools, and full-stack web applications. I thrive on creating innovative, efficient, and scalable solutions.
        </p>
        <p>
          Beyond coding, I actively contribute to <strong>open-source projects</strong> and stay updated with the latest trends in AI and software development. 
          My goal is to develop technology that enhances everyday life while continuously evolving as a developer.
        </p>
      </motion.div>
    </section>
  );
};

export default About;

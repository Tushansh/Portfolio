import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Budget Manager",
    description:
      "A machine-learning-based budget management tool developed during an IBM in-house internship. Features include anomaly detection, expense prediction, and financial data visualization for efficient money management.",
    tech: ["Python", "Machine Learning", "Financial Analysis", "Data Visualization"],
    link: "https://github.com/Tushansh/Budget-Manager",
  },
  {
    title: "Chatbot Using IBM Watson",
    description:
      "Developed an AI-powered chatbot using IBM Watson Assistant, handling automated customer queries efficiently. Integrated with Python to enhance query processing, enabling a seamless user experience.",
    tech: ["Python", "IBM Watson", "NLP", "AI Chatbot"],
    link: "#",
  },
  {
    title: "GT-ChatBot",
    description:
      "An AI-powered chatbot with email/password authentication, dark/light mode, and a modern UI featuring glassmorphism effects. Integrated with an interactive chatbot preview and a responsive authentication system.",
    tech: ["React.js", "JavaScript", "API", "Authentication"],
    link: "https://gt-chatbot.netlify.app/",
  },
  {
    title: "PokéBook",
    description:
      "A Pokémon data explorer built with React.js and the PokéAPI. Features include real-time search, dynamic UI updates, and an interactive design for Pokémon enthusiasts to explore detailed stats.",
    tech: ["React.js", "REST API", "JavaScript", "Dynamic UI"],
    link: "https://tushansh.github.io/PokeeBook/index.html",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "A deep-learning-based tool that analyzes resumes, providing real-time feedback on structure, readability, and skill relevance. Uses NLP and AI-driven scoring to optimize job applications.",
    tech: ["Deep Learning", "NLP", "Flask", "TensorFlow"],
    link: "#",
  },
  {
    title: "Personalized News Recommender",
    description:
      "Developed a machine-learning-powered news recommender system that curates personalized articles based on user interests, behavior, and reading history.",
    tech: ["Python", "Machine Learning", "NLP", "Flask"],
    link: "#",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    arrows: true,
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-slider-container">
        <Slider {...settings} className="project-slider">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;

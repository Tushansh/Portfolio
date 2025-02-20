import { motion } from "framer-motion";
import "../styles/Experience.css";

const experiences = [
  {
    title: "AI Intern",
    company: "AICTE",
    duration: "Feb 2025 - Present",
    achievements: [
      "Worked on AI-based research projects",
      "Developed NLP-based automation tools",
      "Implemented deep learning models for automation",
    ],
  },
  {
    title: "Student Coordinator",
    company: "Tech Mahindra Job Fair",
    duration: "September 2024",
    achievements: [
      "Managed 500+ attendees efficiently",
      "Coordinated with team members for smooth recruitment",
      "Enhanced stakeholder communication across teams",
    ],
  },
  {
    title: "Coordinator",
    company: "Training & Placement Cell, ADGIPS",
    duration: "October 2024",
    achievements: [
      "Facilitated placement drives with HR representatives",
      "Managed student databases and interview schedules",
      "Handled high-pressure situations professionally",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="duration">{exp.duration}</p>
              <ul className="achievements">
                {exp.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

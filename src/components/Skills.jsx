import "../styles/Skills.css";
import { motion } from "framer-motion";
import { FaBrain, FaLaptopCode, FaCogs, FaUserTie } from "react-icons/fa";

const technicalSkills = [
  { name: "Machine Learning", level: 90 },
  { name: "Deep Learning", level: 85 },
  { name: "Natural Language Processing", level: 80 },
  { name: "Computer Vision", level: 75 },
  { name: "React.js & Next.js", level: 90 },
  { name: "Node.js & Express", level: 85 },
  { name: "Python & JavaScript", level: 95 },
  { name: "SQL & MongoDB", level: 80 },
  { name: "Cloud Computing (AWS)", level: 70 },
];

const softSkills = [
  { name: "Problem Solving", level: 95 },
  { name: "Teamwork & Collaboration", level: 90 },
  { name: "Leadership", level: 85 },
  { name: "Adaptability", level: 90 },
  { name: "Time Management", level: 80 },
  { name: "Effective Communication", level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      {/* Technical Skills Section */}
      <div className="skills-category">
        <h3><FaLaptopCode className="icon" /> Technical Skills</h3>
        <div className="skills-list">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill">
              <p>{skill.name}</p>
              <motion.div
                className="skill-bar"
                initial={{ width: "0%" }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ background: "#00ff8895" }}
              ></motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="skills-category">
        <h3><FaUserTie className="icon" /> Soft Skills</h3>
        <div className="skills-list">
          {softSkills.map((skill, index) => (
            <div key={index} className="skill">
              <p>{skill.name}</p>
              <motion.div
                className="skill-bar"
                initial={{ width: "0%" }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ background: "#00ccffac" }}
              ></motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

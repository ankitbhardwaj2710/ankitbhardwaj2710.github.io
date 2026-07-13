import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Dart", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["Flutter", "React.js"],
  },
  {
    title: "Database & Backend",
    skills: ["Firebase", "Firestore", "Authentication", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
  },
];

const marqueeSkills = [
  "FLUTTER",
  "DART",
  "REACT.JS",
  "JAVASCRIPT",
  "FIREBASE",
  "RESPONSIVE DESIGN",
  "REST APIs",
  "GIT",
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="skills-marquee">
        <motion.div
          className="marquee-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <div className="marquee-item" key={`${skill}-${index}`}>
              <span>{skill}</span>
              <i>✦</i>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-number">02</span>

          <div>
            <p className="section-eyebrow">TECH STACK</p>
            <h2>
              Tools I use to turn
              <span> ideas into products.</span>
            </h2>
          </div>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-group"
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="skill-group-number">
                0{index + 1}
              </div>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
import { motion } from "framer-motion";
import { Code2, Smartphone, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    number: "01",
    title: "Mobile Development",
    description:
      "Building polished cross-platform applications with Flutter, Firebase and thoughtful user experiences.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Frontend Development",
    description:
      "Creating responsive and interactive web interfaces using React, JavaScript and modern frontend practices.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Design Mindset",
    description:
      "Turning ideas into clean, intuitive interfaces with attention to usability, motion and visual detail.",
  },
];

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-number">01</span>

          <div>
            <p className="section-eyebrow">ABOUT ME</p>
            <h2>
              Building digital experiences
              <span> that feel as good as they look.</span>
            </h2>
          </div>
        </motion.div>

        <div className="about-layout">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-lead">
              I'm Ankit, a developer focused on creating modern mobile and web
              experiences.
            </p>

            <p>
              I'm currently pursuing a B.Tech in Computer Science Engineering
              with a specialization in AI & ML. My work primarily revolves
              around Flutter and frontend development, where I enjoy combining
              clean interfaces with practical engineering.
            </p>

            <p>
              From building civic-tech applications during Smart India
              Hackathon to developing mobile apps and interactive frontend
              projects, I enjoy taking an idea from concept to a working
              experience.
            </p>

            <div className="about-meta">
              <div>
                <span>Based in</span>
                <strong>Haryana, India</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Mobile & Frontend</strong>
              </div>

              <div>
                <span>Education</span>
                <strong>B.Tech CSE (AI & ML)</strong>
              </div>
            </div>
          </motion.div>

          <div className="about-cards">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="about-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -7 }}
                >
                  <div className="about-card-top">
                    <div className="about-icon">
                      <Icon size={21} />
                    </div>

                    <span>{item.number}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
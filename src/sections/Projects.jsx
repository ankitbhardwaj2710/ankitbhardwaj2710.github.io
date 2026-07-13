import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-container">
        <motion.div
          className="section-heading projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-number">03</span>

          <div>
            <p className="section-eyebrow">SELECTED WORK</p>

            <h2>
              Projects built with
              <span> purpose & curiosity.</span>
            </h2>
          </div>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
            >
              <div className="project-visual">
                <div className="project-visual-glow" />

                <motion.img
                  src={project.image}
                  alt={`${project.title} project`}
                  whileHover={{
                    scale: 1.04,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                />

                <div className="project-index">
                  {project.id}
                </div>
              </div>

              <div className="project-content">
                <div className="project-topline">
                  <span>FEATURED PROJECT</span>
                  <span>{project.id} / 03</span>
                </div>

                <div>
                  <p className="project-subtitle">
                    {project.subtitle}
                  </p>

                  <h3>{project.title}</h3>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link primary-project-link"
                  >
                   <span className="github-text-icon">GH</span>
                    View repository
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="all-projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            More experiments, applications and projects live on my GitHub.
          </p>

          <a
            href="https://github.com/ankitbhardwaj2710"
            target="_blank"
            rel="noreferrer"
          >
            Explore all repositories
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
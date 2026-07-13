import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Award,
  ArrowUpRight,
} from "lucide-react";

const experience = [
  {
    period: "July 2026 — Present",
    role: "App Development Intern",
    company: "CodeAlpha",
    description:
      "Building production-style Flutter applications as part of a structured app development internship, focusing on clean UI, application architecture, local data persistence, Firebase integration and real-world features.",
    tags: ["Flutter", "Dart", "Firebase", "GitHub"],
  },
  {
    period: "2025",
    role: "Frontend Developer",
    company: "Smart India Hackathon — SAMVEDAN",
    description:
      "Worked as the sole frontend developer on a civic issue reporting application, responsible for UI design, screen flows and Flutter implementation while collaborating with the team on Firebase and backend integration.",
    tags: ["Flutter", "Firebase", "UI/UX", "Team Project"],
  },
  {
    period: "College Tech Fest",
    role: "Frontend Developer",
    company: "AI Tourist Guider",
    description:
      "Developed the mobile frontend for an AI-powered travel companion featuring attraction recommendations, personalized itinerary planning and a mobile-first user experience.",
    tags: ["Flutter", "AI/ML", "Frontend", "Team Project"],
  },
];

const certifications = [
  {
    number: "01",
    title: "5G Network Security",
    issuer: "IIT Delhi",
    type: "Training Workshop",
  },
  {
    number: "02",
    title: "iOS Mobile Application Development with AI/ML",
    issuer: "WCTM Gurugram",
    type: "Training",
  },
  {
    number: "03",
    title: "Advanced Backend Development",
    issuer: "Professional Training",
    type: "APIs · Databases · Security · Deployment",
  },
];

function Journey() {
  return (
    <section className="section journey-section" id="experience">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-number">04</span>

          <div>
            <p className="section-eyebrow">MY JOURNEY</p>

            <h2>
              Learning by building,
              <span> growing by doing.</span>
            </h2>
          </div>
        </motion.div>

        <div className="journey-block">
          <div className="journey-label">
            <BriefcaseBusiness size={18} />
            <span>EXPERIENCE</span>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <motion.article
                className="timeline-item"
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
              >
                <div className="timeline-marker">
                  <span />
                </div>

                <div className="timeline-period">
                  {item.period}
                </div>

                <div className="timeline-content">
                  <p>{item.company}</p>
                  <h3>{item.role}</h3>

                  <div className="timeline-description">
                    {item.description}
                  </div>

                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="education-icon">
            <GraduationCap size={25} />
          </div>

          <div className="education-main">
            <p className="education-label">EDUCATION</p>

            <h3>
              B.Tech — Computer Science Engineering
              <span> (AI & ML)</span>
            </h3>

            <p className="college-name">
              World College of Technology & Management, Gurugram
            </p>
          </div>

          <div className="education-year">
            <span>2024</span>
            <div />
            <span>2028</span>
          </div>
        </motion.div>

        <div className="certifications-wrapper">
          <div className="journey-label">
            <Award size={18} />
            <span>CERTIFICATIONS & TRAINING</span>
          </div>

          <div className="certifications-list">
            {certifications.map((certificate, index) => (
              <motion.article
                className="certificate-row"
                key={certificate.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                <span className="certificate-number">
                  {certificate.number}
                </span>

                <div className="certificate-content">
                  <p>{certificate.type}</p>
                  <h3>{certificate.title}</h3>
                </div>

                <div className="certificate-issuer">
                  {certificate.issuer}
                </div>

                <ArrowUpRight
                  className="certificate-arrow"
                  size={20}
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
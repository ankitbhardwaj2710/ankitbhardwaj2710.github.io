import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <motion.div
          className="available-badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="status-dot" />
          Available for opportunities
        </motion.div>

        <p className="hero-intro">Hello, I'm</p>

        <h1 className="hero-title">
          ANKIT
          <span>BHARDWAJ</span>
        </h1>

        <div className="hero-role">
          <span className="role-line" />
          <p>Flutter Developer · Frontend Developer</p>
        </div>

        <p className="hero-description">
          I build modern mobile and web experiences where clean design meets
          thoughtful engineering. Currently pursuing B.Tech in Computer Science
          with a specialization in AI & ML.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            Explore my work
            <ArrowDown size={18} />
          </a>

          <a
            href="https://github.com/ankitbhardwaj2710"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            <span className="github-text-icon">GH</span>
            GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span>SCROLL</span>
        <motion.div
          className="scroll-line"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}

export default Hero;
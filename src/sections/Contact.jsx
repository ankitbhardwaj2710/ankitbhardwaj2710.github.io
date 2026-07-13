import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
} from "lucide-react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <div className="section-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-status">
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="contact-eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>

          <h2>
            Let's build something
            <span> worth remembering.</span>
          </h2>

          <p className="contact-description">
            I'm open to internships, frontend development opportunities,
            Flutter projects and collaborations. If you have an idea or
            opportunity, feel free to reach out.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:ankitbhardwaj94684@gmail.com"
              className="contact-primary"
            >
              <Mail size={19} />
              Start a conversation
              <ArrowUpRight size={17} />
            </a>

            <a
              href="/resume/Ankit_Bhardwaj_Resume.pdf"
              download="Ankit_Bhardwaj_Resume.pdf"
              className="contact-secondary"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-details"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="contact-detail">
            <span>EMAIL</span>

            <a href="mailto:ankitbhardwaj94684@gmail.com">
              ankitbhardwaj94684@gmail.com
            </a>
          </div>

          <div className="contact-detail">
            <span>LOCATION</span>

            <p>
              <MapPin size={15} />
              Jhajjar,Haryana, India
            </p>
          </div>

          <div className="contact-detail">
            <span>SOCIAL</span>

            <div className="contact-socials">
              <a
                href="https://github.com/ankitbhardwaj2710"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/ankit-bhardwaj-612b34334"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
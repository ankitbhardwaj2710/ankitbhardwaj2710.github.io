import { ArrowUp } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            AB<span>.</span>
          </a>

          <p>
            Designed & built by Ankit Bhardwaj.
          </p>
        </div>

        <p className="footer-copyright">
          © {currentYear} Ankit Bhardwaj
        </p>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={17} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
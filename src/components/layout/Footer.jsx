import { Link } from "react-router-dom";

/**
 * Site footer with navigation links, social links, and copyright.
 * @returns {JSX.Element}
 */
const Footer = () => {
  return (
    <>
      <footer className="footernav">
        <ul className="foot-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/skills">Marketable Skills and Abilities</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </footer>

      <footer className="footerlink">
        <ul className="foot-social">
          <li><a href="https://www.linkedin.com/in/adam-stivers-b877a713a">LinkedIn</a></li>
        </ul>
      </footer>

      <div className="copyright">
        &copy; 2026 - Adam Stivers
      </div>
    </>
  );
};

export default Footer;
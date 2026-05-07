import { NavLink } from "react-router-dom";

/**
 * Main navigation bar with links to all pages.
 * @returns {JSX.Element}
 */
const Navbar = () => {
  return (
    <nav aria-label="Main navigation">
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : "inactive"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : "inactive"}>About Me</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : "inactive"}>Marketable Skills and Abilities</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : "inactive"}>Projects</NavLink>
        <NavLink to="/resume" className={({ isActive }) => isActive ? "active" : "inactive"}>Resume</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : "inactive"}>Contact Me</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
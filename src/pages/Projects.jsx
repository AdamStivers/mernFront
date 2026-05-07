import ProjectCard from "../components/cards/ProjectCard";
import { useEffect, useState } from "react";
import axios from "axios";


/**
 * my projects page
 *
 * @param {Object}   props
 * @param {Object[]} props.projects - Array of project objects from projects.json
 * @returns {JSX.Element}
 */

function Projects() {
const [projects, setProjects] = useState([]);

useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
    }, []);

return(
  <div>
    <h2 className="topic">Projects</h2>
    <main className="card-grid-section">
      <div className="project-card-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  </div>
);
}
export default Projects;
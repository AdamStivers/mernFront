import ResumeCard from "../components/cards/ResumeCard";

/**
 * Resume page
 *
 * @param {Object} props
 * @param {Object} props.resume - Resume data from resume.json
 * @returns {JSX.Element}
 */
const Resume = ({ resume }) => {
  const cards = [
    {
      category: "Education", items: resume.education, src: `${import.meta.env.VITE_API_URL}/images/grad.jpg`, alt: "USS Maine"  
    },
    {
      category: "Work Experience", items: resume.workExperience, src: `${import.meta.env.VITE_API_URL}/images/usn.jpg`, alt: "USS Maine"  
    },
    {
      category: "Skills", items: resume.skills, src: `${import.meta.env.VITE_API_URL}/images/skills.jpg`, alt: "USS Maine" 
    },
    {
      category: "Extracurricular", items: resume.extracurricular, src: `${import.meta.env.VITE_API_URL}/images/ea.jpg`, alt: "USS Maine" 
    },
  ];

  return (
    <div>
      <h2 className="topic">Resume</h2>
      <main className="card-grid-section">
        <div className="resume-card-grid">
          {cards.map((card, i) => (
            <ResumeCard key={i} {...card} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Resume;
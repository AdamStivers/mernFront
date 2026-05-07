import AboutCard from "../components/cards/AboutCard";

/**
 * About Me page 
 *
 * @param {Object} props
 * @param {Object} props.about About data from about.json
 * @returns {JSX.Element}
 */
const About = ({ about }) => {
  const cards = [
    { heading: "Education and Commission", content: about.description1, src: `${import.meta.env.VITE_API_URL}/images/uofa.jpg`, alt: "University of Arkansas" },
    { heading: "Nuclear Training", content: about.description2, src: `${import.meta.env.VITE_API_URL}/images/nptu.jpg`, alt: "nuclear power training unit"  },
    { heading: "Submarine Service", content: about.description3, src: `${import.meta.env.VITE_API_URL}/images/maine.jpg`, alt: "USS Maine"  },
  ];

  return (
    <div>
      <h2 className="topic">About Me</h2>
      <main className="card-grid-section">
        <div className="about-card-grid">
          {cards.map((card, i) => (
            <AboutCard key={i} {...card} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
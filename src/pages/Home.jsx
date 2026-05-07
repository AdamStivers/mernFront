import ApiCard from "../components/cards/ApiCard";

/**
 * Home page component displaying a headshot and intro description.
 * @param {Object} props
 * @param {Object} props.home Home page content from home.json
 * @param {string} props.home.img Path to headshot image
 * @param {string} props.home.name Name for image alt text
 * @param {string} props.home.description Intro paragraph text
 * @returns {JSX.Element}
 */

const Home = ({home, apiData}) => {

  return (
  <div>
      <h2 className="topic">Home</h2>
        <main className="aboutmecontent">
          <div className="self">
            <img className="headshot" src={`${import.meta.env.VITE_API_URL}/images/headshot.jpg`} alt={home.name}></img>
          </div>
          <p className="content">{home.description}</p>
          <div className= "api-card-grid">
            {apiData && <ApiCard api={apiData} />}
          </div>
        </main>
  </div>
)
};

export default Home;
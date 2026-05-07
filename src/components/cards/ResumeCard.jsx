import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader";
import CardBody from "../ui/Card/CardBody";
import CardFooter from "../ui/Card/CardFooter";
import useToggle from "../../hooks/useToggle";
import CardMedia from "../ui/Card/CardMedia"

/**
 * resume card
 *
 * @param {Object}   props
 * @param {string}   props.category section header
 * @param {string[]} props.items resume entries  
 * @returns {JSX.Element}
 */
const ResumeCard = ({ category, items, src, alt}) => {
  const [flipped, toggleFlipped] = useToggle(false);

  return (
    <Card
      ariaLabel={`${category} — click to ${flipped ? "hide" : "show"} details`}
      className={`card--resume ${flipped ? "card--resume-flipped" : ""}`}
      onClick={() => toggleFlipped()}
    >
      <div className="card__resume-inner">

        {/* Front */}
        <div className="card__resume-front">
          <CardHeader
            title={category}
          />
          <CardMedia src = {src} alt = {alt}/>
          <CardFooter>
            <span className="card__hint">Click to view details</span>
          </CardFooter>
        </div>

        {/* Back */}
        <div className="card__resume-back">
          <CardHeader title={category} className="card__header--back" />
          <CardBody>
            <ul className="card__resume-list">
              {items.map((item, i) => (
                <li key={i} className="card__resume-item">{item}</li>
              ))}
            </ul>
          </CardBody>
        </div>

      </div>
    </Card>
  );
};

export default ResumeCard;
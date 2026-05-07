import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader";
import CardBody from "../ui/Card/CardBody";
import CardFooter from "../ui/Card/CardFooter";
import CardMedia from "../ui/Card/CardMedia";
import Button from "../ui/Button";
import useToggle from "../../hooks/useToggle";
import { truncate } from "../../utils/formatters";
import { Link } from "react-router-dom";

/**
 * Card for a API
 * expand/collapse feature for desciption
 */
const ApiCard = ({api}) => {
const {title, url, explanation} = api;
const [expanded, toggleExpanded] = useToggle(false);

  return (
    <Card ariaLabel={title} className="card--api">
      <CardHeader title= {`Astronomy Picture of the Day: ${title}`} className = "card__header--apicard"/>
      <CardMedia src = {url} alt = {title}/>
      <CardBody text={expanded ? explanation : truncate(explanation, 150)} />  
      <CardFooter>
        <Button onClick={toggleExpanded} ariaExpanded={expanded} variant="outline">
          {expanded ? "Show Less ▲" : "Read More ▼"}
        </Button>
        <nav aria-label="navigation to projects">
        <Link to="/projects" className="cardlink">My Projects!</Link>
        </nav>
      </CardFooter>
    </Card>
  );
};

export default ApiCard;
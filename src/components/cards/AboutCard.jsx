import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader";
import CardBody from "../ui/Card/CardBody";
import CardFooter from "../ui/Card/CardFooter";
import CardMedia from "../ui/Card/CardMedia";
import Button from "../ui/Button";
import useToggle from "../../hooks/useToggle";
import { truncate } from "../../utils/formatters";

/**
 * Card for a biography
 * expand/collapse feature
 *
 * @param {Object} props
 * @param {string} props.heading  Card heading
 * @param {string} props.content  Full biography paragraph
 * @param {string} props.src gives src path for image
 * @param {string} props.alt alt text for image
 * @returns {JSX.Element}
 */
const AboutCard = ({ heading, content, src, alt }) => {
  const [expanded, toggleExpanded] = useToggle(false);

  return (
    <Card ariaLabel={heading} className="card--about">
      <CardHeader title={heading}/>
      <CardMedia src = {src} alt = {alt}/>
      <CardBody text={expanded ? content : truncate(content, 157)} />  
      <CardFooter>
        <Button onClick={toggleExpanded} ariaExpanded={expanded} variant="outline">
          {expanded ? "Show Less ▲" : "Read More ▼"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AboutCard;
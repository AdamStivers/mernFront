import { useState } from "react";
import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader";
import CardMedia from "../ui/Card/CardMedia";
import CardBody from "../ui/Card/CardBody";
import CardFooter from "../ui/Card/CardFooter";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import useToggle from "../../hooks/useToggle";
import { truncate } from "../../utils/formatters";

/**
 * Card for projects
 * Expand/collapse and like features
 *
 * @param {Object}   props
 * @param {string}   props.title Project title
 * @param {string}   props.img  Image source path
 * @param {string}   props.alt  alt text
 * @param {string}   props.description project description
 * @param {string[]} [props.tools] array for tags
 * @returns {JSX.Element}
 */
const ProjectCard = ({ project }) => {
  const {title, img, alt, description, tools = [] } = project;
  const [expanded, toggleExpanded] = useToggle(false);
  const [liked, toggleLiked] = useToggle(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    toggleLiked();
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <Card accentColor="navy" ariaLabel={`Project: ${title}`} className="card--project">
      <CardMedia
        src={img}
        alt={alt}
      />

      <CardHeader title={title} />

      <CardBody text={expanded ? description : truncate(description, 150)} />

        <div className="card__tags">
          {tools.map((tool, i) => (
            <Tag key={i} label={tool} />
          ))}
        </div>
  
      <CardFooter>
        <Button
          onClick={toggleExpanded}
          ariaExpanded={expanded}
          variant="outline"
        >
          {expanded ? "Show Less ▲" : "Read More ▼"}
        </Button>

        <Button
          onClick={handleLike}
          ariaLabel={liked ? "Unlike this project" : "Like this project"}
          ariaPressed={liked}
          variant={liked ? "solid" : "ghost"}
        >
          ♥ {likeCount}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
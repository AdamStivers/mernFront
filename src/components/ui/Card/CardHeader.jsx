/**
 * CardHeader sub-component
 *
 * @param {Object}           props
 * @param {string}           props.title  heading text
 * @param {string}           [props.className] class names
 * @returns {JSX.Element}
 */
const CardHeader = ({ title, className = "" }) => (
  <div className={`card__header ${className}`}>
    <h3 className="card__title">{title}</h3>
  </div>
);

export default CardHeader;
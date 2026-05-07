/**
 * CardBody sub-component
 *
 * @param {Object}           props
 * @param {string}           [props.text]  body text
 * @param {string}           [props.className] class names for css
 * @returns {JSX.Element}
 */
const CardBody = ({ text, children, className = "" }) => (
  <div className={`card__body ${className}`}>
    <p className="card__body-text">{text}</p>
    {children}
  </div>
);

export default CardBody;
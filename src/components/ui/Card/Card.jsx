/**
 * base card
 *
 * @param {Object}           props
 * @param {string}           [props.className]    - Additional class names for variants
 * @param {string}           [props.ariaLabel]    - Accessible label for the article
 * @returns {JSX.Element}
 */
const Card = ({ className = "", ariaLabel = "", children, onClick}) => (
  <article
    className={`card ${className}`}
    aria-label={ariaLabel}
    onClick = {onClick}
    >
    {children}
  </article>
);

export default Card;
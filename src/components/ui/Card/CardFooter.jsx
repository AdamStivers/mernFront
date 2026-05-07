/**
 * CardFooter sub-component
 *
 * @param {Object}          props
 * @param {string}          [props.className] - class names
 * @returns {JSX.Element}
 */
const CardFooter = ({ children, className = "" }) => (
  <div className={`card__footer ${className}`}>
    {children}
  </div>
);

export default CardFooter;
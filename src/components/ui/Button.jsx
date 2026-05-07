/**
 * resusable button
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children button label
 * @param {Function} props.onClick  click handler
 * @param {string} [props.ariaLabel] aria label
 * @param {boolean} [props.ariaPressed] toggle buttons
 * @param {boolean} [props.ariaExpanded] expand buttons
 * @param {string} [props.className]  class names
 * @returns {JSX.Element}
 */
const Button = ({ children, onClick, variant = "outline", ariaLabel, ariaPressed, ariaExpanded, className = "", type = "button",}) => (
  <button
    type={type}
    className={`btn btn--${variant} ${className}`}
    onClick={onClick}
    aria-label={ariaLabel}
    aria-pressed={ariaPressed}
    aria-expanded={ariaExpanded}
  >
    {children}
  </button>
);

export default Button;
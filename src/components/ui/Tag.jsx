/**
 * tags
 *
 * @param {Object}  props
 * @param {string}  props.label Tag text
 * @param {string}  [props.className] class names
 * @returns {JSX.Element}
 */
const Tag = ({ label, className = "" }) => (
  <span
    className={`tag ${className}`}
  >
    {label}
  </span>
);

export default Tag;
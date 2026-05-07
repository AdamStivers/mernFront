/**
 * CardMedia
 *
 * @param {Object}           props
 * @param {string}           props.src image source path
 * @param {string}           props.alt alt text
 * @param {string}           [props.className] class name for css file
 * @returns {JSX.Element}
 */
const CardMedia = ({ src, alt, className = "" }) => (
  <div className={`card__media ${className}`}>
    <img className="card__media-img" src={src} alt={alt} />
  </div>
);

export default CardMedia;
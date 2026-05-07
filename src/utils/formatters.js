/**
 * cut off text for the expand feature
 *
 * @param {string} text    - paragraph beign 
 * @param {number} limit   - Max character count
 * @returns {string}       - return string with the ...
 * 
 */
export const truncate = (text, limit) => {
  if (!text || text.length <= limit) return text;
  return text.slice(0, limit) + "...";
};

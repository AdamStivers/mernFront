import { useState } from "react";

/**
 * reusable toggle 
 * used for cards
 *
 * @param {boolean} [initialValue=false]  Starting state
 * @returns {[boolean, Function]} Current value and toggle function
 *
 */
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
};

export default useToggle;
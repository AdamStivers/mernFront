import ContactForm from "../components/forms/ContactForm";
/**
 * contact me page component displaying a contact form with entry fields
 * Validates form fields and returns an error object.
 * @returns {Object} errors values are error messages
 * @returns {JSX.Element}
 */
import { useState } from "react";

const Contact = () => {

  return (
    <div>
      <h2 className="topic">Contact Me</h2>
      <main className="contactform">
       <ContactForm/>
      </main>
    </div>
  );
};

export default Contact;


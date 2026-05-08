 import { useState } from "react";

 const ContactForm= () =>{

  //form entry fields for name, email, phone, message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

const [errors, setErrors] = useState({});
//handle submit
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (!res.ok) {
      // backend validation errors
      const backendErrors = {};

      if (data.errors) {
        data.errors.forEach((err) => {
          backendErrors[err.path] = err.msg;
        });
      }

      setErrors(backendErrors);
      return;
    }
    else{
      alert(`Thanks ${formData.name}, your message has been received!`);
      
      setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    }

    setErrors({});
  } catch (err) {
    alert("Error submitting form:", errors.err);
  }
    }

return(

     <form onSubmit={handleSubmit}>
      {/* form fields with value,type, and change handler */}   
        <div className="form">
          <label htmlFor="name">Name:</label>
          <input id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form">
          <label htmlFor="email">Email:</label>
          <input id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form">
          <label htmlFor="phone number">Phone:</label>
          <input id="phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="form">
          <label htmlFor="message">Message:</label>
          <textarea id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <div className="form">
        <button aria-label="submit button" id="submit" type="submit">Submit</button>
        </div>
        
      </form>
)
 }
export default ContactForm;

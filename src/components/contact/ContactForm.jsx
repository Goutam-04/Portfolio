import { useState } from "react";
import "./contact.css"

const ContactForm = () => {
  const [formValues, setFormValues] = useState({ fullname: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  const handleValidation = (values) => {
    const errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /\d/;

    if (!values.fullname) {
      errors.fullname = "Enter your full name";
    }
    else if (numberRegex.test(values.fullname)) {
      errors.fullname = "Full name can't be numbers!";
    }
    if (!values.email) {
      errors.email = "Enter your email";
    }
    else if (!emailRegex.test(values.email)) {
      errors.email = "Imvalid email format";
    }
    if (!values.message) {
      errors.message = "Message field can't be empty";
    }
    else if (values.message.length < 10) {
      errors.message = "The message should contain min. 10 characters";
    }
    return errors;
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(handleValidation(formValues));
    if (Object.keys(handleValidation(formValues)).length > 0) {
      return;
    }
    else {
      setSubmit(true);
      setFormValues({ fullname: "", email: "", message: "" });
    }
  }
  return (
    <section className="contact-us-form ">
      {submit ?
        <section className="form-success">
          <h3>Message successfully sent!</h3>
          <p>I will get back to you as soon as possible!</p>
          <button type="button" onClick={() => setSubmit(false)}>Send again</button>
        </section> :
        <form className="contact-form form-tag" onSubmit={submitForm}>
          <section className="contact-form-item">
            <input
              onChange={handleChange}
              value={formValues.fullname}
              className="fullname-input"
              type="text"
              placeholder="Full name"
              name="fullname"
            />
            <br></br>
            <label className="fullname-error">{formErrors.fullname}</label>
          </section>
          <section className="contact-form-item">
            <input onChange={handleChange}
              value={formValues.email} name="email" className="email-input" type="text" placeholder="Email" />
            <br></br>
            <label className="email-error">{formErrors.email}</label>
          </section>
          <section className="contact-form-item">
            <textarea
              onChange={handleChange}
              value={formValues.message} name="message" className="textarea-input" placeholder="Message" />
            <br></br>
            <label className="textarea-error">{formErrors.message}</label>
          </section>
          <section className="contact-form-item">
            <button type="submit">
              Send
            </button>
            <br></br>
          </section>
        </form>}
    </section>
  );
}

export default ContactForm;

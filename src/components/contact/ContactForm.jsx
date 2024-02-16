import { useState } from "react";

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
      errors.email = "Invalid email format";
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
    <section className="contact-us-form">
      {submit ?
        <section className="form-success flex flex-col items-center">
          <h3 className="text-primary text-2xl">Message successfully sent!</h3>
          <p className="text-white text-lg">I will get back to you as soon as possible!</p>
          <button className="mt-4 px-4 py-2 bg-primary border border-white text-white rounded-md hover:bg-secondary hover:border-secondary hover:text-primary transition duration-300" type="button" onClick={() => setSubmit(false)}>Send again</button>
        </section> :
        <form className="contact-form form-tag" onSubmit={submitForm}>
          <section className="contact-form-item relative">
            <input
              onChange={handleChange}
              value={formValues.fullname}
              className="fullname-input w-full bg-gray-800 border-b-2 border-primary py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
              type="text"
              placeholder="Full name"
              name="fullname"
            />
            {formErrors.fullname && <label className="fullname-error text-red-500 absolute -bottom-6 left-0">{formErrors.fullname}</label>}
          </section>
          <section className="contact-form-item relative">
            <input onChange={handleChange}
              value={formValues.email} name="email" className="email-input w-full bg-gray-800 border-b-2 border-primary py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
              type="text" placeholder="Email" />
            {formErrors.email && <label className="email-error text-red-500 absolute -bottom-6 left-0">{formErrors.email}</label>}
          </section>
          <section className="contact-form-item relative">
            <textarea
              onChange={handleChange}
              value={formValues.message} name="message" className="textarea-input w-full bg-gray-800 border-b-2 border-primary py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
              placeholder="Message" />
            {formErrors.message && <label className="textarea-error text-red-500 absolute -bottom-6 left-0">{formErrors.message}</label>}
          </section>
          <section className="contact-form-item">
            <button className="mt-4 px-4 py-2 bg-primary border border-white text-white rounded-md hover:bg-secondary hover:border-secondary hover:text-primary transition duration-300" type="submit">
              Send
            </button>
          </section>
        </form>}
    </section>
  );
}

export default ContactForm;

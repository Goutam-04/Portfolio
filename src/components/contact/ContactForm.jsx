import { useState } from "react";
import { RiSendPlane2Fill} from "@remixicon/react";



const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleValidation = (values) => {
    const errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /\d/;

    if (!values.fullname) {
      errors.fullname = "Enter your full name";
    } else if (numberRegex.test(values.fullname)) {
      errors.fullname = "Full name can't be numbers!";
    }
    if (!values.email) {
      errors.email = "Enter your email";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.message) {
      errors.message = "Message field can't be empty";
    } else if (values.message.length < 10) {
      errors.message = "The message should contain min. 10 characters";
    }
    return errors;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setFormErrors(handleValidation(formValues));

    // Check if there are any validation errors
    if (Object.keys(handleValidation(formValues)).length > 0) {
      return;
    }

    try {
      // Attempt to submit the form
      await handleSubmit(e);

      // If submission is successful, reset form values and set submit state to true
      setFormValues({ fullname: "", email: "", message: "" });
      setSubmit(true);
    } catch (error) {
      // Handle any errors that occur during form submission
      console.error("Error submitting form:", error);
      // You can set an error state or display an error message to the user
    }
  };

  // web3forms
  async function handleSubmit(event) {
    const key= process.env.NEXT_PUBLIC_ACCESS_KEY

    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", key);


    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <section className="contact-us-form">
      {submit ? (
        <section className="form-success flex flex-col items-center">
          <h3 className="text-primary text-2xl">Message successfully sent!</h3>
          <p className="text-white text-lg">
            I will get back to you as soon as possible!
          </p>
          <button
            className="mt-4 px-4 py-2 bg-primary border border-white text-primary-t rounded-md hover:bg-button hover:border-secondary hover:text-white transition duration-300"
            type="button"
            onClick={() => setSubmit(false)}
          >
            Send again
          </button>
        </section>
      ) : (
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
            {formErrors.fullname && (
              <label className="fullname-error text-red-500 absolute -bottom-6 left-0">
                {formErrors.fullname}
              </label>
            )}
          </section>
          <section className="contact-form-item relative">
            <input
              onChange={handleChange}
              value={formValues.email}
              name="email"
              className="email-input w-full bg-gray-800 border-b-2 border-primary py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
              type="text"
              placeholder="Email"
            />
            {formErrors.email && (
              <label className="email-error text-red-500 absolute -bottom-6 left-0">
                {formErrors.email}
              </label>
            )}
          </section>
          <section className="contact-form-item relative">
            <textarea
              onChange={handleChange}
              value={formValues.message}
              name="message"
              className="textarea-input w-full bg-gray-800 border-b-2 border-primary py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
              placeholder="Message"
            />
            {formErrors.message && (
              <label className="textarea-error text-red-500 absolute -bottom-6 left-0">
                {formErrors.message}
              </label>
            )}
          </section>
          <section className="contact-form-item flex justify-center items-center">
            <button
              className="flex justify-center items-center mt-4 px-4 py-1 bg-transparent border border-white text-primary-t rounded-md hover:bg-button hover:border-border hover:text-white transition duration-300"
              type="submit"
            >
              Send&nbsp;
              <RiSendPlane2Fill size={20}/>
            </button>
          </section>
        </form>
      )}
    </section>
  );
};

export default ContactForm;

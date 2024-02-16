'use client'

import "./contact.css";
import ContactForm from "./ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <article className="contact-main ">
        <h2 className="text-xl font-medium text-primary-t text-center">Contact Me</h2>
        <p className="p-tag">
          If you are interested to hire me I am always open to new opportunities
          and interesting projects! Feel free to contact me if you have any other
          requests or questions regarding web development.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="md:w-1/2 flex-shrink-0 h-auto"> {/* Use flex-shrink-0 to prevent flex items from shrinking */}
            <ContactForm />
          </div>
          <div className="md:w-1/2 hidden md:block h-auto">
            <Image src="/gifs/man.gif" alt="Man GIF" className="w-full h-full" width={500} height={500} /> {/* Set the width and height as per your requirement */}
          </div>
        </div>
      </article>
    </>
  );
};

export default Contact;

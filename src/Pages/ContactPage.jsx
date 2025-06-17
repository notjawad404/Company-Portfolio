import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="pt-28 pb-16 px-4 container mx-auto">
      <h1 className="text-4xl font-bold text-center text-violet-700 mb-12">
        Contact Us
      </h1>

      {/* Top Contact Info */}
      <div className="grid md:grid-cols-3 gap-6 text-center mb-16">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <FaPhoneAlt className="text-3xl text-violet-700 mb-2 mx-auto" />
          <h4 className="text-xl font-semibold mb-1">Phone</h4>
          <p className="text-gray-600">+92 300 1234567</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <FaEnvelope className="text-3xl text-violet-700 mb-2 mx-auto" />
          <h4 className="text-xl font-semibold mb-1">Email</h4>
          <p className="text-gray-600">info@yourcompany.com</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <FaMapMarkerAlt className="text-3xl text-violet-700 mb-2 mx-auto" />
          <h4 className="text-xl font-semibold mb-1">Location</h4>
          <p className="text-gray-600">Lahore, Pakistan</p>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-violet-700">Send Us a Message</h2>

          <div className="mb-4">
            <label className="block mb-1 text-gray-600 font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-600 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-gray-600 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-violet-700 text-white px-6 py-2 rounded-md hover:bg-violet-800 transition"
          >
            Send Message
          </button>

          {messageSent && (
            <p className="text-green-600 mt-4">Your message has been sent successfully!</p>
          )}
        </form>

        {/* Google Maps */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27215.25752467979!2d74.30184710827918!3d31.52036906009365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dd4e6bd9c9%3A0xa34d8820fc2e54b7!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718649269054!5m2!1sen!2s"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;

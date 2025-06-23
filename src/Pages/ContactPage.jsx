import { useState } from "react";
import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append("access_key", "79aaa501-bade-43cd-9921-210a26514a98");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const result = await res.json();

        if (result.success) {
            setMessageSent(true);
            e.target.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="pt-28 pb-16 px-4 container mx-auto">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
                Contact Us
            </h1>

            {/* Top Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <FaPhoneAlt className="text-3xl text-blue-600 mb-2 mx-auto" />
                    <h4 className="text-xl font-semibold mb-1">Office</h4>
                    <p className="text-gray-600">
                        <a href="tel:+923445927011" className="hover:text-blue-600">
                            +92 344 5927011
                        </a>
                    </p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-lg">
                    <FaMobileAlt className="text-3xl text-blue-600 mb-2 mx-auto" />
                    <h4 className="text-xl font-semibold mb-1">Mobile</h4>
                    <p className="text-gray-600">
                        <a href="tel:+923135009276" className="hover:text-blue-600">
                            +92 313 5009276
                        </a>
                    </p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-lg">
                    <FaEnvelope className="text-3xl text-blue-600 mb-2 mx-auto" />
                    <h4 className="text-xl font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">
                        <a href="mailto:info@triagesolutions.org" className="hover:text-blue-600">
                            info@triagesolutions.org
                        </a>
                    </p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-lg">
                    <FaMapMarkerAlt className="text-3xl text-blue-600 mb-2 mx-auto" />
                    <h4 className="text-xl font-semibold mb-1">Location</h4>
                    <p className="text-gray-600">Islamabad, Pakistan</p>
                </div>
            </div>

            {/* Contact Form and Map */}
            <div className="grid md:grid-cols-2 gap-10">
                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-blue-600">Send Us a Message</h2>

                    <div className="mb-4">
                        <label className="block mb-1 text-gray-600 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-gray-600 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
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
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-violet-800 transition"
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
                        title="Capital Plaza Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.6197255389575!2d72.99509597516005!3d33.66701393797431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95feea6c12ef%3A0xe6103b04f52ee517!2sCapital%20Plaza!5e0!3m2!1sen!2sus!4v1750529755229!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full border-0"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;

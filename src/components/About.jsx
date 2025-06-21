import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const About = () => {
  const [percentage] = useState(90); // Updated value for business growth

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Background shape */}
      <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 h-[120%] w-2/5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-l-[2rem] shadow-2xl z-[-1]" />

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Empowering Businesses Through Smart Solutions
          </h1>
          <p className="text-gray-600 mb-8">
            We specialize in Outsourcing and HR Management services tailored to
            help businesses thrive in today's fast-paced environment. With a
            focus on innovation and efficiency, we deliver results that matter.
          </p>
          <div className="flex flex-wrap gap-4 items-center sm:justify-start justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
            >
              Get In Touch
            </Link>
            <a
              href="#services"
              className="flex items-center text-blue-600 font-medium hover:underline"
            >
              <span className="mr-2">Our Services</span>
              <AiOutlineArrowDown />
            </a>
          </div>
        </motion.div>

        {/* Image & Progress */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full flex justify-center"
        >
          <div className="w-[90%] max-w-md rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://st4.depositphotos.com/17586788/i/600/depositphotos_247586928-stock-photo-a-successful-business-girl-in.jpg"
              alt="About"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Progress Indicator */}
          <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white shadow-xl rounded-xl p-4 flex items-center gap-4 w-max max-sm:hidden">
            <div className="w-16">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathColor: "#2563EB", // Tailwind blue-600
                  textColor: "#2563EB",
                  textSize: "24px",
                })}
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                Business Growth
              </h4>
              <small className="text-xs text-gray-500">Consistent Progress</small>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

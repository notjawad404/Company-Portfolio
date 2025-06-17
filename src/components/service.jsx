import { motion } from "framer-motion";
import {
  FaUsers,
  FaHeadset,
  FaChartLine,
  FaMoneyCheckAlt,
  FaUserTie,
} from "react-icons/fa";

// Animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

// Services data
const services = [
  {
    title: "Outsourcing",
    subServices: [
      { name: "Operations Management", icon: <FaChartLine /> },
      { name: "Sales", icon: <FaUsers /> },
      { name: "Customer Support", icon: <FaHeadset /> },
    ],
  },
  {
    title: "HR Management",
    subServices: [
      { name: "Payroll", icon: <FaMoneyCheckAlt /> },
      { name: "Recruitment", icon: <FaUserTie /> },
    ],
  },
];

// Intro Section
const Intro = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    className="grid md:grid-cols-2 gap-12 items-center mb-20"
  >
    <motion.div variants={fadeIn}>
      <img
        src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
        alt="Service Intro"
        className="rounded-xl shadow-xl w-full h-[500px] object-cover"
      />
    </motion.div>
    <motion.div variants={fadeIn}>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Customized Services for Your Business Needs
      </h2>
      <p className="text-gray-600 mb-6">
        Whether you need help managing your operations, boosting sales, or
        improving HR functions like payroll and recruitment — we offer
        cost-effective outsourcing and HR management services tailored to scale
        your business.
      </p>
      <a
        href="#services"
        className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
      >
        Explore Services
      </a>
    </motion.div>
  </motion.div>
);

// Services Section
const ServicesSection = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl px-6 md:px-12 py-12 shadow-lg"
  >
    <motion.div variants={fadeIn} className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Our Services for Business Growth
      </h2>
      <p className="text-white text-lg mb-4 max-w-2xl mx-auto">
        We empower businesses with efficient outsourcing and HR solutions that
        cut costs, improve productivity, and streamline operations.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-12">
      {services.map((service, idx) => (
        <motion.div key={idx} custom={idx + 1} variants={fadeIn}>
          <h3 className="text-2xl font-semibold mb-6">{service.title}</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.subServices.map((sub, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white text-gray-800 p-5 rounded-xl shadow-md flex flex-col items-center text-center transition"
              >
                <div className="text-blue-600 text-3xl mb-3">{sub.icon}</div>
                <h4 className="font-semibold">{sub.name}</h4>
                <p className="text-sm mt-2">
                  Effective {sub.name.toLowerCase()} service to support your growth.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Final Wrapper
const Service = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-16">
      <Intro />
      <ServicesSection />
    </section>
  );
};

export default Service;

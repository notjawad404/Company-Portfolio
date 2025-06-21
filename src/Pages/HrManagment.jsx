import { useState } from "react";
import { FaUserTie, FaMoneyCheckAlt, FaUsers } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const hrTabs = [
  {
    key: "payroll",
    title: "Payroll",
    icon: FaMoneyCheckAlt,
    content: {
      heading: "HR/Payroll Management Services",
      text: "Streamline your human resources operations with our HR and payroll management services. We offer employee record management, payroll processing, compliance with labor laws, and benefits administration, all tailored to your organization's needs.",
      list: [
        "Accurate and timely payroll processing",
        "Employee data management",
        "Tax filing and compliance",
        "Benefits and leave tracking",
        "Labor law compliance"
      ],
      image: "https://www.china-briefing.com/news/wp-content/uploads/2021/05/Leveraging-Technology-to-Improve-HR-and-Payroll-Management-in-China.jpg"
    }
  },
  {
    key: "recruitment",
    title: "Recruitment",
    icon: FaUsers,
    content: {
      heading: "Recruitment & Talent Acquisition",
      text: "Build a high-performing team with our expert recruitment services. We provide end-to-end hiring support including sourcing, screening, interviewing, and onboarding top talent tailored to your company’s goals.",
      list: [
        "Job posting and outreach",
        "Resume screening",
        "Candidate interviews",
        "Onboarding support",
        "Hiring analytics"
      ],
      image: "https://hrone.cloud/wp-content/uploads/2021/03/Recruitment-VS-Talent-1.jpg"
    }
  }
];

const HRManagement = () => {
  const [activeTab, setActiveTab] = useState("payroll");
  const activeContent = hrTabs.find((tab) => tab.key === activeTab);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* === Page Header === */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">HR Management Services</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Efficient and reliable HR solutions to power your organization’s growth. Explore our services tailored for modern workforce management.
        </p>
      </div>

      {/* === Tabs === */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 text-center">
        {hrTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-col items-center border px-20 py-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-xl"
                  : "bg-white text-gray-800 hover:bg-violet-50"
              }`}
            >
              <Icon className={`text-3xl mb-2 transition ${isActive ? "text-white" : "text-blue-600"}`} />
              <span className="font-semibold">{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* === Tab Content === */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeContent.key}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.img
            src={activeContent.content.image}
            alt={activeContent.content.heading}
            className="rounded-xl shadow-lg w-full "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />

          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{activeContent.content.heading}</h2>
            <p className="text-gray-700 mb-6 leading-7">{activeContent.content.text}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {activeContent.content.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HRManagement;

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaMoneyCheckAlt, FaUsers } from "react-icons/fa";

const hrTabs = [
  {
    key: "payroll",
    title: "Payroll",
    icon: <FaMoneyCheckAlt />,
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
    icon: <FaUsers />,
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
  const tabContent = hrTabs.find((tab) => tab.key === activeTab)?.content;

  return (
    <section className="container mx-auto px-4 py-20">
      {/* Page Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-violet-700 mb-4">HR Management Services</h1>
        <p className="text-gray-700 text-lg leading-7">
          Efficient and reliable HR solutions to power your organization’s growth. Explore our services below tailored for modern workforce management.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {hrTabs.map((tab) => (
          <button
            key={tab.key}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.key
                ? "bg-violet-700 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span className={`text-xl transition-all ${activeTab === tab.key ? "text-white" : "text-violet-700"}`}>
              {tab.icon}
            </span>
            {tab.title}
          </button>
        ))}
      </div>

      {/* Animated Tab Content */}
      {tabContent && (
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl font-bold text-violet-700 mb-4">{tabContent.heading}</h2>
            <p className="text-gray-700 mb-6 leading-7">{tabContent.text}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {tabContent.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={tabContent.image}
              alt={tabContent.heading}
              className="w-full h-96 object-cover"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HRManagement;

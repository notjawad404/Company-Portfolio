import { useState } from "react";
import { FaCog, FaHeadset, FaChartLine } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const outsourcingTabs = [
  {
    id: "operations",
    title: "Operations Management",
    icon: FaCog,
    content: {
      desc: "Enhance your business efficiency with our operations management services. We assist in optimizing workflows, improving resource utilization, and streamlining your operations for better scalability and cost savings.",
      highlights: [
        "Workflow automation and optimization",
        "Inventory and supply chain management",
        "Real-time analytics & performance monitoring",
        "Cost control strategies"
      ],
      image:
        "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg"
    }
  },
  {
    id: "sales",
    title: "Sales Services",
    icon: FaChartLine,
    content: {
      desc: "Boost your revenue with our results-driven sales services. We help you build solid strategies, generate qualified leads, and track sales performance to ensure long-term growth and conversion optimization.",
      highlights: [
        "Sales funnel development",
        "Lead generation & nurturing",
        "CRM integration and management",
        "Sales performance tracking dashboards"
      ],
      image:
        "https://media.istockphoto.com/id/950986656/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?s=612x612&w=0&k=20&c=U-y6cADCby4QwENFptPrVcK_MplesqZmnDxUMMkJZvM="
    }
  },
  {
    id: "support",
    title: "Customer Support",
    icon: FaHeadset,
    content: {
      desc: "Deliver exceptional customer experiences with our support services. We offer multichannel support, helpdesk ticketing systems, and AI-powered chat solutions to resolve issues quickly and retain loyal customers.",
      highlights: [
        "24/7 live chat and ticketing system",
        "Knowledge base and self-help portal",
        "Multilingual customer support",
        "Customer feedback and satisfaction reports"
      ],
      image:
        "https://img.freepik.com/premium-vector/vector-flat-design-illustration-customer-support_727932-76.jpg"
    }
  }
];

const Outsourcing = () => {
  const [activeTab, setActiveTab] = useState("operations");

  const activeContent = outsourcingTabs.find((tab) => tab.id === activeTab);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* === Page Title & Description === */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Outsourcing Services</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We offer scalable and efficient outsourcing solutions tailored to your business. From managing operations to delivering sales and support, we help you focus on growth while we handle the rest.
        </p>
      </div>

      {/* === Tab Navigation === */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 text-center">
        {outsourcingTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center border px-6 py-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-xl"
                  : "bg-white text-gray-800 hover:bg-blue-50"
              }`}
            >
              <Icon className={`text-3xl mb-2 transition ${isActive ? "text-white" : "text-blue-600"}`} />
              <span className="font-semibold">{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* === Active Tab Content with Animation === */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeContent.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.img
            src={activeContent.content.image}
            alt={activeContent.title}
            className="rounded-xl shadow-lg w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />

          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{activeContent.title}</h2>
            <p className="text-gray-700 mb-6 leading-7">{activeContent.content.desc}</p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {activeContent.content.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Outsourcing;

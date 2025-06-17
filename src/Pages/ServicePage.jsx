import { Link } from "react-router-dom";
import { MdBusinessCenter } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

const services = [
  {
    title: "Outsourcing",
    icon: <MdBusinessCenter />,
    path: "/services/outsourcing",
    description:
      "We provide end-to-end outsourcing solutions tailored to your business needs. From operations to tech support, we help you scale efficiently while cutting costs."
  },
  {
    title: "HR Management",
    icon: <FaUserTie />,
    path: "/services/hr-management",
    description:
      "Optimize your workforce with our HR management services. We handle recruitment, payroll, compliance, and employee engagement with precision."
  }
];

const ServicePage = () => {
  return (
    <section className="container mx-auto px-6 py-16 space-y-16">
      {/* Service Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Our Services</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Discover how our specialized services help you streamline business operations and manage human resources more effectively.
        </p>
      </div>

      {/* Services List */}
      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-blue-700 text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              {service.title}
            </h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <Link
              to={service.path}
              className="inline-block mt-2 text-blue-600 font-medium hover:underline"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;

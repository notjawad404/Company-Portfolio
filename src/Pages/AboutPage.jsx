import { FaRegHandshake, FaUserTie, FaUsers, FaChartLine, FaCogs } from "react-icons/fa";

const features = [
  {
    icon: <FaRegHandshake />,
    title: "Client-Centric Approach",
    description: "We believe in building long-term relationships and offer personalized services tailored to your business needs."
  },
  {
    icon: <FaCogs />,
    title: "Efficient Operations",
    description: "With proven methodologies and streamlined processes, we boost your business efficiency and scalability."
  },
  {
    icon: <FaChartLine />,
    title: "Results-Driven",
    description: "Our services are strategically aligned to deliver measurable business outcomes and maximize ROI."
  }
];

const servicesOverview = [
  {
    icon: <FaRegHandshake />,
    title: "OutSourcing",
    description: "We offer expert outsourcing services including operations management, sales, and customer support to help you reduce cost and focus on growth."
  },
  {
    icon: <FaUserTie />,
    title: "HR & Payroll",
    description: "We manage your HR processes including payroll and recruitment, ensuring smooth operations and full compliance with labor regulations."
  },

];

const About = () => {
  return (
    <section className="px-4 py-20 container mx-auto space-y-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl font-bold text-violet-700 mb-6">
              About Us
            </h1>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              We are a passionate team of technology and HR professionals dedicated to helping businesses grow smarter. With deep industry expertise and a client-first mindset, we specialize in delivering top-notch outsourcing and HR management solutions tailored to your unique needs.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Tailored strategies to match your business goals</li>
              <li>Seamless integration with your existing workflows</li>
              <li>Proven track record of boosting efficiency and reducing costs</li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://t3.ftcdn.net/jpg/03/01/48/18/360_F_301481839_p4RvuPBeFTeNvDXyl2ez822gZhQ7ZWEF.jpg"
              alt="Team Working"
              className="rounded-xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>



      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=700&q=80"
            alt="Team"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-violet-700 mb-4">Our Mission & Vision</h2>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            Our mission is to simplify complex business processes, streamline operations, and empower organizations to achieve sustainable success. Whether it's managing your day-to-day operations, enhancing customer experience, or driving HR excellence — we provide scalable, cost-effective solutions that allow you to focus on what matters most: your core business.
          </p>
          <p className=" text-lg text-gray-700 leading-7">
            We envision a future where companies focus on their core strengths while we handle the rest — with innovation, precision, and care.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-violet-700 mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
              <div className="text-3xl text-violet-700 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-6">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Overview */}
      <div>
        <h2 className="text-3xl font-bold text-violet-700 mb-10 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {servicesOverview.map((service, idx) => (
            <div key={idx} className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition text-center">
              <div className="text-3xl text-violet-700 mb-4">{service.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm leading-6">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-violet-700 text-white text-center py-12 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Ready to Elevate Your Business?</h2>
        <p className="mb-6 text-white/90">
          Let us take care of your operations, HR, and customer support so you can focus on scaling up.
        </p>
        <button className="bg-white text-violet-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default About;

import { BiBrain } from "react-icons/bi";
import { GrShieldSecurity } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Cyber Security",
    icon: <GrShieldSecurity />,
    subServices: [
      "Network Protection",
      "Threat Analysis",
      "Risk Assessment"
    ]
  },
  {
    title: "IT Consulting",
    icon: <BsLaptop />,
    subServices: [
      "Cloud Strategy",
      "IT Planning",
      "Digital Transformation"
    ]
  }
];

const Intro = () => (
  <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
        alt="Intro"
        className="rounded-xl shadow-xl w-full h-[500px] object-cover"
      />
      <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-44 bg-white p-4 rounded-xl shadow-xl z-10">
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {[1, 2].map((_, i) => (
            <SwiperSlide key={i} className="text-center">
              <div className="text-blue-600 text-4xl mb-2 flex justify-center">
                <BiBrain />
              </div>
              <p className="text-sm font-medium">
                Innovative IT strategies and automation.
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        We are the solutions for IT problems
      </h2>
      <p className="text-gray-600 mb-6">
        We provide modern and scalable technology services to enhance your
        digital infrastructure and help grow your business efficiently.
      </p>
      <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition">
        More About
      </button>
    </div>
  </div>
);

const ServicesSection = () => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl px-8 py-12 shadow-lg">
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Services for Technology You Need</h2>
      <button className="bg-white text-blue-600 font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition">
        Load More
      </button>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      {services.map((service, idx) => (
        <div key={idx}>
          <h3 className="text-2xl font-semibold mb-6">{service.title}</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {service.subServices.map((sub, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 p-5 rounded-xl shadow-md flex flex-col items-center hover:shadow-xl transition"
              >
                <div className="text-blue-600 text-3xl mb-3">{service.icon}</div>
                <h4 className="font-semibold text-center">{sub}</h4>
                <p className="text-sm text-center mt-2">
                  Get secured, strategic and scalable digital solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Service = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-16">
      <Intro />
      <ServicesSection />
    </section>
  );
};

export default Service;

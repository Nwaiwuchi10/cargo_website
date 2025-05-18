import truck from "../assets/images/truck.jpg";
import play from "../assets/images/player.png";
import feature from "../assets/images/feature.jpg";
import brown from "../assets/images/brown.jpg";
import james from "../assets/images/james.jpg";
import johnson from "../assets/images/johnson.jpg";
import emily from "../assets/images/emily.jpg";

import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TrackingSection from "./Tracking";

const Hero = () => {
  return (
    <div className="overflow-hidden text-gray-800">
      <TrackingSection />

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 px-4 sm:px-8 lg:px-20 py-20">
        <div className="bg-orange-600">
          <img src={truck} alt="Truck" className="w-full " />
          <p className="mt-2 font-bold text-black md:text-4xl text-2xl p-5">
            25+ Years of Excellence
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-orange-600 text-xl font-bold uppercase mb-3">
            About Us
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Your Trusted Logistics Partner
          </h1>
          <p className="text-gray-600 mb-6">
            With over two decades of experience, we provide efficient, reliable,
            and secure logistics services tailored to meet the unique needs of
            our clients. Whether it's local delivery or international freight,
            our team ensures your goods are handled with care and delivered on
            time.
          </p>
          <div className="flex items-center space-x-4">
            <button className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition duration-300">
              <img src={play} alt="Play" className="w-6 h-6 " />
            </button>
            <span className="text-lg font-medium">Play Video</span>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 py-20 px-4 sm:px-8 lg:px-20 text-center">
        <h2 className="text-orange-600 font-bold uppercase mb-2">
          Our Services
        </h2>
        <h3 className="text-2xl md:text-5xl font-bold mb-10" style={{}}>
          Comprehensive Logistics Solutions
        </h3>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {[
            {
              icon: "fa-plane",
              title: "Air Freight",
              desc: "Ensure quick and reliable delivery of goods across international borders with our air freight services.",
            },
            {
              icon: "fa-ship",
              title: "Ocean Freight",
              desc: "Comprehensive ocean freight solutions for large-scale cargo and cost-effective shipping needs.",
            },
            {
              icon: "fa-truck",
              title: "Land Transport",
              desc: "Efficient and reliable land transport solutions to connect your goods with their destination.",
            },
            {
              icon: "fa-store",
              title: "Warehousing",
              desc: "Secure and flexible warehousing options to store your goods before final delivery.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="shadow-lg p-3 rounded-md"
              style={{ textAlign: "center" }}
            >
              <div className="flex items-center mb-4 space-x-3 bg-orange-600 p-6">
                <i className={`fa ${service.icon} fa-2x text-black`}></i>
                <h4 className="text-lg font-bold text-white">
                  {service.title}
                </h4>
              </div>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <a
                href="#"
                className="text-orange-600 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="grid md:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-20 py-4 items-center bg-gray-100">
        <div className="md:p-16">
          <img src={feature} alt="Feature" className="w-full" />
        </div>
        <div>
          <h2 className="text-orange-600 text-xl font-bold uppercase mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-2xl md:text-5xl font-bold mb-6">
            Fast, Reliable, and Secure Services
          </h3>
          <p className="text-gray-600 mb-6">
            Our commitment to excellence and customer satisfaction sets us apart
            in the logistics industry. We provide tailored solutions to meet
            your unique requirements with the highest level of professionalism.
          </p>
          <ul className="space-y-3">
            {[
              "Experienced Professionals",
              "24/7 Customer Support",
              "Advanced Tracking Systems",
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <i className="far fa-dot-circle text-orange-600 mt-1"></i>
                <p className="font-semibold">{item}</p>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-block mt-6 text-orange-600 font-bold hover:underline"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 px-4 sm:px-8 lg:px-20 text-center">
        <h2 className="text-orange-600 text-sm font-bold uppercase mb-2">
          Testimonials
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold mb-10">
          What Our Clients Say
        </h3>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={30}
          dots
          autoplay
          autoplayTimeout={3000}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
            1400: { items: 4 },
          }}
        >
          {[
            {
              name: "Michael Brown",
              role: "Logistics Manager",
              img: brown,
              quote:
                "The team at Faster Logistics is highly professional and reliable. Their real-time tracking system is a game changer.",
            },
            {
              name: "Emily Davis",
              role: "Freelancer",
              img: emily,
              quote:
                "I’m impressed by their commitment to excellence. They handled my fragile goods with utmost care.",
            },
            {
              name: "James Wilson",
              role: "Retailer",
              img: james,
              quote:
                "Faster Logistics has been our trusted partner for years. Their service is unparalleled in the industry.",
            },
            {
              name: "Sarah Johnson",
              role: "Business Owner",
              img: johnson,
              quote:
                "Faster Logistics provided exceptional service, ensuring my shipments arrived on time and in perfect condition. Highly recommend!",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-lg p-10 shadow-md text-left relative"
            >
              <i className="fa fa-3x fa-quote-right text-orange-600 absolute top-0 right-0"></i>
              <div className="flex items-center space-x-4 mb-4">
                <div>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full rounded-full"
                  />
                </div>
                <div>
                  <h6 className="font-bold">{item.name}</h6>
                  <small className="text-gray-500">- {item.role}</small>
                </div>
              </div>
              <p className="text-gray-600">{`"${item.quote}"`}</p>
            </div>
          ))}
        </OwlCarousel>
      </div>

      {/* Footer */}
      <div className="bg-[#1e1e1e] text-white py-20 px-4 sm:px-8 lg:px-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt mr-2"></i>123 Logistics Lane,
              New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt mr-2"></i>+123 456 7890
            </p>
            <p className="mb-4">
              <i className="fa fa-envelope mr-2"></i>support@fasterlogistics.com
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook-f", "linkedin-in", "instagram"].map(
                (icon, idx) => (
                  <a key={idx} href="#" className="hover:text-orange-500">
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            {["HOME", "ABOUT", "SERVICES", "CONTACTS"].map((item, index) => (
              <a
                key={index}
                href={`/${item.toLowerCase()}`}
                className="block mb-2 font-semibold hover:text-orange-500"
              >
                <i className="fa fa-angle-right mr-2"></i>
                {item}
              </a>
            ))}
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">
              Stay updated with our latest offers and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 rounded-l-full text-black"
              />
              <button
                type="submit"
                className="bg-orange-600 px-4 py-3 rounded-r-full text-white font-semibold hover:bg-orange-700"
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
        <hr className="my-10 border-gray-600" />
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© 2025 Faster Logistics. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <p className="hover:text-white">Privacy</p>
            <p className="hover:text-white">Terms</p>
            <p className="hover:text-white">FAQs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

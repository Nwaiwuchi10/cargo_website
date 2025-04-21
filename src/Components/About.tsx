import React from "react";
import truck from "../assets/images/truck.jpg";
import play from "../assets/images/play.png";
import feature from "../assets/images/feature.jpg";
// import brown from "../assets/images/brown.jpg";
// import james from "../assets/images/james.jpg";
// import johnson from "../assets/images/johnson.jpg";
// import emily from "../assets/images/emily.jpg";
// import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import TrackingSection from "./Tracking";
import Navbar from "./Nav";
import Topbar from "./Topbar";

const About = () => {
  return (

    

    <div className="overflow-hidden text-gray-800">
<Topbar/>
<Navbar/>

<div
        className="relative w-full bg-cover bg-center bg-no-repeat h-[60vh] flex items-center justify-center font-roboto san-serif"
        style={{
          backgroundImage: "url('/src/assets/images/header.jpg')",
        }}
      >
        {/* Dark blur overlay */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 w-full max-w-2xl">
          <h1 className="text-4xl sm:text-4xl md:text-4xl font-bold text-white mb-5">
            About Us
          </h1>
          <h1
            className="text-1xl sm:text-1xl md:text-1xl font-bold text-white flex gap-4 "
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
            }}
          >
            <a href="/home">Home</a>
            <i className="fa fa-circle pt-1 px-4"></i>
            <p>About Us</p>
          </h1>
        </div>
      </div>


      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 px-4 sm:px-8 lg:px-20 p-20 ">
        <div className="bg-orange-600 ">
          <div md:p-16><img src={truck} alt="Truck" className="w-full" /></div>
          <p className="mt-3 mb-3 font-bold text-black md:text-4xl text-2xl p-0" style={{textAlign:'center'}}>30+ Years of Expertise</p>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-orange-600 text-xl  font-bold uppercase mb-3 font-roboto san-serif">About Us</h2>
          <h1 className="text-3xl md:text-5xl mb-6 font-roboto san-serif" style={{fontWeight:'bolder'}}>Your Partner in Global Logistics</h1>
          <p className="text-gray-600 mb-6">
          Faster Logistics is a globally recognized provider of logistics and supply chain solutions. For over three decades, we have been helping businesses navigate the complexities of global trade. Our services are tailored to meet the unique needs of every client, ensuring seamless and efficient transport of goods across air, sea, and land.
          </p>
          <p className="text-gray-600 mb-6">
          Our mission is to empower businesses with reliable logistics solutions, cutting-edge technology, and unparalleled customer support. Whether you’re shipping locally or internationally, you can trust us to deliver excellence every step of the way.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#"><button type="submit" className="w-[20vh] h-12 px-3 text-white flex items-center justify-center  bg-orange-600 hover:bg-blue-600" style={{borderRadius:'10vh'}}>
              Learn More
            </button></a>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="grid md:grid-cols-2 gap-5 px-4 sm:px-8 lg:px-20 py-5 items-center bg-gray-100">
        <div className="md:p-14">
          <img src={feature} alt="Feature" className="w-full" />
        </div>
        <div>
          <h2 className="text-orange-600 text-xl font-bold uppercase mb-3">Why Choose Us</h2>
          <h3 className="text-2xl md:text-4xl font-bold mb-6">Delivering Excellence Across the Globe</h3>
          <p className="text-gray-600 mb-6">At Faster Logistics, we pride ourselves on our commitment to quality, reliability, and customer satisfaction. Here’s why we’re the trusted choice for logistics solutions:</p>
          <ul className="space-y-3">
            {["Experienced Professionals", "24/7 Customer Support", "Advanced Tracking Systems"].map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <i className="far fa-dot-circle text-orange-600 mt-1"></i>
                <p className="font-semibold">{item}</p>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 py-20">
           <a href="/contacts"> <button className="w-[20vh] h-12 px-3 text-white flex items-center justify-center  bg-orange-600 hover:bg-blue-600" style={{borderRadius:'10vh'}}>
              Contact Us
            </button></a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1e1e1e] text-white py-20 px-4 sm:px-8 lg:px-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt mr-2"></i>123 Logistics Lane, New York, USA</p>
            <p className="mb-2"><i className="fa fa-phone-alt mr-2"></i>+123 456 7890</p>
            <p className="mb-4"><i className="fa fa-envelope mr-2"></i>support@fasterlogistics.com</p>
            <div className="flex space-x-4">
              {["twitter", "facebook-f", "linkedin-in", "instagram"].map((icon, idx) => (
                <a key={idx} href="#" className="hover:text-orange-500"><i className={`fab fa-${icon}`}></i></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            {["HOME", "ABOUT", "SERVICES", "CONTACTS"].map((item, index) => (
              <a key={index}  href={`/${item.toLowerCase()}`} className="block mb-2 font-semibold hover:text-orange-500">
                <i className="fa fa-angle-right mr-2"></i>{item}
              </a>
            ))}
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with our latest offers and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 rounded-l-full text-black"
              />
              <button type="submit" className="bg-orange-600 px-4 py-3 rounded-r-full text-white font-semibold hover:bg-orange-700">
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

export default About;

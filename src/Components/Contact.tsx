import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Nav";

const Contact = () => {
  return (
    <div>
      <Topbar />
      <Navbar />

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
            Contact Us
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
            <p>Contact</p>
          </h1>
        </div>
      </div>

      <div className="bg-gray-100 py-20 px-4 sm:px-8 lg:px-20 text-center mt-20 mb-20 font-roboto san-serif">
        <p
          className="text-orange-600 font-bold uppercase mb-2"
        >
          Contact Information
        </p>
        <p className="text-2xl md:text-5xl font-bold mb-10">Get In Touch With Us</p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-center" >
          {/* <div className='CG' style={{backgroundColor:'orangered'}}> */}
          <div className="flex item-center bg-orange-600 p-6" style={{justifyContent:'center'}}>
            <i className="fa fa-2x fa-map-marker-alt text-dark pr-3"></i>
            <h6 className="text-white font-weight-medium m-0">
              123 Logistics Lane, New York, USA
            </h6>
          </div>

          {/* </div> */}
          {/* <div className='CG' style={{backgroundColor:'orangered'}}> */}
          <div className="flex item-center bg-orange-600 p-6" style={{justifyContent:'center'}}>
            <i className="fa fa-2x fa-phone-alt text-dark pr-5 pl-20"></i>
            <h6 className="text-white font-weight-medium m-0 pr-14">
              +123 456 7890
            </h6>
          </div>

          {/* </div> */}
          {/* <div className='CG' style={{backgroundColor:'orangered'}}> */}
          <div className="flex item-center bg-orange-600 p-6" style={{justifyContent:'center'}}>
            <i className="fa fa-2x fa-envelope text-dark pr-5 pl-6"></i>
            <h6 className="text-white font-weight-medium m-0">
              support@fasterlogistics.com
            </h6>
            {/* </div> */}
          </div>
          {/* <div className='CG'>
                <p className='CE'> <i class="fa fa-2x fa-store text-dark pr-3"></i> <p>Warehousing</p></p>
                <p style={{marginBottom:'3vh',color:'gray'}}>Secure and flexible warehousing options to store your goods before final delivery.</p>
                <a href="#" className='CF'>Learn More</a>
            </div> */}
        </div>
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

export default Contact;

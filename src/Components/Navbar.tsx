import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import dropdown from "../assets/images/left.png";
import menu from "../assets/images/menu.png";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="n relative flex items-center justify-between py-3 px-8 font-medium shadow-md bg-white">
      <a
        href="/"
        className="flex items-center  text-3xl sm:font-extrabold cursor-pointer"
        style={{ color: "orangered", gap: "5px" }}
      >
        <FaTruck className="ml-2" />
        Faster Logistics
      </a>

      <ul
        className="hidden sm:flex gap-8 text-sm text-gray-700 cursor-pointer"
        style={{ justifyContent: "space-around" }}
      >
        {["HOME", "ABOUT", "SERVICES", "CONTACTS"].map((item, index) => (
          <li key={index}>
            <NavLink
              to={`/${item.toLowerCase()}`}
              className="flex flex-col items-center hover:text-gray-900 hover:bg-orange-500 no-underline transition duration-300 text-gray-700"
              style={{ textDecoration: "none" }}
            >
              <p className="p-4">{item}</p>
              {/* <hr className='w-2/4 border-none h-[2.5px] bg-gray-500 hidden' /> */}
            </NavLink>
          </li>
        ))}
      </ul>

      <a href="/contacts">
        {" "}
        <button
          className="hidden sm:flex w-[20vh] h-12 px-3 text-white items-center justify-center bg-orange-600 hover:bg-blue-600"
          style={{ borderRadius: "10vh" }}
        >
          Contact Us
        </button>
      </a>

      <img
        onClick={() => setVisible(!visible)}
        src={menu}
        className="w-10 cursor-pointer sm:hidden"
        alt="Menu"
      />

      {/* Sidebar menu for smaller screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 2 }}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <img
              className="h-7 rotate-180 cursor-pointer"
              src={dropdown}
              onClick={() => setVisible(false)}
              alt="Close Menu"
            />
          </div>
        </div>
        <ul className="flex flex-col text-gray-600">
          {["HOME", "ABOUT", "SERVICES", "CONTACTS"].map((item, index) => (
            <a
              key={index}
              onClick={() => setVisible(false)}
              href={`/${item.toLowerCase()}`}
              className="p-4 hover:bg-orange-300 text-gray-600"
            >
              {item}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

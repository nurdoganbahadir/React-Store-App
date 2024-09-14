import React, { useState } from "react";
import logo from "../assets/logo.png";
import { closeNavbar, openNavbar } from "../helper/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigation = [
    {
      title: "Home",
      path: "/dashboard",
    },
    {
      title: "Products",
      path: "/dashboard/products",
    },
    {
      title: "About",
      path: "/dashboard/about",
    },
  ];
  return (
    <nav className="bg-navbarColor md:text-sm">
      <div className="gap-x-1 item-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5">
          <a
            href="https://clarusway.com/"
            target="true"
            className="flex items-center"
          >
            <img src={logo} alt="clarusway" width={50} />
            <span>Clarusway</span>
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setShow(!show)}
              className="text-gray-500 hover:text-gray-800"
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div className="">
          <ul>
            {navigation.map((item) => (
              <li key={item.title}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

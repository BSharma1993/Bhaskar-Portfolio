import React, { useState } from "react";
import logoPic from "../../public/photo.avif";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Protfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contacts",
    },
  ];
  return (
    <>
      <div className=" max-w-screen container mx-auto px-2 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className=" flex justify-between items-center h-16">
          <div className=" flex space-x-2 ">
            <img src={logoPic} className=" w-12 h-12 rounded-full" alt="" />
            <h1 className=" text-l cursor-pointer md:text-xl">
              Bhaska
              <span className=" text-red-700 text-xl md:text-2xl">R</span>
              <p className=" text-sm text-gray-800">Web Developer</p>
            </h1>
          </div>
          {/* NavBar for Desktop */}
          <div>
            <ul className=" hidden md:flex justify-between items-center space-x-8 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 hover:underline ease-out cursor-pointer "
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className=" md:hidden">
              {menu ? <IoMdClose size={24} /> : <IoMenuSharp size={24} />}
            </div>
          </div>
        </div>
        {/* navbar for Mobile */}
        {menu && (
          <div className=" bg-white">
            <ul className=" md:hidden flex flex-col h-screen items-center justify-center space-y-5 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 hover:underline ease-out cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

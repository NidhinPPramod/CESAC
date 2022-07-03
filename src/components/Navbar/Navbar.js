import React, { useContext } from "react";
import { GradientBtn } from "../Utils/GradientBtn";

import { FaBars, FaTimes } from "react-icons/fa";
import { MenuContext } from "../Context/MenuContext";

const Navbar = () => {
  
  const { isMenuShown, setIsMenuShown } = useContext(MenuContext);

  const navItems = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Academy",
    },
    {
      id: 3,
      link: "Alumini",
    },
    {
      id: 4,
      link: "Events",
    },
    {
      id: 5,
      link: "About",
    },
  ];

  return (
    <>
      <div className="absolute w-full h-24 bg-black text-white z-20">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
          <div>
            <h1 className="text-thViolet tracking-widest text-3xl">CESAC</h1>
          </div>
          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {navItems.map(({ id, link }) => {
                return (
                  <li
                    className="p-4 uppercase duration-200 hover:text-thViolet cursor-pointer"
                    key={id}
                  >
                    {link}
                  </li>
                );
              })}
            </ul>
            <GradientBtn className="ml-4 capitalize" title="SignUp" />
          </div>
          <div
            className="block lg:hidden"
            onClick={() => setIsMenuShown(!isMenuShown)}
          >
            {isMenuShown ? <FaTimes size={30} />:<FaBars size={30} />}
          </div>
        </div>
      </div>
      <div
        className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {navItems.map(({ id, link }) => {
            return <li className="p-4 uppercase cursor-pointer" key={id}>{link}</li>;
          })}
          <GradientBtn title="Sign Up" className="mt-10 capitalize"/>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

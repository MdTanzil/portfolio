import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SlideToggle from "react-slide-toggle";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "../assets/css/mobileMenu.css";
import avatar from "../assets/images/logo.webp";
import useWindowDimensions from "../hook/getWindowDimensions";
import menuList from "../utils/manuList";

export default function Navbar({ theme, toggleDarkMode }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [toggleEvent, setToggleEvent] = useState(0);

  const { width } = useWindowDimensions();

  const toggle = () => setToggleEvent(Date.now());

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const location = useLocation();
  const path = location.pathname;

  return (
    <React.Fragment>
      <div
        className={`backdrop-blur-xl bg-slate-100/40 dark:bg-[#0b1327]/70 w-full top-0 left-0 fixed z-50 py-4 transition-all duration-200 border-b-2 border-inherit dark:border-gray-700 my-collapsible my-collapsible 
       
        `}
      >
        <div className="containerCustom flex items-center justify-between h-full">
          <div>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <h4 className="flex items-center text-xl">
                <div className="h-9 w-9 overflow-hidden rounded-full bg-transparent">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="ml-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18c8fd] to-purple-600 font-extrabold text-2xl">
                    Md Tanzil
                  </span>
                </div>
              </h4>
            </Link>
          </div>
          <div className="flex items-center">
            <div className=" hidden md:block">
              <ul className="flex">
                {menuList.map((menu, idx) => (
                  <Link to={menu?.link} className="capitalize" key={idx}>
                    <li
                      className={`px-3 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#18c8fd] to-purple-600 font-medium ${
                        path === menu?.link || path === menu?.link + "/"
                          ? "text-transparent font-semibold"
                          : ""
                      }`}
                    >
                      {menu.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="w-7 flex justify-end">
              <DarkModeSwitch
                checked={
                  theme === undefined ? true : theme === "dark" ? true : false
                }
                onChange={toggleDarkMode}
                size={19}
              />
            </div>
            <div
              className={`md:hidden  menu_icon flex flex-col items-start my-collapsible__toggle ${
                openMenu && "change"
              }`}
              onClick={() => {
                toggle();
                toggleMenu();
              }}
            >
              <div className="bar1 bg-black dark:bg-white"></div>
              <div className="bar2 bg-black dark:bg-white"></div>
              <div className="bar3 bg-black dark:bg-white"></div>
            </div>
          </div>
        </div>
        <SlideToggle duration={500} toggleEvent={toggleEvent} collapsed>
          {({ setCollapsibleElement }) => (
            <div className={`${width > 768 && "hidden"}`}>
              <div
                className={`transition-all containerCustom my-collapsible__content `}
                ref={setCollapsibleElement}
              >
                <ul className="pt-5 ">
                  {menuList.map((menu, idx) => (
                    <Link
                      to={menu?.link}
                      onClick={() => {
                        toggle();
                        toggleMenu();
                      }}
                      key={idx}
                    >
                      <li
                        key={idx}
                        className={`py-1 px-4 block w-full capitalize rounded-lg overflow-hidden ${
                          path === menu?.link || path === menu?.link + "/"
                            ? "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white"
                            : "active:bg-gray-300 dark:active:bg-gray-600"
                        }`}
                      >
                        {menu.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </SlideToggle>
      </div>
    </React.Fragment>
  );
}

import React, { useState } from "react";
import logo from "../assets/homepage/oasis-logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { GoMoon } from "react-icons/go";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [active, setActive] = useState('');
  const { theme, toggleThemes } = useTheme();

  const handleTheme = () => {
    toggleThemes();
  };

  const logout = () => {
    // localStorage.removeItem("user");
    // localStorage.removeItem("token");
    return window.location.href = "/";
  };

  return (
    <>
      <div className={`${navbarActive ? "block" : "hidden"
            } md:block fixed w-[300px] z-200 px-4 py-4 h-screen`}>
        <div
          className={`${navbarActive ? "block" : "hidden"
            }  bg-[#FAFAFB] w-[270px] h-full py-8 px-4 top-4 left-4 mb-6 z-200 rounded-xl md:block text-[#16151C]`}
        >
          <div className="flex flex-col">
            <section className="">
              <div className="flex gap-2">
                <img
                  src={logo}
                  alt="Oasis Logo"
                  width="50"
                  className="rounded-xl"
                />
                <h1 className="font-lexend text-center font-bold mt-[15px]">
                  Oasis People HRM
                </h1>
              </div>
            </section>
            <section className="mt-10">
              <nav>
                <ul className="flex flex-col gap-2">
                  <NavLink
                    to="/dashboard"
                    style={({ isActive }) => {
                      isActive ? setActive('dashboard') : null;
                      return {
                        backgroundColor: isActive ? "#F3F2FB" : "",
                        color: isActive ? "#7152F3" : "",
                        borderRadius: "10px",
                        fontWeight: isActive ? 800 : 100,
                      };
                    }}
                  >
                    <div className="flex">
                      {active === 'dashboard' && (
                        <div className="bg-[#7152F3] inline-block h-[65px] w-1 rounded-lg"></div>
                      )}
                      <li
                        className={`flex gap-4 text-l font-lexend hover:text-[#7152F3] hover:cursor-pointer p-[20px]`}
                      >
                        <MdOutlineDashboard className="mt-[1px] text-xl" />{" "}
                        Dashboard
                      </li>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/employees"
                    style={({ isActive }) => {
                      isActive ? setActive('employees') : null;
                      return {
                        backgroundColor: isActive ? "#F3F2FB" : "",
                        color: isActive ? "#7152F3" : "",
                        borderRadius: "10px",
                        fontWeight: isActive ? 800 : 100,
                      };
                    }}
                  >
                    <div className="flex">
                      {active === 'employees' && (
                        <div className="bg-[#7152F3] inline-block h-[65px] w-1 rounded-lg"></div>
                      )}
                      <li className="flex gap-4 text-l font-lexend hover:text-[#7152F3] hover:cursor-pointer p-[20px]">
                        <GoPeople className="mt-[1px] text-xl" /> All Employess
                      </li>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/departments"
                    style={({ isActive }) => {
                      isActive ? setActive('departments') : null;
                      return {
                        backgroundColor: isActive ? "#F3F2FB" : "",
                        color: isActive ? "#7152F3" : "",
                        borderRadius: "10px",
                        fontWeight: isActive ? 800 : 100,
                      };
                    }}
                  >
                    <div className="flex">
                      {active === 'departments' && (
                        <div className="bg-[#7152F3] inline-block h-[65px] w-1 rounded-lg"></div>
                      )}
                      <li className="flex gap-4 text-l font-lexend hover:text-[#7152F3] hover:cursor-pointer p-[20px]">
                        <FaUsersViewfinder className="mt-[1px] text-xl" /> All
                        Departments
                      </li>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/attendance"
                    style={({ isActive }) => {
                      isActive ? setActive('attendance') : null;
                      return {
                        backgroundColor: isActive ? "#F3F2FB" : "",
                        color: isActive ? "#7152F3" : "",
                        borderRadius: "10px",
                        fontWeight: isActive ? 800 : 100,
                      };
                    }}
                  >
                    <div className="flex">
                      {active === 'attendance' && (
                        <div className="bg-[#7152F3] inline-block h-[65px] w-1 rounded-lg"></div>
                      )}
                      <li className="flex gap-4 text-l font-lexend hover:text-[#7152F3] hover:cursor-pointer p-[20px]">
                        <FaRegCalendarCheck className="mt-[1px] text-xl" />{" "}
                        Attendance
                      </li>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/leaves"
                    style={({ isActive }) => {
                      isActive ? setActive('leaves') : null;
                      return {
                        backgroundColor: isActive ? "#F3F2FB" : "",
                        color: isActive ? "#7152F3" : "",
                        borderRadius: "10px",
                        fontWeight: isActive ? 800 : 100,
                      };
                    }}
                  >
                    <div className="flex">
                      {active === 'leaves' && (
                        <div className="bg-[#7152F3] inline-block h-[65px] w-1 rounded-lg"></div>
                      )}
                      <li className="flex gap-4 text-l font-lexend hover:text-[#7152F3] hover:cursor-pointer p-[20px]">
                        <FcCalendar className="mt-[1px] text-xl" /> Leaves
                      </li>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/settings"
                    style={({ isActive }) => {
                      isActive ? setActive('settings') : null;
                      return {
                        backgroundColor: isActive ? "#F3F2FB" : "",
                        color: isActive ? "#7152F3" : "",
                        borderRadius: "10px",
                        fontWeight: isActive ? 800 : 100,
                      };
                    }}
                  >
                    <div className="flex">
                      {active === 'settings' && (
                        <div className="bg-[#7152F3] inline-block h-[65px] w-1 rounded-lg"></div>
                      )}
                      <li className="flex gap-4 text-l font-lexend hover:text-[#7152F3] hover:cursor-pointer p-[20px]">
                        <IoSettingsOutline className="mt-[1px] text-xl" />{" "}
                        Settings
                      </li>
                    </div>
                  </NavLink>
                  <li className="flex gap-4 text-l font-lexend font-thin hover:text-[#7152F3] hover:cursor-pointer p-[20px]" onClick={() => logout()}>
                    <IoIosLogOut className="mt-[1px] text-xl" /> Signout
                  </li>
                </ul>
              </nav>
            </section>
            <section className="bottom-5 fixed w-[230px] h-[60px] rounded-xl bottom-10 flex justify-center items-center">
              <div className="w-full h-full rounded-xl">
                <div className="flex bg-[#F6F6F7] justify-between w-full h-full rounded-xl">
                  <div onClick={() => handleTheme()} style={{ backgroundColor: `${theme === 'light' ? '#7152F3' : '#F6F6F7'}`, color: `${theme === 'light' ? 'white' : ''}` }} className={`w-[50%] ${theme === 'light' ? 'rounded-xl' : null} rounded-tl-xl rounded-bl-xl flex justify-center gap-4 items-center text-l hover:text-[#7152F3] font-light hover:cursor-pointer`}><CiLight className="text-xl" /> Light</div>
                  <div onClick={() => handleTheme()} style={{ backgroundColor: `${theme === 'dark' ? '#7152F3' : '#F6F6F7'}`, color: `${theme === 'dark' ? 'white' : ''}` }} className={`w-[50%] ${theme === 'dark' ? 'rounded-xl' : null} flex justify-center rounded-tr-xl rounded-br-xl gap-4 items-center text-l hover:text-[#7152F3] font-light hover:cursor-pointer`}><GoMoon className="text-xl" /> Dark</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div
        onClick={() => setNavbarActive(!navbarActive)}
        className="inline-block bg-red-700"
      >
        <div className={`md:hidden w-[30px] ${navbarActive ? "hidden" : null}`}>
          <MdOutlineKeyboardDoubleArrowRight className="text-4xl" />
        </div>
        <div
          className={`md:hidden w-[30px] ${navbarActive ? "ml-[290px]" : "ml-0"
            } ${!navbarActive ? "hidden" : null}`}
        >
          <MdOutlineKeyboardDoubleArrowLeft className="text-4xl" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EmployeeProfile from "../../components/EmployeeProfile/EmployeeProfile.jsx";
import { SlBriefcase } from "react-icons/sl";
import { HiOutlineEnvelope } from "react-icons/hi2"; import { PiPencilSimpleLineLight } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md"; import { IoMdPerson } from "react-icons/io";
import { LuCalendarCheck } from "react-icons/lu"; import { IoNewspaperOutline } from "react-icons/io5";
import { LiaClipboardCheckSolid } from "react-icons/lia"; import { Link } from "react-router-dom";

export default function EmployeePage() {
  const employeeData = useLoaderData();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const [activeLink, setActiveLink] = useState(1);

  const handleChangeLink = (newActiveLink) => {
    setActiveLink(newActiveLink);
  }

  return (
    <>
      <div className="mx-1 mt-7 md:max-w-screen-lg md:ml-72 md:mr-5">
        <div className="border rounded-lg border-gray-300">
          {/* Employee Names + Edit Button */}

          <div>
            {/* Employee Profile */}
            <div className="md:flex md:justify-between md:items-center">
              <div className="p-4 flex justify-between items-center">
                {/* Employee Image */}
                <div className="border border-gray-100 rounded-lg overflow-clip">
                  <img className="block mx-auto h-28 p-1 rounded-2xl sm:max-0 sm:shrink-0"
                       src={employeeData.image} alt="Jane Doe"/>
                </div>
                {/* Employee Email-Title */}
                <div className="font-poppins *:pb-2">
                  <h1 className="text-xl font-semibold text-gray-900">{`${employeeData.firstName} ${employeeData.lastName}`}</h1>
                  <div className="flex space-x-2 items-center">
                    <SlBriefcase className="text-gray-900 text-xl"/>
                    <p className="font-medium text-sm text-gray-900">{employeeData.profile[0].designation}</p>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <HiOutlineEnvelope className="text-gray-800 text-xl"/>
                    <p className="font-medium text-sm text-gray-800">{employeeData.profile[0].workEmail}</p>
                  </div>
                </div>
              </div>
              {/* Edit Button */}
              <div className="flex justify-end pr-4 pb-6 md:self-end">
                <button className="bg-[#7152f3] rounded-lg">
                  <div className="py-2 px-3">
                    <PiPencilSimpleLineLight className="inline-flex items-center mr-2 text-xl text-white"/>
                    <span className="font-lexend text-white text-sm font-thin">Edit Profile</span>
                  </div>
                </button>
              </div>
            </div>
            {/* hr line Separator */}
            <hr className="mx-4 bg-gray-300"/>
          </div>
          {/* Employee Element Links + Accompanying Element Details */}
          <div className="pt-0 md:flex md:justify-between md:items-start md:mt-5">
            {/* Employee Links Toggle Button for Mobile */}
            <div className="md:hidden mx-3.5 border-gray-200 rounded-lg bg-[#7152f3] focus:border-blue-500
            focus:ring-blue-500">
              <div className="flex justify-between items-center py-3 font-lexend text-white">
                <span className="pl-4 text-sm">Profile</span>
                <button onClick={showMenu}><MdKeyboardArrowDown className="text-xl"/></button>
              </div>
            </div>
            {/* Drop down Element Links Content Component */}
            <div className={`border border-b-gray-300 rounded-lg mx-3.5 shadow-lg
           ${isMenuOpen ? "transition-all ease-out duration-150" : "hidden md:block"}`}>
              <div className="*:pl-4 md:*:pr-20 *:font-lexend *:text-gray-800 *:py-3 cursor-pointer overflow-hidden">
                <div role="button" onClick={() => handleChangeLink(1)}
                     className={`${activeLink === 1 ? 'bg-[#7152f3] *:text-white hover:bg-[#7152f3]': ''}
                      hover:bg-gray-100 md:whitespace-nowrap`}>
                  <Link to={`employee/1/profile`}>
                    <IoMdPerson className="inline-flex mr-2 text-xl items-center"/>
                    <span className="text-sm font-medium">Profile</span>
                  </Link>
                </div>
                <div role="button" onClick={() => handleChangeLink(2)}
                     className={`${activeLink === 2 ? 'bg-[#7152f3] overflow-hidden *:text-white hover:bg-[#7152f3]': ''}
                      hover:bg-gray-100 md:whitespace-nowrap`}>
                  <Link to={`employee/:id/attendance`}>
                    <LuCalendarCheck className="inline-flex mr-2 text-xl items-center"/>
                    <span className="text-sm font-medium">Attendance</span>
                  </Link>
                </div>
                <div role="button" onClick={() => handleChangeLink(3)}
                     className={`${activeLink === 3 ? 'bg-[#7152f3] *:text-white hover:bg-[#7152f3]': ''}
                      hover:bg-gray-100 md:whitespace-nowrap`}>
                  <Link to={`employee/:id/projects`}>
                    <IoNewspaperOutline className="inline-flex mr-2 text-xl items-center"/>
                    <span className="text-sm font-medium">Projects</span>
                  </Link>
                </div>
                <div role="button" onClick={() => handleChangeLink(4)}
                     className={`${activeLink === 4 ? 'bg-[#7152f3] *:text-white hover:bg-[#7152f3]': ''}
                      hover:bg-gray-100 md:whitespace-nowrap`}>
                  <Link to={`employee/:id/attendance`}>
                    <LiaClipboardCheckSolid className="inline-flex mr-2 text-xl items-center"/>
                    <span className="text-sm font-medium">Leave</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Accompanying Element Details Default to Children later */}
            <div className="mx-4">
              <EmployeeProfile employeeDetails={employeeData}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
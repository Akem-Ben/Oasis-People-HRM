import { MdOutlineWavingHand } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import profileImg from "../assets/navbar/profile.jpeg";
import { useState } from "react";
// import { IoIosArrowUp } from "react-icons/io";
{
  /* <IoIosArrowUp /> */
}

const NavBar = () => {
    const [searchItem, setSearchItem] = useState('')

  return (
    <>
      <div className="lg:ml-[290px] md:ml-[290px] sm:ml-0 p-1">
        <div className="flex justify-between sm:justify-around">
          <section className="w-[50%] md:w-[30%] h-[10%]">
            <div className="flex gap-2 font-lexend font-bold">
              Hello Robert{" "}
              <MdOutlineWavingHand className="mt-1 text-[#A86232]" />
            </div>
            <div className="text-sm font-thin">Good Morning</div>
          </section>
          <section className="flex w-[80%] md:w-[40%] lg:w-[100%] gap-4 justify-normal md:justify-normal sm:justify-normal lg:justify-end">
            <div className="justify-center items-center w-[60%] md:w-[100%] sm:w-[100%] lg:w-[50%]">
              <input placeholder="Search" className="border p-2 rounded-lg w-[100%] md:w-[100%] sm:w-[100%] flex" />
            </div>
            <div className="h-[70%] px-2 py-2 mt-1 bg-[#F6F6F6] rounded-lg justify-center items-center hidden md:hidden lg:block">
              <IoNotificationsOutline className="text-2xl" />
            </div>
            <div className="gap-2 rounded-lg border p-1 hidden md:hidden lg:flex">
            <div className="flex gap-2 rounded-lg hover:cursor-pointer">
              <div className="">
                <img
                  src={profileImg}
                  alt="profile image"
                  width="45"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-lexend font-bold">Robert Allen</span>{" "}
                <span className="text-sm font-thin">HR Manager</span>
              </div>
              </div>
              <div className="flex justify-center items-center hover:cursor-pointer">
                <IoIosArrowDown />
              </div>
            </div>
          </section>
        </div>
            <div className="bg-green-500 right-0 flex top-0 w-[20%] justify-end">p</div>
      </div>
    </>
  );
};


export default NavBar;

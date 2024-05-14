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
      <div className="lg:ml-[290px] md:ml-[290px] sm:ml-0 p-4">
        <div className="flex justify-between sm:justify-around">
          <section>
            <div className="flex gap-2 font-lexend font-bold">
              Hello Robert{" "}
              <MdOutlineWavingHand className="mt-1 text-[#A86232]" />
            </div>
            <div className="text-sm font-thin">Good Morning</div>
          </section>
          <section className="flex w-[80%] justify-around">
            <div className="justify-center items-center w-[70%] hidden sm:flex md:flex lg:flex">
              <input placeholder="Search" className="border p-2 rounded-lg w-full md:w-[50%] flex" />
            </div>
            <div className="px-3 py-2 bg-[#F6F6F6] rounded-lg flex justify-center items-center">
              <IoNotificationsOutline className="text-2xl" />
            </div>
            <div className="flex gap-2 rounded-lg border p-1">
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
      </div>
    </>
  );
};

// const NavBar = () => {
//     const [searchItem, setSearchItem] = useState('');

//     return (
//         <>
//             <div className="lg:ml-[290px] md:ml-[290px] sm:ml-0 p-4">
//                 <div className="flex flex-col sm:flex-row justify-between items-center sm:justify-around">
//                     <section>
//                         <div className="flex gap-2 font-lexend font-bold">
//                             Hello Robert{" "}
//                             <MdOutlineWavingHand className="mt-1 text-[#A86232]" />
//                         </div>
//                         <div className="text-sm font-thin">Good Morning</div>
//                     </section>
//                     <section className="flex w-full sm:w-[80%] justify-around mt-4 sm:mt-0">
//                         <div className="justify-center items-center w-full sm:w-[60%]">
//                             <input
//                                 placeholder="Search"
//                                 className="border p-2 rounded-lg w-full flex"
//                             />
//                         </div>
//                         <div className="px-3 py-2 bg-[#F6F6F6] rounded-lg flex justify-center items-center">
//                             <IoNotificationsOutline className="text-2xl" />
//                         </div>
//                         <div className="flex gap-2 rounded-lg border p-1">
//                             <div className="flex gap-2 rounded-lg hover:cursor-pointer">
//                                 <div className="">
//                                     <img
//                                         src={profileImg}
//                                         alt="profile image"
//                                         width="45"
//                                         className="rounded-lg"
//                                     />
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <span className="font-lexend font-bold">Robert Allen</span>{" "}
//                                     <span className="text-sm font-thin">HR Manager</span>
//                                 </div>
//                             </div>
//                             <div className="flex justify-center items-center hover:cursor-pointer">
//                                 <IoIosArrowDown />
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         </>
//     );
// };


export default NavBar;

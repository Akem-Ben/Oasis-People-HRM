import { useState } from "react";
import { IoMdPerson } from "react-icons/io"; import { SlBriefcase } from "react-icons/sl";
import { IoNewspaperOutline } from "react-icons/io5"; import { MdLockOutline } from "react-icons/md";

function NavigationTabs(){
  const [activeTab, setActiveTab] = useState(1);

  const handleChangeTab = (newActiveTab) => {
    setActiveTab(newActiveTab);
  }

  return (
    <>
      {/* Scrollable Navigation Employee Information Links */}
      <div className="w-full mx-auto">
        <ul className="flex flex-nowrap items-center space-x-3 overflow-x-auto pb-4 snap-x snap-mandatory">
          <li onClick={() => handleChangeTab(1)}
              className={`${activeTab === 1 ? 'pb-1 border-b-2 border-b-[#7152f3]' : ''}
          font-lexend whitespace-nowrap hover:border-0 cursor-pointer snap-center snap-always`}>
            <IoMdPerson
              className={`${activeTab === 1 ? 'text-[#7152f3]' : 'text-gray-500'} inline-flex items-center mr-3 text-2xl`}/>
            <span className={`${activeTab === 1 ? 'text-[#7152f3]' : 'text-gray-500'} text-sm font-semibold`}>Personal Information</span>
          </li>
          <li className={`${activeTab === 2 ? 'pb-1 border-b-2 border-b-[#7152f3]' : ''}
          font-lexend whitespace-nowrap hover:border-0 cursor-pointer snap-center snap-always`}
              onClick={() => handleChangeTab(2)}>
            <SlBriefcase
              className={`${activeTab === 2 ? 'text-[#7152f3]' : 'text-gray-500'} inline-flex items-center mr-3 text-2xl`}/>
            <span className={`${activeTab === 2 ? 'text-[#7152f3]' : 'text-gray-500'} text-sm font-semibold`}>Professional Information</span>
          </li>
          <li role='button' className={`${activeTab === 3 ? 'pb-1 border-b-2 border-b-[#7152f3]' : ''}
          font-lexend whitespace-nowrap hover:border-0 cursor-pointer snap-center snap-always`}
              onClick={() => handleChangeTab(3)}>
            <IoNewspaperOutline
              className={`${activeTab === 3 ? 'text-[#7152f3]' : 'text-gray-500'} inline-flex items-center mr-3 text-2xl`}/>
            <span
              className={`${activeTab === 3 ? 'text-[#7152f3]' : 'text-gray-500'} text-sm font-semibold`}>Documents</span>
          </li>
          <li className={`${activeTab === 4 ? 'pb-1 border-b-2 border-b-[#7152f3]' : ''}
          font-lexend whitespace-nowrap hover:border-0 cursor-pointer snap-center snap-always`}
              onClick={() => handleChangeTab(4)}>
            <MdLockOutline
              className={`${activeTab === 4 ? 'text-[#7152f3]' : 'text-gray-500'} inline-flex items-center mr-3 text-2xl`}/>
            <span className={`${activeTab === 4 ? 'text-[#7152f3]' : 'text-gray-500'} text-sm font-semibold`}>Account Access</span>
          </li>
        </ul>
      </div>

      {/* Separator */}
      <hr className="pt-4"/>

      {/* Navigation Conditioned Content */}
      <div>
        {/* Personal Information - Grid 1 Side */}
        <div className={`${activeTab === 1 ? 'block' : 'hidden'} py-4 grid grid-cols-2 gap-x-8`}>
          <div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">First Name</h3>
              <p className="text-sm font-lexend">Brooklyn</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Mobile Number</h3>
              <p className="text-sm font-lexend">(707) 555-0122</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Date of Birth</h3>
              <p className="text-sm font-lexend">July, 14, 1995</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Gender</h3>
              <p className="text-sm font-lexend">Female</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Address</h3>
              <p className="text-sm font-lexend">2464 Royal Ln. Mesa, New Jersey</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">State</h3>
              <p className="text-sm font-lexend">United State</p>
            </div>
          </div>
          {/* Personal Information Grid Two Side */}
          <div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Last Name</h3>
              <p className="text-sm font-lexend">Simmons</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Email Address</h3>
              <p className="text-sm font-lexend">brooklyn.s@example.com</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Martial Status</h3>
              <p className="text-sm font-lexend">Married</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Nationality</h3>
              <p className="text-sm font-lexend">America</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">City</h3>
              <p className="text-sm font-lexend">California</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Zip Code</h3>
              <p className="text-sm font-lexend">35624</p>
            </div>
          </div>
        </div>
        {/* Professional Information Grid 1 Side */}
        <div className={`${activeTab === 2 ? 'block' : 'hidden'} py-4 grid grid-cols-2 gap-x-8`}>
          <div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Employee ID</h3>
              <p className="text-sm font-lexend">879912390</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Employee Type</h3>
              <p className="text-sm font-lexend">Office</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Department</h3>
              <p className="text-sm font-lexend">Project Manager</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Working Days</h3>
              <p className="text-sm font-lexend">5 Days</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Office Location</h3>
              <p className="text-sm font-lexend">2464 Royal Ln. Mesa, New Jersey</p>
            </div>
          </div>
          {/* Professional Information Grid Two Side */}
          <div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">User ame</h3>
              <p className="text-sm font-lexend">brooklyn_simmons</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Email Address</h3>
              <p className="text-sm font-lexend">brooklyn.s@example.com</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Designation</h3>
              <p className="text-sm font-lexend">Project Manager</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Joining Date</h3>
              <p className="text-sm font-lexend">July 10, 2022</p>
            </div>
          </div>
        </div>
        {/* Documents - Grid Section - For Future Refactoring */}
        <div className={`${activeTab === 3 ? 'block' : 'hidden'}`}>
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Tab 3 Content</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
              quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
              harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
              Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
              earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
              aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
              aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
              molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum.
            </p>
          </div>
        </div>
        {/* Account Access Grid 1 Side */}
        <div className={`${activeTab === 4 ? 'block' : 'hidden'} py-4 grid grid-cols-2 gap-x-8`}>
          <div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Email Address</h3>
              <p className="text-sm font-lexend">brooklyn@example.com</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Skype ID</h3>
              <p className="text-sm font-lexend">brooklyn_simmons</p>
            </div>
          </div>
          {/* Account Access Grid Two Side */}
          <div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Slack ID</h3>
              <p className="text-sm font-lexend">brooklyn_simmons</p>
            </div>
            <div className="pb-4">
              <h3 className="font-lexend text-xs text-gray-400 pb-1">Github ID</h3>
              <p className="text-sm font-lexend">brooklyn_simmons</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {NavigationTabs};


























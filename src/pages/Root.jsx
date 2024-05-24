import {Outlet} from "react-router-dom";
import Sidebar from "../components/SideBar.jsx";
import Navbar from "../components/Navbar.jsx";

function Root() {
  return (
    <div className=''>
      <Sidebar />
      <Navbar />
      {/* all the other HR features */}
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Root;
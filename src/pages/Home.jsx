import React from 'react';
import {Outlet} from "react-router-dom";
import SideBar from '../components/SideBar';
import NavBar from '../components/Navbar';

function Home() {
  return (
    <div className=''>
      <SideBar />
      <NavBar />
      {/* all the other HR features */}
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Home;
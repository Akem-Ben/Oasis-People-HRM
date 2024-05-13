import React from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/Navbar';

function Home() {
  return (
    <div className=''>
      <SideBar />
      <NavBar />
      <h1 className='ml-[100px]'>Home</h1>
    </div>
  )
}

export default Home;
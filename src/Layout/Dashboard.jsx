
import React from 'react';// Import the sidebar component
import { Outlet } from 'react-router-dom';
// import LeftSidebar from '../AdminComponent/LeftSideBar';
import SideBar from '../Components/SideBar';

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            {/* Left Sidebar */}
            <div className='hidden md:block'>
            <SideBar />
            </div>
           

            {/* Main content area */}
            <div className="flex-grow p-6 bg-gray-300 text-gray-700 overflow-y-auto min-h-screen  ">
                {/* The content of the current route */}
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
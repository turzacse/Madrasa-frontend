import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaCogs, FaAddressCard, FaMoneyBill, FaClipboardList, FaMosque } from 'react-icons/fa'; // Example icons
// import LogoText from '../Components/LogoText.jsx/LogoText';
import { FaDiagramProject, FaMessage, FaRegMessage } from 'react-icons/fa6';
import { IoPeopleSharp } from 'react-icons/io5';

const SideBar = () => {
    const Links = [
        // { key: 1, title: 'Dashboard', icon: <FaHome />, address: '/admin/dashboard' },
        // { key: 2, title: 'Users', icon: <FaUser />, address: '/admin/users' },
        // { key: 4, title: 'Employees', icon: <IoPeopleSharp />, address: '/admin/employees' },
        // { key: 4, title: 'Instructors', icon: <IoPeopleSharp />, address: '/admin/instructors' },
        // // { key: 3, title: 'Settings', icon: <FaCogs />, address: '/admin/settings' },
        // { key: 3, title: 'Contacts', icon: <FaMessage />, address: '/admin/contacts' },
        // { key: 4, title: 'Circulars', icon: <FaAddressCard />, address: '/admin/circular' },

        // { key: 4, title: 'Projects', icon: <FaDiagramProject />, address: '/admin/projects' },
        
        { key: 1, title: 'ড্যাশবোর্ড', icon: <FaHome />, address: '/admin/dashboard' },
        { key: 6, title: 'হুজুর/শিক্ষক', icon: <FaAddressCard />, address: '/admin/teachers' },
        { key: 7, title: 'ছাত্র/শিক্ষার্থী', icon: <FaAddressCard />, address: '/admin/students' },
        { key: 2, title: 'প্রতিষ্ঠাতা/দাতা সদস্য', icon: <FaUser />, address: '/admin/founder-list' },
        { key: 3, title: 'বেতন দাতা', icon: <IoPeopleSharp />, address: '/admin/salary-donors' },
        { key: 4, title: 'অনুদান', icon: <IoPeopleSharp />, address: '/admin/development-donors' },
        { key: 5, title: 'জমা/খরচ', icon: <FaMoneyBill />, address: '/admin/expenses' },
        
        { key: 8, title: 'বোর্ডিং', icon: <FaClipboardList />, address: '/admin/boarding-managers' },


    ];

    return (
        <div className="bg-[#658BAF] text-white w-64 min-h-screen flex flex-col">
            {/* Logo */}
            <NavLink to='/' className="py-4 text-center text-md font-semibold text-yellow-300">
            {/* <img src="/logo.png" className='w-[100px] mx-auto ' alt="" /> */}
            <FaMosque className='text-4xl text-center flex justify-center w-[36px] mx-auto' />
               <p>বড়গ্রাম মোগলটুলা গোরস্থান দারুল-উলুম নূরানী ও হাফেজিয়া মাদ্রাসা। মুক্তাগাছা, ময়মনসিংহ।</p>
            </NavLink>


            {/* Navigation Links */}
            <nav className="flex-grow">
                <ul className="space-y-2 p-4">
                    {Links.map((item) => (
                        <li
                            className='uppercase'
                            key={item.key}>
                            <NavLink
                                to={item.address}
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center gap-2 p-2 text-yellow-400 bg-gray-700 rounded"
                                        : "flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
                                }
                            >
                                {item.icon} {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;
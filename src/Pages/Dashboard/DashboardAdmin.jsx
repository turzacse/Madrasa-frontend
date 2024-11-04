import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FaHome, FaUser, FaMoneyBill, FaClipboardList, IoPeopleSharp } from 'react-icons/fa';

const DashboardAdmin = () => {
    const data = [
        // { title: 'ড্যাশবোর্ড', number: 0, link: '/admin/dashboard' },
        { title: 'হুজুর/শিক্ষক', number: 2, link: '/admin/students-info' },
        { title: 'ছাত্র/শিক্ষার্থী', number: 12, link: '/admin/students-info' },
        { title: 'প্রতিষ্ঠাতা/দাতা সদস্য', number: 4, link: '/admin/founder-list' },
        { title: 'বেতন দাতা', number: 20, link: '/admin/salary-donors' },
        { title: 'অনুদান', number: 40, link: '/admin/development-donors' },
        { title: 'জমা/খরচ', number: '--', link: '/admin/expenses' },
        
        { title: 'বোর্ডিং', number: "--", link: '/admin/boarding-managers' },
    ];

    const colors = [
        '#658baf', '#123955', '#658BAF', '#f28d35', '#f78e69', '#4d7c94', '#FBC02D', '#658baf'
    ];

    return (
        <div className='p-4'>
            <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                {
                    data.map((item, i) =>
                        <NavLink 
                            key={i}
                            to={item?.link}
                            className={`rounded-lg h-[180px] p-4 text-white`}
                            style={{
                                background: `${colors[i]}`
                            }}
                        >
                            <div>
                                <h3 className='text-2xl uppercase font-semibold'>{item.title}</h3>
                                <p className='text-xl font-medium mt-2'>{item.number}</p>
                            </div>
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default DashboardAdmin;

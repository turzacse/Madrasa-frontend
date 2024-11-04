import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';

const Teachers = () => {
    const teachers = [
        { id: 1, name: 'মাওলানা আব্দুল করিম', subject: 'ইসলামী শিক্ষা', address: 'ঢাকা, বাংলাদেশ', phone: '০১৭১২৩৪৫৬৭৮' },
        { id: 2, name: 'মাওলানা হাফিজুর রহমান', subject: 'কুরআন তাফসীর', address: 'চট্টগ্রাম, বাংলাদেশ', phone: '০১৮৯৮৭৬৫৪৩২' },
    ];

    return (
        <div className="py-4">
            <div className='flex justify-between  mb-4'>
            <h2 className="font-bold text-2xl mb-4">মাদ্রাসার শিক্ষক</h2>
            <button className='btn bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-1'> <IoMdAddCircle className='text-2xl' /> নতুন নিবন্ধন করুন</button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-[#1771c5] text-white rounded-lg border border-gray-300">
                    <thead>
                        <tr className='bg-yellow-300 text-gray-700'>
                            <th className="px-4 py-2 border">নাম</th>
                            <th className="px-4 py-2 border">বিষয়</th>
                            <th className="px-4 py-2 border">ঠিকানা</th>
                            <th className="px-4 py-2 border">ফোন নাম্বার</th>
                            <th className="px-4 py-2 border">ক্রিয়া</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map((teacher) => (
                            <tr key={teacher.id} className="text-center">
                                <td className="px-4 py-2 border">{teacher.name}</td>
                                <td className="px-4 py-2 border">{teacher.subject}</td>
                                <td className="px-4 py-2 border">{teacher.address}</td>
                                <td className="px-4 py-2 border">{teacher.phone}</td>
                                <td className="px-4 py-2 border flex justify-center gap-2">
                                    <button className="bg-yellow-500 text-black px-2 py-1 rounded mr-2">দেখুন</button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">ডিলিট</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            
        </div>
    );
};

export default Teachers;

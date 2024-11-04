import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';

const SalaryDoners = () => {
    const doners = [
        { id: 1, name: 'আবদুল করিম', address: 'ঢাকা, বাংলাদেশ', phone: '০১৭১২৩৪৫৬৭৮', type: 'মাসিক', amount: '৫০০', startDate: 'জানুয়ারি, ২০২২' },
        { id: 2, name: 'মোহাম্মদ হাসান', address: 'চট্টগ্রাম, বাংলাদেশ', phone: '০১৮৯৮৭৬৫৪৩২', type: 'অর্ধ বার্ষিক', amount: '১০০০', startDate: 'জুন, ২০২৩' },
        { id: 3, name: 'আব্দুল মজিদ', address: 'রাজশাহী, বাংলাদেশ', phone: '০১৯৭৬৫৪৩২১০', type: 'বার্ষিক', amount: '২০০০', startDate: 'ডিসেম্বর, ২০২১' },
        { id: 4, name: 'জহিরুল ইসলাম', address: 'খুলনা, বাংলাদেশ', phone: '০১৬৭১২৩৪৫৬৭', type: 'মাসিক', amount: '২০০', startDate: 'ফেব্রুয়ারি, ২০২৪' },
        { id: 5, name: 'সাইফুল ইসলাম', address: 'বরিশাল, বাংলাদেশ', phone: '০১৭৮৭৬৫৪৩২১', type: 'বার্ষিক', amount: '১০০০', startDate: 'মার্চ, ২০২২' },
    ];

    return (
        <div className="py-4">
            

            <div className='flex justify-between mb-4'>
            <h2 className="font-bold text-2xl mb-4">বেতন দাতাগণ</h2>
            <button className='btn bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-1'> <IoMdAddCircle className='text-2xl' /> নতুন নিবন্ধন করুন</button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-[#1771c5] text-white rounded-lg border border-gray-300">
                    <thead>
                        <tr className='bg-yellow-300 text-gray-700'>
                            <th className="px-4 py-2 border">নাম</th>
                            <th className="px-4 py-2 border">ঠিকানা</th>
                            <th className="px-4 py-2 border">ফোন নাম্বার</th>
                            <th className="px-4 py-2 border">ধরন</th>
                            <th className="px-4 py-2 border">পরিমাণ (টাকা)</th>
                            <th className="px-4 py-2 border">প্রদানের শুরুর সময়</th>
                            <th className="px-4 py-2 border">ক্রিয়া</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doners.map((doner) => (
                            <tr key={doner.id} className="text-center">
                                <td className="px-4 py-2 border">{doner.name}</td>
                                <td className="px-4 py-2 border">{doner.address}</td>
                                <td className="px-4 py-2 border">{doner.phone}</td>
                                <td className="px-4 py-2 border">{doner.type}</td>
                                <td className="px-4 py-2 border">{doner.amount}</td>
                                <td className="px-4 py-2 border">{doner.startDate}</td>
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

export default SalaryDoners;

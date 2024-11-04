import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';

const Founder = () => {
    const founders = [
        { id: 1, name: 'মোঃ আব্দুল করিম', designation: 'প্রধান উপদেষ্টা', address: 'ঢাকা, বাংলাদেশ', phone: '০১৭১২৩৪৫৬৭৮' },
        { id: 2, name: 'মোঃ সাইফুল ইসলাম', designation: 'সহ-প্রতিষ্ঠাতা', address: 'চট্টগ্রাম, বাংলাদেশ', phone: '০১৮৯৮৭৬৫৪৩২' },
        { id: 3, name: 'আব্দুর রহমান', designation: 'সম্পাদক', address: 'কুমিল্লা, বাংলাদেশ', phone: '০১৬৭১২৩৪৫৬৭' },
        { id: 4, name: 'জহিরুল হক', designation: 'অর্থ পরিচালক', address: 'রাজশাহী, বাংলাদেশ', phone: '০১৯৭৬৫৪৩২১০' },
        { id: 5, name: 'সুলতান মাহমুদ', designation: 'কার্যকরী সদস্য', address: 'খুলনা, বাংলাদেশ', phone: '০১৭৮৭৬৫৪৩২১' },
    ];

    return (
        <div className="py-4">
           

            <div className='flex justify-between mb-4'>
            <h2 className="font-bold text-2xl mb-4">প্রতিষ্ঠাতা / দাতা সদস্যগণ</h2>
            <button className='btn bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-1'> <IoMdAddCircle className='text-2xl' /> নতুন নিবন্ধন করুন</button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-[#1771c5] text-white rounded-lg border border-gray-300">
                    <thead>
                        <tr className='bg-yellow-300 text-gray-700'>
                            <th className="px-4 py-2 border">নাম</th>
                            <th className="px-4 py-2 border">পদবি</th>
                            <th className="px-4 py-2 border">ঠিকানা</th>
                            <th className="px-4 py-2 border">ফোন নাম্বার</th>
                            <th className="px-4 py-2 border">ক্রিয়া</th>
                        </tr>
                    </thead>
                    <tbody>
                        {founders.map((founder) => (
                            <tr key={founder.id} className="text-center">
                                <td className="px-4 py-2 border">{founder.name}</td>
                                <td className="px-4 py-2 border">{founder.designation}</td>
                                <td className="px-4 py-2 border">{founder.address}</td>
                                <td className="px-4 py-2 border">{founder.phone}</td>
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

export default Founder;

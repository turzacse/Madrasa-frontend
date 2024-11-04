import React from 'react';

const HomePage = () => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <header className="bg-[#123955] text-white text-center py-6">
                <h1 className="text-4xl font-bold">বড়গ্রাম মোগলটুলা গোরস্থান</h1>
                <h2 className="text-2xl font-semibold">দারুল-উলুম নূরানী ও হাফেজিয়া মাদ্রাসা</h2>
                <p className="mt-2">মুক্তাগাছা, ময়মনসিংহ</p>
            </header>
            <img src="/logo.png" className='w-[200px] mx-auto ' alt="" /> 
            
            <main className="py-8 px-4">
                <section className="text-center mb-6">
                    <h3 className="text-3xl font-bold mb-4">স্বাগতম!</h3>
                    <p className="text-lg mb-4">আমাদের মাদ্রাসার সম্পর্কে আরও জানুন এবং শিক্ষার্থীদের জন্য নিবন্ধন করুন।</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        নতুন নিবন্ধন করুন
                    </button>
                </section>
                
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-400 rounded-md p-4 shadow-2xl">
                        <h4 className="text-xl font-semibold">শিক্ষার্থীদের জন্য</h4>
                        <p>নতুন শিক্ষার্থীদের জন্য নিবন্ধন প্রক্রিয়া।</p>
                        <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                            আরও জানুন
                        </button>
                    </div>
                    <div className="bg-gray-400 rounded-md p-4 shadow-2xl">
                        <h4 className="text-xl font-semibold">শিক্ষকবৃন্দ</h4>
                        <p>আমাদের শিক্ষকদের তালিকা এবং তাদের প্রোফাইল।</p>
                        <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                            আরও জানুন
                        </button>
                    </div>
                    <div className="bg-gray-400 rounded-md p-4 shadow-2xl">
                        <h4 className="text-xl font-semibold">যোগাযোগ</h4>
                        <p>যোগাযোগের জন্য আমাদের তথ্য।</p>
                        <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                            আরও জানুন
                        </button>
                    </div>
                </section>
            </main>
            
            <footer className="bg-[#123955] text-white text-center py-4">
                <p>&copy; 2024 বড়গ্রাম মোগলটুলা গোরস্থান। সকল অধিকার সংরক্ষিত।</p>
            </footer>
        </div>
    );
};

export default HomePage;

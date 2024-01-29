import React from 'react';
import Navbar from '../component/Navbar';
import Faqquestion from '../component/Faqquestion';

const Faq = () => {
  return (
    <>
    <div className="bg-tahiti text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 font-sans">FAQ</h1>
      </div>
    </div>
    <Faqquestion/>
    </>
  );
};

export default Faq;

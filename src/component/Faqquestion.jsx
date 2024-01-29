import React, { useState, useRef } from 'react';
import { courseContent, about, receipt, personal, redemption, photo,  } from '../../data';

const Faqquestion = () => {
  const [showContent, setShowContent] = useState({});

  const toggleContent = (moduleId) => {
    setShowContent((prevShowContent) => ({
      ...prevShowContent,
      [moduleId]: !prevShowContent[moduleId],
    }));
  };

  const overviewRef = useRef(null);
  const overviewRef1 = useRef(null);
  const overviewRef2 = useRef(null);
  const overviewRef3 = useRef(null);
  const overviewRef4 = useRef(null);
  const overviewRef5 = useRef(null);



  const scrollToOverview = () => {
    if (overviewRef.current) {
      overviewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOverview1 = () => {
    if (overviewRef1.current) {
      overviewRef1.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOverview2 = () => {
    if (overviewRef2.current) {
      overviewRef2.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOverview3 = () => {
    if (overviewRef3.current) {
      overviewRef3.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOverview4 = () => {
    if (overviewRef4.current) {
      overviewRef4.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOverview5 = () => {
    if (overviewRef5.current) {
      overviewRef5.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
      <div className='flex flex-row justify-between text-tahiti font-extrabold py-10 text-lg'>
        <h3 onClick={scrollToOverview} style={{ cursor: 'pointer' }}>LOGGING INTO PEPPER PERKS</h3>
        <h3 onClick={scrollToOverview1} style={{ cursor: 'pointer' }}>ABOUT THE PROMOTION</h3>
        <h3 onClick={scrollToOverview2} style={{ cursor: 'pointer' }}>RECEIPT UPLOAD QUESTIONS</h3>
        <h3 onClick={scrollToOverview3} style={{ cursor: 'pointer' }}>PERSONAL INFORMATION QUESTIONS</h3>
        <h3 onClick={scrollToOverview4} style={{ cursor: 'pointer' }}>REDEMPTION QUESTIONS</h3>
        <h3 onClick={scrollToOverview5} style={{ cursor: 'pointer' }}>PHOTO QUESTIONS</h3>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 font-sans" ref={overviewRef}>LOGGING INTO PEPPER PERKS</h1>
      {courseContent.map((module) => (
        <div key={module.id} className="mb-6" >
          <button
            type="button"
            className="dropdown w-full flex items-center py-2 text-gray-700"
            onClick={() => toggleContent(module.id)}
          >
            {showContent[module.id] ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0 transform rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            )}
            <span
              className={`text-3xl md:text-4xl font-bold text-left font-sans hover:text-tahiti ${
                showContent[module.id] ? 'underline text-tahiti' : ''
              }`}
            >
              {module.title}
            </span>
          </button>

          {showContent[module.id] && (
            <div className="content-to-toggle px-4 py-2">
              <ul className="px-4 text-sm">
                <li>{module.desc}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 font-sans" ref={overviewRef1}>ABOUT THE PROMOTION</h1>
      {about.map((module) => (
        <div key={module.id} className="mb-6">
          <button
            type="button"
            className="dropdown w-full flex items-center py-2 text-gray-700"
            onClick={() => toggleContent(module.id)}
          >
            {showContent[module.id] ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0 transform rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            )}
            <span
              className={`text-3xl md:text-4xl font-bold text-left font-sans hover:text-tahiti ${
                showContent[module.id] ? 'underline text-tahiti' : ''
              }`}
            >
              {module.title}
            </span>
          </button>

          {showContent[module.id] && (
            <div className="content-to-toggle px-4 py-2">
              <ul className="px-4 text-sm">
                <li>{module.desc}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 font-sans" ref={overviewRef2}>RECEIPT UPLOAD QUESTIONS</h1>
      {receipt.map((module) => (
        <div key={module.id} className="mb-6">
          <button
            type="button"
            className="dropdown w-full flex items-center py-2 text-gray-700"
            onClick={() => toggleContent(module.id)}
          >
            {showContent[module.id] ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0 transform rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            )}
            <span
              className={`text-3xl md:text-4xl font-bold text-left font-sans hover:text-tahiti ${
                showContent[module.id] ? 'underline text-tahiti' : ''
              }`}
            >
              {module.title}
            </span>
          </button>

          {showContent[module.id] && (
            <div className="content-to-toggle px-4 py-2">
              <ul className="px-4 text-sm">
                {module.desc}
              </ul>
            </div>
          )}
        </div>
      ))}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 font-sans" ref={overviewRef3}>PERSONAL INFORMATION QUESTIONS</h1>
      {personal.map((module) => (
        <div key={module.id} className="mb-6">
          <button
            type="button"
            className="dropdown w-full flex items-center py-2 text-gray-700"
            onClick={() => toggleContent(module.id)}
          >
            {showContent[module.id] ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0 transform rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            )}
            <span
              className={`text-3xl md:text-4xl font-bold text-left font-sans hover:text-tahiti ${
                showContent[module.id] ? 'underline text-tahiti' : ''
              }`}
            >
              {module.title}
            </span>
          </button>

          {showContent[module.id] && (
            <div className="content-to-toggle px-4 py-2">
              <ul className="px-4 text-sm">
                <li>{module.desc}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 font-sans" ref={overviewRef4}>REDEMPTION QUESTIONS</h1>
      {redemption.map((module) => (
        <div key={module.id} className="mb-6">
          <button
            type="button"
            className="dropdown w-full flex items-center py-2 text-gray-700"
            onClick={() => toggleContent(module.id)}
          >
            {showContent[module.id] ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0 transform rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            )}
            <span
              className={`text-3xl md:text-4xl font-bold text-left font-sans hover:text-tahiti ${
                showContent[module.id] ? 'underline text-tahiti' : ''
              }`}
            >
              {module.title}
            </span>
          </button>

          {showContent[module.id] && (
            <div className="content-to-toggle px-4 py-2">
              <ul className="px-4 text-sm">
                <li>{module.desc}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 font-sans" ref={overviewRef5}>PHOTO QUESTIONS</h1>
      {photo.map((module) => (
        <div key={module.id} className="mb-6">
          <button
            type="button"
            className="dropdown w-full flex items-center py-2 text-gray-700"
            onClick={() => toggleContent(module.id)}
          >
            {showContent[module.id] ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0 transform rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 flex-shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            )}
            <span
              className={`text-3xl md:text-4xl font-bold text-left font-sans hover:text-tahiti ${
                showContent[module.id] ? 'underline text-tahiti' : ''
              }`}
            >
              {module.title}
            </span>
          </button>

          {showContent[module.id] && (
            <div className="content-to-toggle px-4 py-2">
              <ul className="px-4 text-sm">
                <li>{module.desc}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqquestion;

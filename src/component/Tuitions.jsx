import React, { useState } from 'react';

const Tuitions = () => {
  const [selectedOption, setSelectedOption] = useState('signup');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderForm = () => {
    if (selectedOption === 'pac12') {
      return (
        <div className="max-w-6x1 mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="md:text-3xl md:text-4xl lg:text-6xl text-tahiti-last font-extrabold text-center mb-8 font-sans">PAC 12 CHAMPIONSHIP GAME FINALISTS</h1>
        <h3 className="md:text-2xl font-extrabold text-center mb-8 font-sans">Friday 12/1 @ 8pm EST</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
  <div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/_smfuqmyodw?si=wtvH1xiShUmRva0H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen  className="w-full border-4 border-tahiti-dark"></iframe>
  </div>
  <div>
    <h1 className="text-3xl md:text-4xl text-tahiti-last font-extrabold text-left mb-2 font-sans">MOHAMED</h1>
    <h2 className="text-2xl md:text-4xl font-extrabold text-left mb-2 font-sans">STONY BROOK UNIVERSITY POLITICAL SCIENCE</h2>
    <p className="md:text-3xl text-tahiti-last font-bold text-left mb-8 font-sans">With dreams of fighting for justice and helping immigrants, Mohamed is working toward getting into law school. When he's not busy studying, he can be found making award-winning documentaries! Best of luck, Mohamed!</p>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
<div >
  <iframe width="560" height="315" src="https://www.youtube.com/embed/HCdpZj6ZcfY?si=i0iMR6QJAtYpkK_C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen  className="w-full border-4 border-tahiti-dark"></iframe>
  </div>
  <div>
    <h1 className="text-3xl md:text-4xl text-tahiti-last font-extrabold text-left mb-2 font-sans">JEREMIAH</h1>
    <h2 className="text-2xl md:text-4xl font-extrabold text-left mb-2 font-sans">UNIVERSITY OF FLORIDA
PHARMACY</h2>
    <p className="md:text-3xl text-tahiti-last font-bold text-left mb-8 font-sans">In his fourth year of studying Pharmacy in Gainesville, Jeremiah aspires to become a community pharmacist so he can help expand pharmaceutical access to underserved communities. You're a hero, Jeremiah!</p>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
  <div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/P-Cu0VjUJS8?si=UlXNnXMRQWcuCl-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen  className="w-full border-4 border-tahiti-dark"></iframe>
  </div>
  <div>
    <h1 className="text-4xl text-tahiti-last font-extrabold text-left mb-2 font-sans">MEGAN</h1>
    <h2 className="text-2xl md:text-4xl font-extrabold text-left mb-2 font-sans">SANTA BARBARA CITY COLLEGE MEDICAL FIELD</h2>
    <p className="md:text-3xl text-tahiti-last font-bold text-left mb-8 font-sans">There's nothing Megan loves more than saving lives. She's a lifeguard, caregiver, full-time EMT, AND medical student at Santa Barbara City College! After graduation, Megan dreams of becoming a Cardiovascular Perfusionist. Go Megan!</p>
  </div>
</div>

        </div>
      );
    }
    else if (selectedOption === 'acc') {
      // Render Log In form
      return (
        <div className="max-w-6x1 mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-tahiti-last font-extrabold text-center mb-8 font-sans">PAC 12 CHAMPIONSHIP GAME FINALISTS</h1>
        <h3 className="text-2xl font-extrabold text-center mb-8 font-sans">Friday 12/1 @ 8pm EST</h3>
      </div>
        </div>
      );
    }
     else if (selectedOption === 'bigten') {
    // Render Log In form
    return (
      <div className="max-w-6x1 mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-tahiti-last font-extrabold text-center mb-8 font-sans">PAC 12 CHAMPIONSHIP GAME FINALISTS</h1>
        <h3 className="text-2xl font-extrabold text-center mb-8 font-sans">Friday 12/1 @ 8pm EST</h3>
      </div>
        </div>
    );
  }
  else if (selectedOption === 'sec') {
    // Render Log In form
    return (
      <div className="max-w-6x1 mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-tahiti-last font-extrabold text-center mb-8 font-sans">PAC 12 CHAMPIONSHIP GAME FINALISTS</h1>
        <h3 className="text-2xl font-extrabold text-center mb-8 font-sans">Friday 12/1 @ 8pm EST</h3>
      </div>
        </div>
    );
  }
      else {
      // Render Log In form
      return (
        <div className="max-w-6x1 mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-tahiti-last font-extrabold text-center mb-8 font-sans">PAC 12 CHAMPIONSHIP GAME FINALISTS</h1>
        <h3 className="text-2xl font-extrabold text-center mb-8 font-sans">Friday 12/1 @ 8pm EST</h3>
      </div>
        </div>
      );
    }
  };

  return (
    <div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-center items-center py-4">
        <button onClick={() => handleOptionChange('pac12')} className={`md:mx-2 py-2 text-xs md:text-4 font-extrabold ${selectedOption === 'pac12' ? 'bg-gray-800 text-black border-b' : 'bg-white text-black'} `}>
          Pac 12
        </button>
        <button onClick={() => handleOptionChange('acc')} className={`mx-2 py-2 text-xs md:text-4 font-extrabold ${selectedOption === 'acc' ? 'bg-gray-800 text-black border-b' : 'bg-white text-black'}`}>
          ACC
        </button>
        <button onClick={() => handleOptionChange('bigten')} className={`mx-2 py-2 text-xs md:text-4 font-extrabold ${selectedOption === 'bigten' ? 'bg-gray-800 text-black border-b' : 'bg-white text-black'}`}>
          BIG TEN
        </button>
        <button onClick={() => handleOptionChange('sec')} className={`mx-2 py-2 text-xs md:text-4 font-extrabold ${selectedOption === 'sec' ? 'bg-gray-800 text-black border-b' : 'bg-white text-black'}`}>
          SEC
        </button>
        <button onClick={() => handleOptionChange('big12')} className={`mx-2 py-2 text-xs md:text-4 font-extrabold ${selectedOption === 'big12' ? 'bg-gray-800 text-black border-b' : 'bg-white text-black'}`}>
          BIG 12
        </button>
      </div>
      {renderForm()}
    </div>
  </div>
  );
};

export default Tuitions;

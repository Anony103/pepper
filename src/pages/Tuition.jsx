import React from 'react';
import HeroBanner3 from '../component/HeroBanner3';
import Navbar from '../component/Navbar';
import Tuitions from '../component/Tuitions';

const Tuition = () => {
  const backgroundImageUrlLarge = 'https://www.drpepper.com/cms/delivery/media/MCPXZMQFA6TZFGVKCFFKYWRNG7LI';
  const backgroundImageUrlSmall = 'https://www.drpepper.com/cms/delivery/media/MCIHNMZ35JSVABDOJ27MX54Q75OY';

  const useSmallScreen = window.innerWidth <= 768;
  const selectedBackgroundImageUrl = useSmallScreen ? backgroundImageUrlSmall : backgroundImageUrlLarge;

  const bannerStyle = {
    backgroundImage: `url(${selectedBackgroundImageUrl})`,
    backgroundSize: useSmallScreen ? 'fit' : 'cover',
  };

  return (
    <div>
      <div className='h-3/5 bg-tahiti' style={bannerStyle}>
        <Navbar />
        <HeroBanner3/>
      </div>
      <Tuitions/>
    </div>
  );
};

export default Tuition;

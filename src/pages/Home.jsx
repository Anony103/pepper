import React, { useRef } from 'react';
import HeroBanner from '../component/HeroBanner';
import Navbar from '../component/Navbar';
import Overview from '../component/Overview';
import scroll from '../assets/scroll.svg';

const Home = () => {
  const backgroundImageUrlLarge = 'https://www.drpepper.com/cms/delivery/media/MCD2CTM2CEJBGDZJLV6HREOJ6SNY';
  const backgroundImageUrlSmall = 'https://www.drpepper.com/cms/delivery/media/MCXI66VQUVCBFHNOCUNZR77WFX6I';

  const useSmallScreen = window.innerWidth <= 768;
  const selectedBackgroundImageUrl = useSmallScreen ? backgroundImageUrlSmall : backgroundImageUrlLarge;

  const bannerStyle = {
    backgroundImage: `url(${selectedBackgroundImageUrl})`,
    backgroundSize: 'cover',
  };

  const overviewRef = useRef(null);

  const scrollToOverview = () => {
    if (overviewRef.current) {
      overviewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='h-full bg-tahiti' style={bannerStyle}>
        <Navbar />
        <HeroBanner />
        <div className='flex items-center justify-center absolute bottom-0 w-full px-2 lg:px-36'>
          {useSmallScreen ? null : <img src={scroll} alt="" onClick={scrollToOverview} style={{ cursor: 'pointer' }} />}
        </div>
      </div>
      <div ref={overviewRef}>
        <Overview />
      </div>
    </div>
  );
};

export default Home;

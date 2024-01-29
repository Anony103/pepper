
import React, { useRef } from 'react';
import HeroBanner2 from '../component/HeroBanner2';
import Overview2 from '../component/Overview2';
import Rewards from '../component/Rewards';
import RewardItem from '../component/RewardItem';
import Navbar from '../component/Navbar';
import scroll from '../assets/scroll.svg';

const Reward = () => {

  const backgroundImageUrlLarge = 'https://www.drpepper.com/cms/delivery/media/MCD2CTM2CEJBGDZJLV6HREOJ6SNY';
  const backgroundImageUrlSmall = 'https://www.drpepper.com/cms/delivery/media/MCXI66VQUVCBFHNOCUNZR77WFX6I';

  const useSmallScreen = window.innerWidth <= 768;
  const selectedBackgroundImageUrl = useSmallScreen ? backgroundImageUrlSmall : backgroundImageUrlLarge;

  const bannerStyle = {
    backgroundImage: `url(${selectedBackgroundImageUrl})`,
    backgroundSize: 'cover',
  };

  const overviewRef = useRef(null);
  const rewarddetail = useRef(null);


  const scrollToOverview = () => {
    if (overviewRef.current) {
      overviewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOverviews = () => {
    if (rewarddetail.current) {
      rewarddetail.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='h-3/5 bg-tahiti' style={bannerStyle}>
        <Navbar />
        <HeroBanner2 />
        <div className='flex items-center justify-center absolute bottom-0 w-full px-2 lg:px-36 cur'>
          <img src={scroll} alt="" onClick={scrollToOverview} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div ref={overviewRef}>
        <Overview2 scrollToRewardItems={scrollToOverviews} />
        <Rewards />
        <div ref={rewarddetail}>
        <RewardItem />
        </div>
      </div>
    </div>
  );
};

export default Reward;

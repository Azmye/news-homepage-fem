import mobileBanner from '../../../assets/images/image-web-3-mobile.jpg';
import desktopBanner from '../../../assets/images/image-web-3-desktop.jpg';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [matches, setMatches] = useState(window.matchMedia('(min-width: 768px)').matches);

  useEffect(() => {
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <section id="hero" className="pb-5">
      <div className="px-4 flex flex-col">
        <div className={`w-full overflow-hidden`}>
          {matches && <img src={desktopBanner} alt="Hero Banner" className="max-w-full" />}
          {!matches && <img src={mobileBanner} alt="Hero Banner" className="max-w-full" />}
        </div>
        <div className="w-full">
          <div className="flex flex-col py-5 lg:py-0 lg:flex-row lg:pt-5 lg:justify-between">
            <div className="lg:w-3/5 lg:pr-5">
              <h1 className="text-5xl font-bold text-very-dark-blue lg:text-6xl">The Bright Future of Web 3.0?</h1>
            </div>
            <div className="lg:w-3/5 lg:flex lg:flex-col lg:justify-between lg:items-start lg:px-5">
              <p className="my-3 leading-relaxed text-dark-grayish-blue lg:my-0">
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
              </p>
              <button className="px-10 py-4 text-white font-semibold tracking-widest bg-soft-red lg:hover:bg-very-dark-blue lg:px-8 lg:py-3">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

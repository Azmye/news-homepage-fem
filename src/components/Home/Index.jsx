import Hero from './Child-Components/Hero';
import LatestNews from './Child-Components/LatestNews';
import Trending from './Child-Components/Trending';

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <section id="hero" className="pb-5 lg:w-2/3">
          <Hero />
        </section>
        <section id="latest-news" className="pb-10 lg:w-1/3">
          <LatestNews />
        </section>
      </div>
      <Trending />
    </div>
  );
};

export default Home;

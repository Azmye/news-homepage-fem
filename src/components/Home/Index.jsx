import Hero from './Child-Components/Hero';
import LatestNews from './Child-Components/LatestNews';
import Trending from './Child-Components/Trending';

const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <LatestNews />
      <Trending />
    </div>
  );
};

export default Home;

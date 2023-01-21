import retroImage from '../../../assets/images/image-retro-pcs.jpg';
import topLaptops from '../../../assets/images/image-top-laptops.jpg';
import gamingGrowth from '../../../assets/images/image-gaming-growth.jpg';

const Trending = () => {
  return (
    <section id="trending" className="pb-10">
      <div className="container mx-auto">
        <div className="px-4">
          <div className="flex flex-col gap-5 lg:flex-row">
            <article className="flex gap-5 group cursor-pointer">
              <div className="w-1/3 overflow-hidden">
                <img src={retroImage} alt="Trending News Photos" className="max-w-full" />
              </div>
              <div className="w-2/3 text-very-dark-blue">
                <p className="font-bold text-4xl text-very-dark-blue/30 mb-3">01</p>
                <h2 className="text-lg font-extrabold my-2 group-hover:text-soft-red">Reviving Retro PCs</h2>
                <p className="leading-relaxed text-very-dark-blue/60">What happens when old PCs are given modern upgrades?</p>
              </div>
            </article>
            <article className="flex gap-5 group cursor-pointer">
              <div className="w-1/3 overflow-hidden">
                <img src={topLaptops} alt="Trending News Photos" className="max-w-full" />
              </div>
              <div className="w-2/3 text-very-dark-blue">
                <p className="font-bold text-4xl text-very-dark-blue/30 mb-3">02</p>
                <h2 className="text-lg font-extrabold my-2 group-hover:text-soft-red">Top 10 Laptops of 2022</h2>
                <p className="leading-relaxed text-very-dark-blue/60">Our best picks for various needs and budgets.</p>
              </div>
            </article>
            <article className="flex gap-5 group cursor-pointer">
              <div className="w-1/3 overflow-hidden">
                <img src={gamingGrowth} alt="Trending News Photos" className="max-w-full" />
              </div>
              <div className="w-2/3 text-very-dark-blue">
                <p className="font-bold text-4xl text-very-dark-blue/30 mb-3">03</p>
                <h2 className="text-lg font-extrabold my-2 group-hover:text-soft-red">The Growth of Gaming</h2>
                <p className="leading-relaxed text-very-dark-blue/60">How the pandemic has sparked fresh opportunities.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;

const LatestNews = () => {
  return (
    <section id="latest-news" className="pb-10">
      <div className="px-4 container mx-auto">
        <div className="flex flex-col bg-very-dark-blue text-white py-5">
          <div className="px-5 mb-6">
            <h2 className="text-soft-orange font-semibold text-4xl">New</h2>
          </div>
          <div className="px-5 flex flex-col divide-y divide-white/30">
            <article className="py-4">
              <h3 className="font-bold text-xl">Hydrogen VS Electric Cars</h3>
              <p className="py-2 text-white/70 leading-relaxed">will hydrogen-fueled cars ever catch up to EVs?</p>
            </article>
            <article className="py-4">
              <h3 className="font-bold text-xl">The Downsides of AL Artistry</h3>
              <p className="py-2 text-white/70 leading-relaxed">what are the possible adverse effects of on-demand AI image generation?</p>
            </article>
            <article className="pt-4">
              <h3 className="font-bold text-xl">Is VC Funding Drying Up?</h3>
              <p className="py-2 text-white/70 leading-relaxed">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

import Hero from "../components/Hero.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import About from "../components/About.jsx";
import { colors } from "../design-system/tokens/colors.js";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* Category Section */}
      <div className={`px-6 py-16 max-w-6xl mx-auto ${colors.bg.base}`}>
        <h2 id="my-work" className={`text-3xl font-bold mb-8 text-center ${colors.text.primary}`}>
          Explore My Work
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          <CategoryCard
            title="Digital Design"
            image="/ProjectsMedia/OfficeSpace/OfficeSpace.jpg"
            category="Digital Design"
          />

          <CategoryCard
            title="Technical Art"
            image="/ProjectsMedia/DigitalImpressionism/DigitalImpressionismCoverImg.PNG"
            category="Technical Art"
          />

          <CategoryCard
            title="Software Development"
            image="/ProjectsMedia/PortfolioWebsite/PortfolioWebsiteCoverImg2.webp"
            category="Software Development"
          />

        </div>
      </div>
    </>
  );
}
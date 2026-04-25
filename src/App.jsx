import { useState, useEffect, useRef } from "react";
import RamenCard from "./components/ui/RamenCard";
import CrepeCard from "./components/ui/CrepeCard";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import { riceMenu } from "./data/dull-meals";
import { crepeMenu } from "./data/creps";
import { menuItems } from "./data/breakfast";
import { sandwitchItems } from "./data/sandwitches";
import BoldCard from "./components/ui/BoldCard";
import CinemaCard from "./components/ui/CinemaCard";
import MinimalCard from "./components/ui/MinimalCard";
import { useMobileAutoHover } from "./hooks/useMobileAutoHover";

const categories = [
  { id: 'creps', name: 'كريبات' },
  { id: 'meals', name: 'وجبات' },
  {id: 'lunch' , name: "ساندوتشات الغدا"},
  {id:"sabdwitches" , name: "سندوتشات فينو "},
  { id: 'breakfast', name: 'سندوتشات الإفطار' },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const sectionRefs = useRef({});
  const hoverRef = useMobileAutoHover();

  // Scroll-spy: update activeCategory based on which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const currentRefs = sectionRefs.current;
    Object.values(currentRefs).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(currentRefs).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    setActiveCategory(id);
    const el = sectionRefs.current[id];
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Hero />

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <nav className="flex gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-4 justify-start md:justify-center px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`
                  whitespace-nowrap px-5 py-2 font-display text-base sm:text-lg tracking-wide rounded-full transition-all duration-300
                  ${activeCategory === category.id
                    ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]'
                    : 'text-[#888] hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* All Sections on One Page */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-12">

        {/* ── سندوتشات الإفطار ── */}
        <section
          id="breakfast"
          ref={(el) => (sectionRefs.current['breakfast'] = el)}
          className="max-w-7xl mx-auto mb-24"
        >
          <SectionTitle title="سندوتشات الإفطار" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
            {menuItems.map((item) => (
              <CinemaCard
                key={item.id}
                img={item.img}
                Name={item.Name}
                Description={item.Description}
                price={item.price}
                cardRef={hoverRef}
              />
            ))}
          </div>
        </section>

        {/* ── سندوتشات فينو ── */}
        <section
          id="sabdwitches"
          ref={(el) => (sectionRefs.current['sabdwitches'] = el)}
          className="max-w-7xl mx-auto mb-24"
        >
          <SectionTitle title="سندوتشات فينو" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
            {sandwitchItems.map((item) => (
              <CrepeCard
                key={item.id}
                img={item.img}
                Name={item.Name}
                Description={item.Description}
                price={item.price}
                cardRef={hoverRef}
              />
            ))}
          </div>
        </section>

        {/* ── الوجبات ── */}
        <section
          id="meals"
          ref={(el) => (sectionRefs.current['meals'] = el)}
          className="max-w-7xl mx-auto mb-24"
        >
          <SectionTitle title="وجبات" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 justify-items-center">
            {riceMenu.map((item, index) => (
              <RamenCard
                key={index}
                img={item.img}
                price={item.price}
                Description={item.Description}
                Name={item.Name}
              />
            ))}
          </div>
        </section>

        {/* ── كريبات ── */}
        <section
          id="creps"
          ref={(el) => (sectionRefs.current['creps'] = el)}
          className="max-w-7xl mx-auto mb-24"
        >
          <SectionTitle title="كريبات" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 justify-items-center">
            {crepeMenu.map((item, index) => (
              <BoldCard
                key={index}
                img={item.img}
                price={item.price}
                Description={item.Description}
                Name={item.Name}
                cardRef={hoverRef}
              />
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

/* ── Section Title Separator ── */
function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-4 mb-14 mt-4">
      <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wide shrink-0">
        {title}
      </h2>
      <div className="h-px flex-grow bg-gradient-to-l from-transparent via-white/10 to-transparent" />
    </div>
  );
}
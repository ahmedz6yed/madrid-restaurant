import { useState, useEffect, useRef } from "react";
import RamenCard from "./components/ui/RamenCard";
import CrepeCard from "./components/ui/CrepeCard";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import { riceMenu } from "./data/dull-meals";
import { menuItems } from "./data/breakfast";
import { burgerData } from "./data/burger-data";
import BoldCard from "./components/ui/BoldCard";
import CinemaCard from "./components/ui/CinemaCard";
import MinimalCard from "./components/ui/MinimalCard";
import { useMobileAutoHover } from "./hooks/useMobileAutoHover";
import { lunchMeals } from "./data/lunch-meals";
import GlassCard from "./components/ui/GlassCard";
const categories = [
  { id: "burger", name: "برجر" },
  { id: "meals", name: "وجبات" },
  { id: "lunch", name: "سندوتشات الغدا" },
  { id: "breakfast", name: "سندوتشات الإفطار" },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("breakfast");
  const [showSidebar, setShowSidebar] = useState(false);
  const sectionRefs = useRef({});
  const hoverRef = useMobileAutoHover();

  // Handle sidebar visibility based on scroll position (hide in Hero 30%)
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.3;
      setShowSidebar(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      { rootMargin: "-50% 0px -50% 0px" },
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
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <Hero />

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <nav className="flex flex-wrap gap-2 sm:gap-3 py-4 justify-center px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`
                  whitespace-nowrap px-4 py-1.5 sm:px-5 sm:py-2 font-display text-sm sm:text-base tracking-wide rounded-full transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                      : "text-[#888] hover:text-white hover:bg-white/5"
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
        {/* ── سندوتشات الإفطار (Categorized) ── */}
        <section
          id="breakfast"
          ref={(el) => (sectionRefs.current["breakfast"] = el)}
          className="max-w-7xl mx-auto mb-24 scroll-mt-24"
        >
          <SectionTitle title="سندوتشات الإفطار" />

          {/* Sub-category: بلدي (CinemaCard) */}
          <div id="breakfast-baladi" className="mb-16 scroll-mt-32">
            <h3 className="font-display text-2xl text-gold mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-gold/30"></span>
              بلدي
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
              {menuItems
                .filter((m) => m.type === "بلدي")
                .map((item) => (
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
          </div>

          {/* Sub-category: فينو (CrepeCard) */}
          <div id="breakfast-feno" className="scroll-mt-32">
            <h3 className="font-display text-2xl text-gold mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-gold/30"></span>
              فينو
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
              {menuItems
                .filter((m) => m.type === "فينو")
                .map((item) => (
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
          </div>
        </section>
        {/* ── ساندوتشات الغدا (Categorized) ── */}
        <section
          id="lunch"
          ref={(el) => (sectionRefs.current["lunch"] = el)}
          className="max-w-7xl mx-auto mb-24 scroll-mt-24"
        >
          <SectionTitle title="ساندوتشات الغدا" />

          {/* Sub-category: كريبات (BoldCard) */}
          <div id="crep-sub" className="mb-16 scroll-mt-32">
            <h3 className="font-display text-2xl text-gold mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-gold/30"></span>
              كريبات
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
              {lunchMeals
                .filter((m) => m.type === "كريب")
                .map((item, idx) => (
                  <BoldCard
                    key={idx}
                    img={item.img}
                    Name={item.Name}
                    Description={item.Description}
                    price={item.price}
                    cardRef={hoverRef}
                  />
                ))}
            </div>
          </div>

          {/* Sub-category: سوري (CrepeCard) */}
          <div id="sori-sub" className="mb-16 scroll-mt-32">
            <h3 className="font-display text-2xl text-gold mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-gold/30"></span>
              سوري
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
              {lunchMeals
                .filter((m) => m.type === "سوري")
                .map((item, idx) => (
                  <CrepeCard
                    key={idx}
                    img={item.img}
                    Name={item.Name}
                    Description={item.Description}
                    price={item.price}
                    cardRef={hoverRef}
                  />
                ))}
            </div>
          </div>

          {/* Sub-category: بلدي (CinemaCard) */}
          <div id="baladi-sub" className="scroll-mt-32">
            <h3 className="font-display text-2xl text-gold mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-gold/30"></span>
              بلدي
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
              {lunchMeals
                .filter((m) => m.type === "بلدي")
                .map((item, idx) => (
                  <CinemaCard
                    key={idx}
                    img={item.img}
                    Name={item.Name}
                    Description={item.Description}
                    price={item.price}
                    cardRef={hoverRef}
                  />
                ))}
            </div>
          </div>
        </section>
        {/* ── سندوتشات فينو ── */}
        {/* <section
          id="sabdwitches"
          ref={(el) => (sectionRefs.current["sabdwitches"] = el)}
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
        </section> */}

        {/* ── الوجبات ── */}
        <section
          id="meals"
          ref={(el) => (sectionRefs.current["meals"] = el)}
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

        {/* ── برجر ── */}
        <section
          id="burger"
          ref={(el) => (sectionRefs.current["burger"] = el)}
          className="max-w-7xl mx-auto mb-24"
        >
          <SectionTitle title="برجر" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
            {burgerData.map((item) => (
              <GlassCard
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

        {/* ── كريبات ──
        <section
          id="creps"
          ref={(el) => (sectionRefs.current["creps"] = el)}
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
        </section> */}
      </main>

      <MobileSubNav
        active={activeCategory === "lunch" && showSidebar}
        tabs={[
          { id: "crep-sub", label: "كريب" },
          { id: "sori-sub", label: "سوري" },
          { id: "baladi-sub", label: "بلدي" },
        ]}
      />

      <MobileSubNav
        active={activeCategory === "breakfast" && showSidebar}
        tabs={[
          { id: "breakfast-baladi", label: "بلدي" },
          { id: "breakfast-feno", label: "فينو" },
        ]}
      />

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

/* ── Mobile Vertical Sub-Navigation ── */
function MobileSubNav({ active, tabs }) {
  if (!active) return null;

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 p-2 sm:hidden animate-in fade-in slide-in-from-right-4 duration-300">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            const el = document.getElementById(tab.id);
            if (el) {
              const offset = 100;
              const bodyRect = document.body.getBoundingClientRect().top;
              const elementRect = el.getBoundingClientRect().top;
              const elementPosition = elementRect - bodyRect;
              const offsetPosition = elementPosition - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }}
          className="
            bg-red-600/90 backdrop-blur-sm text-white px-2 py-4 rounded-l-lg 
            font-display text-sm tracking-widest shadow-xl border-l border-y border-white/20
            hover:bg-red-500 active:scale-95 transition-all
            [writing-mode:vertical-rl] flex items-center justify-center uppercase
          "
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

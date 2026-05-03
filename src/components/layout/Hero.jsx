export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background with Luxury Glowing Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Main Title */}
        <h1 className="
          font-display text-7xl sm:text-8xl md:text-9xl 
          tracking-[0.15em] uppercase mb-4
          bg-gradient-to-b from-white via-white/90 to-gold
          bg-clip-text text-transparent
          drop-shadow-[0_0_30px_rgba(200,139,42,0.2)]
          selection:text-gold
        ">
          Madrid
        </h1>
        
        {/* Subtitle with decorative lines */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-red-600/50" />
          <p className="font-display text-gold text-lg sm:text-xl md:text-2xl tracking-wider drop-shadow-md">
            الفخامة والمذاق الأصيل
          </p>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-red-600/50" />
        </div>

        {/* Description */}
        <p className="font-body font-light text-[#888] max-w-md mb-10 text-sm sm:text-base leading-relaxed">
          تجربة طعام فريدة تجمع بين الأجواء الفاخرة والوصفات العريقة المحضرة بشغف. اكتشف قائمة طعامنا المميزة الآن.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' })}
          className="
            group relative px-8 py-3.5 overflow-hidden rounded-full cursor-pointer
            bg-red-600 text-white font-body font-medium tracking-wide
            transition-all duration-300 ease-out
            hover:scale-105 hover:bg-red-500 hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]
            active:scale-95
          "
        >
          <span className="relative z-10">اكتشف القائمة</span>
          {/* Shimmer Effect on Hover */}
          <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] transition-all duration-700 ease-out group-hover:left-[200%]" />
        </button>
      </div>

      {/* Decorative Bottom Fade to seamlessly blend with the menu section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}

import PriceConvertor from '../../utils/price-convertor';

export default function CrepeCard({ img, price, Name, Description, cardRef }) {
  const { egp, piasters } = PriceConvertor(price);

  return (
    <div className="group relative w-full h-full flex flex-col max-w-[420px]" ref={cardRef}>
      <div className="
        flex flex-col h-full
        bg-[#0f0f0f] border border-white/[0.08] rounded-2xl overflow-hidden
        transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
        hover:border-red-600/40 hover:bg-[#141414]
        group-data-[mobile-hover=true]:border-red-600/40 group-data-[mobile-hover=true]:bg-[#141414]
        hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.15),0_0_20px_rgba(0,0,0,0.6)]
        group-data-[mobile-hover=true]:-translate-y-1.5 group-data-[mobile-hover=true]:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.15),0_0_20px_rgba(0,0,0,0.6)]
      ">
        
        {/* ── Top: Image ── */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-[#111]">
          <img
            src={img}
            alt={Name}
            className="
              absolute inset-0 w-full h-full object-cover
              transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              group-hover:scale-110 group-data-[mobile-hover=true]:scale-110
            "
          />
          {/* Subtle gradient to blend with the card body */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0f0f0f] to-transparent group-hover:from-[#141414] group-data-[mobile-hover=true]:from-[#141414] transition-colors duration-500" />
          
          {/* Price Badge over the image */}
          <div className="
            absolute bottom-4 left-4
            bg-red-600/95 backdrop-blur-md
            border border-white/10
            rounded-2xl px-3 py-1.5 sm:px-4 sm:py-2
            shadow-[0_8px_16px_rgba(220,38,38,0.4)]
            transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            group-hover:scale-105 group-hover:-translate-y-1
            group-data-[mobile-hover=true]:scale-105 group-data-[mobile-hover=true]:-translate-y-1
          ">
            <span className="font-display text-white text-sm sm:text-base font-bold leading-none flex items-baseline justify-center gap-0.5">
              {egp}<span className="text-[10px] sm:text-xs opacity-70">.{piasters}</span>
              <span className="text-[10px] sm:text-xs opacity-90 mr-1">ج.م</span>
            </span>
          </div>
        </div>

        {/* ── Bottom: Content ── */}
        <div className="flex flex-col flex-grow p-5 sm:p-6 pt-3 sm:pt-4 z-10">
          <h3 className="
            font-display text-white text-xl sm:text-2xl font-bold
            leading-tight tracking-wide mb-2
            transition-colors duration-300 group-hover:text-red-500 group-data-[mobile-hover=true]:text-red-500
          ">
            {Name}
          </h3>
          <p className="
            font-body text-[#888] text-sm sm:text-base
            leading-relaxed line-clamp-2
            transition-colors duration-300 group-hover:text-[#bbb] group-data-[mobile-hover=true]:text-[#bbb]
          ">
            {Description}
          </p>
        </div>
        
      </div>
    </div>
  );
}

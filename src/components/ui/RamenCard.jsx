import PriceConvertor from "../../utils/price-convertor";

export default function RamenCard({ img, price, Name, Description }) {
  const { egp, piasters } = PriceConvertor(price);

  return (
    /*
     * Optimized Layout: Vertical stacking across all breakpoints to ensure
     * stability in multi-column grids (2, 3, or 4 columns).
     */
    <div
      className="
        group relative w-full max-w-[420px]
        flex flex-col items-center
        lg:flex-row lg:items-start
      "
    >
      {/* Bowl Image Container */}
      <div
        className="
          relative z-20
          /* Fixed Circular Sizes */
          w-28 h-28 -mb-10
          sm:w-32 sm:h-32 sm:-mb-12
          md:w-36 md:h-36
          lg:w-40 lg:h-40
          xl:w-44 xl:h-44
          
          /* LG/XL Positioning: Top-Left Overlap */
          lg:absolute lg:-top-8 lg:-left-8 lg:mb-0
          
          transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          group-hover:rotate-[35deg] group-hover:scale-115 group-hover:-translate-y-4
          will-change-transform
        "
      >
        {/* Liquid Glow behind bowl */}
        <div
          className="
          absolute inset-0 rounded-full bg-red-600/0 
          transition-all duration-700
          group-hover:bg-red-600/20 group-hover:blur-2xl group-hover:scale-150
        "
        />

        <div
          className="
          relative w-full h-full rounded-full overflow-hidden
          shadow-[0_20px_40px_-8px_rgba(0,0,0,0.8),0_0_0_3px_rgba(255,255,255,0.05)]
          group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,1),0_0_40px_rgba(220,38,38,0.4),0_0_0_4px_rgba(220,38,38,0.3)]
          transition-shadow duration-700
        "
        >
          <img
            src={img}
            alt={Name}
            loading="lazy"
            className="
              w-full h-full object-cover
              transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              group-hover:-rotate-12 group-hover:scale-110
            "
          />

          {/* Shine Sweep Effect */}
          <div
            className="
            absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent
            -skew-x-12 -translate-x-[200%]
            group-hover:animate-[shine_1.5s_ease-in-out_infinite]
            pointer-events-none
          "
          />
        </div>
      </div>

      {/* Card Body */}
      <div
        className="
          relative cursor-pointer
          bg-[#131313] border border-white/[0.06]
          rounded-[32px] w-full
          
          flex flex-col items-center text-center
          pt-14 pb-5 px-4
          sm:pt-16 sm:pb-6 sm:px-6
          
          /* LG/XL Adjustments for Horizontal Content */
          lg:flex-row lg:items-center lg:text-left
          lg:pt-8 lg:pb-8 lg:pl-36 lg:pr-8
          lg:min-h-[180px]
          
          transition-all duration-500 ease-out
          hover:border-red-600/40
          hover:bg-[#161616]
          hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,1),0_0_50px_rgba(220,38,38,0.15)]

          before:content-[''] before:absolute before:inset-0 before:pointer-events-none
          before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(220,38,38,0.15),transparent_70%)]
          before:opacity-0 before:transition-opacity before:duration-500
          hover:before:opacity-100

          after:content-[''] after:absolute after:-inset-px after:rounded-[inherit] after:pointer-events-none
          after:bg-[linear-gradient(180deg,rgba(220,38,38,0.3)_0%,transparent_50%)]
          after:opacity-0 after:transition-opacity after:duration-500
          hover:after:opacity-100
        "
      >
        {/* Main Content */}
        <div
          className="
          relative z-10 flex flex-col items-center lg:items-start gap-3 w-full
          lg:flex-row lg:justify-between lg:items-center
        "
        >
          {/* Text Block */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <h2
              className="
                font-display tracking-wide text-[#efefef] leading-tight
                text-xl sm:text-2xl lg:text-2xl xl:text-3xl
                transition-all duration-500
                group-hover:text-white group-hover:tracking-[0.08em]
              "
            >
              {Name}
            </h2>

            <div
              className="
                h-px w-2/3 lg:w-full
                bg-gradient-to-r from-transparent via-white/10 to-transparent
                lg:from-white/10 lg:to-transparent
                transition-all duration-500
                group-hover:via-red-600/50
                lg:group-hover:from-red-600/50 lg:group-hover:via-transparent
              "
            />

            <p
              className="
                font-body font-light text-[#545454] leading-relaxed
                text-[0.7rem] sm:text-xs lg:text-sm
                max-w-[14rem]
                transition-colors duration-500
                group-hover:text-[#aaa]
              "
            >
              {Description}
            </p>
          </div>

          {/* Price Section */}
          <div
            className="
              mt-2 pt-4 border-t border-white/[0.05] w-full
              flex flex-col items-center gap-1
              lg:absolute lg:bg-[#1a1a1a] lg:border lg:border-white/10 lg:px-4 lg:py-2 lg:rounded-2xl
              lg:-right-14 lg:-bottom-15
              lg:mt-0 lg:pt-0 lg:border-t-0 lg:w-auto lg:items-end lg:shrink-0
              lg:shadow-2xl

              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-red-600/30
            "
          >
            <span
              className="
                font-display tracking-wide text-red-600
                text-2xl sm:text-3xl lg:text-3xl xl:text-4xl
                
                transition-all duration-500
                group-hover:text-red-500
                group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]
              "
            >
              {egp}
              {piasters ? "." : ""}
              <span className="text-lg sm:text-xl">{piasters}</span>{" "}
              <span className="text-lg sm:text-xl">ج.م</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

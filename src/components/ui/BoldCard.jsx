import PriceConvertor from '../../utils/price-convertor';

/**
 * BoldCard — Large price callout with a thick red accent bar.
 * Vertical card with image on top, content below with a bold left-border accent.
 * Best for: main menu, meals, attention-grabbing grids.
 */
export default function BoldCard({ img, price, Name, Description, cardRef }) {
  const { egp, piasters } = PriceConvertor(price);

  return (
    <div className="group relative w-full max-w-[400px]" ref={cardRef}>
      <div
        className="
          relative overflow-hidden
          bg-surface border border-border
          rounded-card
          transition-all duration-400 ease-out
          hover:border-red/30 group-data-[mobile-hover=true]:border-red/30
          hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.7)] group-data-[mobile-hover=true]:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.7)]
        "
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={img}
            alt={Name}
            className="
              w-full h-full object-cover
              transition-transform duration-600
              group-hover:scale-105 group-data-[mobile-hover=true]:scale-105
            "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
        </div>

        {/* Content — with thick red left-accent */}
        <div className="relative px-4 py-4 sm:px-5 sm:py-5">
          {/* Red accent bar */}
          <div
            className="
              absolute top-4 right-0 w-1 h-10 sm:h-12
              bg-red rounded-l-full
              transition-all duration-400
              group-hover:h-16 group-hover:bg-gold
              group-data-[mobile-hover=true]:h-16 group-data-[mobile-hover=true]:bg-gold
            "
          />

          {/* Name */}
          <h3
            className="
              font-display text-text text-lg sm:text-xl font-bold
              leading-tight tracking-wide mb-1.5 pr-3
              transition-colors duration-300
              group-hover:text-red group-data-[mobile-hover=true]:text-red
            "
          >
            {Name}
          </h3>

          {/* Description */}
          <p
            className="
              font-body text-text-muted text-[11px] sm:text-xs
              leading-relaxed line-clamp-2 mb-3 pr-3
            "
          >
            {Description}
          </p>

          {/* Price — large and bold */}
          <div className="flex items-baseline gap-1.5 pt-3 border-t border-border">
            <span
              className="
                font-display text-red font-black
                text-2xl sm:text-3xl leading-none
                transition-all duration-300
                group-hover:text-gold-light group-data-[mobile-hover=true]:text-gold-light
                group-hover:drop-shadow-[0_0_12px_rgba(232,168,58,0.5)] group-data-[mobile-hover=true]:drop-shadow-[0_0_12px_rgba(232,168,58,0.5)]
              "
            >
              {egp}
              <span className="text-sm sm:text-base font-bold opacity-60">.{piasters}</span>
            </span>
            <span className="text-text-muted text-xs font-body">ج.م</span>
          </div>
        </div>
      </div>
    </div>
  );
}

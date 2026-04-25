import PriceConvertor from '../../utils/price-convertor';

/**
 * CinemaCard — Full-bleed cinematic card with text overlaid on the image.
 * Name, description, and price all sit on top of the darkened image.
 * Best for: featured items, specials, hero grids, full-width showcases.
 */
export default function CinemaCard({ img, price, Name, Description, cardRef }) {
  const { egp, piasters } = PriceConvertor(price);

  return (
    <div className="group relative w-full max-w-[480px]" ref={cardRef}>
      <div
        className="
          relative overflow-hidden rounded-card
          aspect-[3/2] sm:aspect-[16/10]
          border border-border
          cursor-pointer
          transition-all duration-500
          hover:border-red/30 group-data-[mobile-hover=true]:border-red/30
          hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.9),0_0_40px_rgba(224,48,48,0.1)] group-data-[mobile-hover=true]:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.9),0_0_40px_rgba(224,48,48,0.1)]
        "
      >
        {/* Background Image */}
        <img
          src={img}
          alt={Name}
          className="
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            group-hover:scale-110 group-data-[mobile-hover=true]:scale-110
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black via-black/50 to-black/10
            transition-opacity duration-500
            group-hover:from-black/95 group-hover:via-black/60
            group-data-[mobile-hover=true]:from-black/95 group-data-[mobile-hover=true]:via-black/60
          "
        />

        {/* Price — top-right badge */}
        <div
          className="
            absolute top-3 left-3 sm:top-4 sm:left-4
            bg-red/90 backdrop-blur-sm
            rounded-pill
            px-3 py-1 sm:px-4 sm:py-1.5
            shadow-[0_4px_16px_rgba(224,48,48,0.4)]
            transition-all duration-300
            group-hover:bg-gold group-hover:shadow-[0_4px_20px_rgba(200,139,42,0.5)]
            group-data-[mobile-hover=true]:bg-gold group-data-[mobile-hover=true]:shadow-[0_4px_20px_rgba(200,139,42,0.5)]
          "
        >
          <span className="font-display text-white text-sm sm:text-base font-bold leading-none">
            {egp}<span className="text-[10px] sm:text-xs opacity-70">.{piasters}</span>
            {' '}<span className="text-[10px] sm:text-xs opacity-80">ج.م</span>
          </span>
        </div>

        {/* Content — bottom overlay */}
        <div className="absolute bottom-0 inset-x-0 px-4 pb-4 sm:px-5 sm:pb-5">
          {/* Name */}
          <h3
            className="
              font-display text-text
              text-xl sm:text-2xl lg:text-3xl font-black
              leading-tight tracking-wide mb-1
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
              transition-colors duration-300
              group-hover:text-gold-light group-data-[mobile-hover=true]:text-gold-light
            "
          >
            {Name}
          </h3>

          {/* Description — slides up on hover */}
          <p
            className="
              font-body text-text-sub/70 text-xs sm:text-sm
              leading-relaxed line-clamp-2
              sm:opacity-0 sm:translate-y-3
              sm:group-hover:opacity-100 sm:group-hover:translate-y-0
              group-data-[mobile-hover=true]:opacity-100 group-data-[mobile-hover=true]:translate-y-0
              transition-all duration-500 ease-out
            "
          >
            {Description}
          </p>
        </div>
      </div>
    </div>
  );
}

import PriceConvertor from '../../utils/price-convertor';

/**
 * MinimalCard — Ultra-clean card with generous whitespace and subtle borders.
 * Centered layout, no visual noise. Image in a soft rounded container.
 * Best for: breakfast, light items, refined menus.
 */
export default function MinimalCard({ img, price, Name, Description, cardRef }) {
  const { egp, piasters } = PriceConvertor(price);

  return (
    <div className="group relative w-full max-w-[360px]" ref={cardRef}>
      <div
        className="
          flex flex-col items-center text-center
          bg-transparent
          px-3 py-6 sm:px-4 sm:py-8
          transition-all duration-400
        "
      >
        {/* Circular image container */}
        <div
          className="
            relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40
            rounded-full overflow-hidden mb-5 sm:mb-6
            border-2 border-border
            shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)]
            transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            group-hover:border-red/40 group-data-[mobile-hover=true]:border-red/40
            group-hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.8),0_0_24px_rgba(224,48,48,0.15)] group-data-[mobile-hover=true]:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.8),0_0_24px_rgba(224,48,48,0.15)]
            group-hover:scale-105 group-data-[mobile-hover=true]:scale-105
          "
        >
          <img
            src={img}
            alt={Name}
            loading="lazy"
            className="
              w-full h-full object-cover
              transition-transform duration-600
              group-hover:scale-110 group-hover:rotate-3
              group-data-[mobile-hover=true]:scale-110 group-data-[mobile-hover=true]:rotate-3
            "
          />
        </div>

        {/* Name */}
        <h3
          className="
            font-display text-text text-lg sm:text-xl font-bold
            leading-tight tracking-wide mb-2
            transition-colors duration-300
            group-hover:text-red group-data-[mobile-hover=true]:text-red
          "
        >
          {Name}
        </h3>

        {/* Thin divider */}
        <div
          className="
            w-8 h-px bg-border mb-3
            transition-all duration-400
            group-hover:w-12 group-hover:bg-red
            group-data-[mobile-hover=true]:w-12 group-data-[mobile-hover=true]:bg-red
          "
        />

        {/* Description */}
        <p
          className="
            font-body text-text-muted text-[11px] sm:text-xs
            leading-relaxed max-w-[220px] mb-4
            line-clamp-2
          "
        >
          {Description}
        </p>

        {/* Price */}
        <span
          className="
            font-display text-text-sub text-xl sm:text-2xl font-bold
            tracking-wide
            transition-all duration-300
            group-hover:text-red group-data-[mobile-hover=true]:text-red
            group-hover:drop-shadow-[0_0_10px_rgba(224,48,48,0.3)] group-data-[mobile-hover=true]:drop-shadow-[0_0_10px_rgba(224,48,48,0.3)]
          "
        >
          {egp}<span className="text-sm opacity-50">.{piasters}</span>
          {' '}<span className="text-xs text-text-muted font-normal">ج.م</span>
        </span>
      </div>
    </div>
  );
}

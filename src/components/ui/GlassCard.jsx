import PriceConvertor from '../../utils/price-convertor';

/**
 * GlassCard — Frosted glassmorphism overlay on a full-bleed image.
 * The info panel floats over the bottom of the image with a backdrop blur.
 * Best for: hero items, featured dishes, premium sections.
 */
export default function GlassCard({ img, price, Name, Description }) {
  const { egp, piasters } = PriceConvertor(price);

  return (
    <div className="group relative w-full max-w-[400px]">
      <div
        className="
          relative overflow-hidden rounded-card
          border border-border
          transition-all duration-500 ease-out
          hover:border-red/40
          hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8),0_0_30px_rgba(224,48,48,0.08)]
        "
      >
        {/* Full Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={img}
            alt={Name}
            className="
              w-full h-full object-cover
              transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              group-hover:scale-110
            "
          />

          {/* Gradient veil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* ── Glass Info Panel ── */}
          <div
            className="
              absolute bottom-0 inset-x-0
              bg-white/[0.06] backdrop-blur-xl
              border-t border-white/[0.08]
              px-4 py-4 sm:px-5 sm:py-5
              transition-all duration-400
              group-hover:bg-white/[0.1]
            "
          >
            {/* Name + Price Row */}
            <div className="flex items-start justify-between gap-3 mb-1.5">
              <h3
                className="
                  font-display text-text text-base sm:text-lg font-bold
                  leading-tight tracking-wide
                "
              >
                {Name}
              </h3>
              <span
                className="
                  shrink-0 font-display text-red font-bold
                  text-lg sm:text-xl leading-none
                  transition-all duration-300
                  group-hover:text-gold-light
                  group-hover:drop-shadow-[0_0_8px_rgba(232,168,58,0.4)]
                "
              >
                {egp}<span className="text-xs opacity-60">.{piasters}</span>
                {' '}<span className="text-[10px] text-text-muted">ج.م</span>
              </span>
            </div>

            {/* Description */}
            <p className="font-body text-text-muted text-[11px] sm:text-xs leading-relaxed line-clamp-2">
              {Description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

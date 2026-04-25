import React from "react";

export default function MenuItemCard({ image, name, description, price }) {
  return (
    <div className="relative mt-10 mb-4 mx-auto w-full max-w-md">
      {/* Main Card Container */}
      <div className="relative flex items-center bg-[#121212] rounded-[2rem] p-6 pl-24 sm:pl-32 min-h-[160px] shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
        
        {/* The Dish Image - Positioned to overflow the left and top */}
        <div className="absolute -left-10 -top-6 sm:-left-16 sm:-top-10 w-40 h-40 sm:w-52 sm:h-52 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full border-4 border-zinc-900/10 shadow-inner"
          />
        </div>

        {/* Content Area */}
        <div className="flex flex-col justify-center gap-1">
          {/* Title with Stylized Brush-like Font */}
          <h3 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-tighter leading-none mb-1 italic" 
              style={{ fontFamily: "'Permanent Marker', 'Brush Script MT', cursive" }}>
            {name}
          </h3>
          
          {/* Description */}
          <p className="text-zinc-400 text-xs sm:text-sm leading-tight font-medium max-w-[180px] sm:max-w-[220px]">
            {description}
          </p>

          {/* Price */}
          <div className="mt-2">
            <span className="text-white text-xl sm:text-2xl font-bold italic">
              ${price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
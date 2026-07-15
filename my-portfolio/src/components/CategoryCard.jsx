// src/components/CategoryCard.jsx

import { useNavigate } from "react-router-dom";
import { colors } from "../design-system/tokens/colors";

export default function CategoryCard({ title, image, category }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate("/portfolio", {
          state: { category: category }
        })
      }
      className={`
        relative aspect-square overflow-hidden rounded-xl
        ${colors.bg.surface}
        shadow-md cursor-pointer

        border border-transparent
        transition-all duration-200

        ${colors.accent.borderHover}
        hover:scale-[1.02]
      `}
    >
      {/* Image */}
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          ${colors.bg.overlay} ${colors.text.primary}
          text-xl font-semibold
        `}
      >
        {title}
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import { colors } from "../design-system/tokens/colors";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50

        px-4 py-3 rounded-full shadow-lg

        ${colors.accent.primary}
        text-black font-medium

        border border-transparent

        hover:scale-105
        hover:bg-transparent
        ${colors.accent.borderHover}
        ${colors.accent.textHover}

        transition-all duration-200
        cursor-pointer
      `}
    >
      ↑ Top
    </button>
  );
}
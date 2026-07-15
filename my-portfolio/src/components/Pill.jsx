import { colors } from "../design-system/tokens/colors";

export default function Pill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full border text-sm transition cursor-pointer

        ${
          active
            ? `${colors.accent.primary} text-black ${colors.accent.border}`
            : `${colors.border.default} ${colors.text.primary} ${colors.accent.borderHover}`
        }
      `}
    >
      {active ? "✓ " : ""}
      {label}
    </button>
  );
}
import { useEffect, useState } from "react";
import projects from "../data/projects";
import { colors } from "../design-system/tokens/colors";
import { useLocation, useNavigate } from "react-router-dom";
import Pill from "./Pill";

export default function ProjectFilters({
  selectedSkills,
  setSelectedSkills,
  selectedCategories,
  setSelectedCategories
}) {
    const [open, setOpen] = useState(false);
    const [skills, setSkills] = useState([]);
    const [categories, setCategories] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

  useEffect(() => {
    const allSkills = projects.flatMap(p => p.skills || []);
    setSkills([...new Set(allSkills)]);

    const allCategories = projects.map(p => p.category);
    setCategories([...new Set(allCategories)]);

    const incomingCategory = location.state?.category;
    if (incomingCategory) {
        setSelectedCategories([incomingCategory]);
        navigate(location.pathname, { replace: true, state: null });
    }
  }, []);

  const toggle = (value, type) => {
    if (type === "category") {
      setSelectedCategories(prev =>
        prev.includes(value)
          ? prev.filter(i => i !== value)
          : [...prev, value]
      );
    }

    if (type === "skill") {
      setSelectedSkills(prev =>
        prev.includes(value)
          ? prev.filter(i => i !== value)
          : [...prev, value]
      );
    }
  };

  const isEmpty =
    selectedSkills.length === 0 &&
    selectedCategories.length === 0;

    const hasActiveFilters =
        selectedSkills.length > 0 ||
        selectedCategories.length > 0;

  return (
    <div className={`sticky top-0 z-20 ${colors.bg.base} backdrop-blur border-b ${colors.border.subtle}`}>
        <div className="max-w-6xl mx-auto px-6 py-3 space-y-2">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold">Filters</h2>
                </div>

                <button
                    onClick={() => setOpen(prev => !prev)}
                    className={`
                    px-3 py-1 rounded-md text-sm border transition
                    ${colors.border.default} ${colors.text.primary} ${colors.accent.borderHover}
                    hover:scale-105
                    cursor-pointer
                    `}
                >
                    {open ? "Hide Filters" : "Show Filters"}
                </button>
            </div>

            {!open && (
            <div className="flex items-center justify-between py-2">
                
                {/* Left: summary */}
                <div className="flex flex-wrap gap-2 text-sm">
                {selectedCategories.map(item => (
                    <Pill 
                        key={item} label={item}
                        active={selectedCategories.includes(item)}
                        onClick={() => toggle(item, "category")} 
                    />
                ))}

                {selectedSkills.map(item => (
                    <Pill 
                        key={item} label={item}
                        active={selectedSkills.includes(item)}
                        onClick={() => toggle(item, "skill")}
                    />
                ))}

                {!hasActiveFilters && (
                    <span className={`${colors.text.muted} text-sm`}>
                    No filters selected
                    </span>
                )}
                </div>

            </div>
            )}

            {open && (
                <>
            {/* Top divider */}
            <div className={`${colors.border.subtle} border-t`} />

            {/* Categories */}
            <section className="space-y-3">
            <h3 className={`text-lg font-semibold ${colors.text.primary}`}>
                Categories
            </h3>

            <div className="flex flex-wrap gap-3">
                {categories.map(item => (
                <Pill 
                    key={item} label={item}
                    active={selectedCategories.includes(item)}
                    onClick={() => toggle(item, "category")} 
                />
                ))}
            </div>
            </section>

            {/* Skills */}
            <section className="space-y-3">
            <h3 className={`text-lg font-semibold ${colors.text.primary}`}>
                Software / Skills
            </h3>

            <div className="flex flex-wrap gap-3">
                {skills.map(item => (
                <Pill 
                    key={item} label={item}
                    active={selectedSkills.includes(item)}
                    onClick={() => toggle(item, "skill")}
                />
                ))}
            </div>
            </section>

            {/* Clear button */}
            <div className="pt-2">
            <button
                onClick={() => {
                setSelectedSkills([]);
                setSelectedCategories([]);
                }}
                disabled={isEmpty}
                className={`
                w-full px-4 py-2 rounded-lg
                text-sm font-medium transition border

                ${
                    isEmpty
                    ? `${colors.border.default} ${colors.text.muted} opacity-50`
                    : `
                        ${colors.danger.border}
                        ${colors.danger.text}
                        hover:bg-orange-500
                        hover:text-black
                        cursor-pointer
                        `
                }
                `}
            >
                Clear All Filters
            </button>
            </div>
            </>
            )}
        </div>
    </div>
    );
}
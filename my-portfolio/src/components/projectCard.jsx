import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../design-system/tokens/colors";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const image =
    hovered && project.coverGif
      ? project.coverGif
      : project.coverImg || "/p123/ProjectsMedia/placeholder.jpg";

  return (
    <div
      onClick={() => navigate(`/project/${project.title}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative aspect-square overflow-hidden rounded-xl
        ${colors.bg.surface} shadow-md cursor-pointer
        border border-transparent
        ${colors.accent.borderHover}
        hover:scale-[1.02] transition
      `}
    >
      {/* Image */}
      <img
        src={image}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover"
      />

      {/* Hover overlay */}
      <div
        className={`
          absolute inset-0 flex flex-col items-center justify-center
          ${colors.bg.overlay} ${colors.text.primary}
          transition-opacity duration-300
          ${hovered ? "opacity-100" : "opacity-0"}
          text-center px-4
        `}
      >
        {/* Title */}
        <div className="text-lg font-semibold">
          {project.title}
        </div>

        {/* Skills */}
        {project.skills && (
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2 py-1 rounded-full border border-white/20 bg-black/30"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
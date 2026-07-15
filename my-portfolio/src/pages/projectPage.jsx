import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { useState } from "react";
import { colors } from "../design-system/tokens/colors";

export default function ProjectPage() {
  const { title } = useParams();
  const project = projects.find((p) => p.title === title);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className={`min-h-screen ${colors.bg.base} ${colors.text.primary} flex items-center justify-center px-6`}>
        <h1 className="text-2xl font-semibold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${colors.bg.base} ${colors.text.primary} px-6 py-12`}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-3">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-neutral-300 mb-10 leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Link */}
        {project.link && (
          <div className="mb-10">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`
                inline-block
                px-5 py-2 rounded-full border

                ${colors.border.default}
                ${colors.text.primary}

                hover:border-emerald-400
                hover:text-emerald-400

                transition
                cursor-pointer
              `}
            >
              See More ↗
            </a>
          </div>
        )}

        {/* Media Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.images?.map((image, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(image)}
              className="overflow-hidden rounded-xl bg-neutral-900 shadow-md cursor-pointer hover:scale-[1.02] transition"
            >
              <img
                src={image}
                alt={`${project.title} ${i}`}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}

          {project.videos?.map((video, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl bg-neutral-900 shadow-md"
            >
              <video controls className="w-full aspect-square object-cover">
                <source src={video} />
              </video>
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          >
            <img
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
}
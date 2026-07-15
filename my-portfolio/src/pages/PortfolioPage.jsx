import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { colors } from "../design-system/tokens/colors";
import { use, useEffect, useState } from "react";
import ProjectFilters from "../components/ProjectFilters";

export default function PortfolioPage() {

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filtered = projects.filter((project) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(project.category);

      const skillMatch =
        selectedSkills.length === 0 ||
        project.skills?.some((skill) =>
          selectedSkills.includes(skill)
        );

      return categoryMatch && skillMatch;
    });

    setFilteredProjects(filtered);
  }, [selectedSkills, selectedCategories]);

  return (
    <div className={`${colors.bg.base} ${colors.text.primary} min-h-screen`}>
      
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">

        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            My Projects
          </h1>
        </div>

        {/* Filters */}
        <ProjectFilters
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />

        {/* Content */}
        {filteredProjects.length === 0 ? (
          <p className={colors.text.muted}>
            No projects found.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
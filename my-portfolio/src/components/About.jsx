import { colors } from "../design-system/tokens/colors";

export default function About() {
  return (
    <section id = "about" className={`px-6 py-16 max-w-6xl mx-auto ${colors.bg.base}`}>
      <div className="grid gap-10 items-center md:grid-cols-2">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/p123/me.jpg"
            alt="Caden"
            className="
                w-full max-w-sm md:max-w-md
                aspect-square object-cover
                rounded-2xl shadow-md
                ring-1 ring-neutral-800
            "
          />
        </div>

        {/* Text */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className={`text-3xl font-bold ${colors.text.primary}`}>
            About Me
          </h2>

          <p className={`text-lg leading-relaxed ${colors.text.secondary}`}>
            I approach design with a focus on balancing aesthetics and function,
            aiming for clarity, structure, and intentional visual communication.
            I’m drawn to clean layouts, simple visual systems, and work that conveys
            ideas effectively without unnecessary complexity.
          </p>

          <p className={`text-lg leading-relaxed ${colors.text.secondary}`}>
            My process is exploratory and iterative, often refining ideas through
            experimentation. While my work spans 3D, games, and digital projects,
            I carry a consistent design mindset rooted in simplicity, purpose, and
            a “less is more” approach to visual problem-solving.
          </p>
        </div>

      </div>
    </section>
  );
}
import { colors } from "../design-system/tokens/colors";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="fixed inset-0 h-full w-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/p123/HeroVids/CelPingPong.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className={`absolute inset-0 ${colors.bg.overlay}`} />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className={`text-4xl sm:text-6xl font-bold tracking-tight ${colors.text.primary}`}>
          Hi, I’m Caden
        </h1>

        <p className={`mt-4 max-w-xl text-lg ${colors.text.secondary}`}>
          I create digital experiences and 3D work that blend technical development with creative design.
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => scrollTo("my-work")}
            className={`
               px-5 py-2 rounded-full
              ${colors.accent.primary}
              text-black font-medium

              border border-transparent

              hover:bg-transparent
              ${colors.accent.textHover}
              ${colors.accent.borderHover}
              hover:scale-105

              transition
              cursor-pointer
            `}
          >
            View Work
          </button>

          <button
            onClick={() => scrollTo("about")}
            className={`
                px-5 py-2 rounded-full

                border ${colors.border.default}
                ${colors.text.primary}

                ${colors.accent.borderHover}
                ${colors.accent.textHover}
                hover:scale-105

                transition
                cursor-pointer
            `}
            >
            About Me
            </button>   
        </div>
      </div>
    </section>
  );
}
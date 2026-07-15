import { Link } from "react-router-dom";
import { colors } from "../design-system/tokens/colors";
import ItchIcon from "../Icons/itch-io.svg?react";
import GitHubIcon from "../Icons/GitHub_Invertocat_White.svg?react";
import LinkedInIcon from "../Icons/linkedin.svg?react";

export default function Navbar() {
  const externalLinkClass = `
    ${colors.text.primary}
    ${colors.accent.textHover}
    transition
    cursor-pointer
  `;

  const scrollToContact = () => {
    const el = document.getElementById("contact");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
        flex items-center justify-between
        px-6 py-4
        ${colors.bg.base}
        ${colors.text.primary}
      `}
    >
      {/* Left side cluster */}
      <div className="flex items-center gap-6">

        {/* Brand */}
        <Link
          to="/"
          className={`
            text-lg font-bold tracking-tight transition
            ${colors.accent.textHover}
          `}
        >
          Caden Miller
        </Link>

        {/* Divider (optional but recommended) */}
        <div className={`h-5 w-px ${colors.border.subtle}`} />

        {/* Projects */}
        <Link
          to="/portfolio"
          className={`
            text-md font-medium tracking-wide transition
            ${colors.text.secondary}
            ${colors.accent.textHover}
          `}
        >
          Projects
        </Link>

        {/* Contact */}
        <button
          onClick={scrollToContact}
          className={`
            text-md font-medium tracking-wide transition
            ${colors.text.secondary}
            ${colors.accent.textHover}
            cursor-pointer
          `}
        >
          Contact
        </button>

      </div>

      {/* External Links */}
      <div className="flex items-center gap-6">
        
        <a
          href="https://github.com/cadermill"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub link"
          className={externalLinkClass}
        >
          <GitHubIcon className="w-7 h-7" />
        </a>

        <a
          href="https://linkedin.com/in/caden-miller-736251295"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn link"
          className={externalLinkClass}
        >
          <LinkedInIcon className="w-7 h-7" />
        </a>

        <a
          href="https://itch.io/profile/cadermill"
          target="_blank"
          rel="noreferrer"
          aria-label="Itch.io link"
          className={externalLinkClass}
        >
          <ItchIcon className="w-7 h-7" />
        </a>

      </div>
    </nav>
  );
}
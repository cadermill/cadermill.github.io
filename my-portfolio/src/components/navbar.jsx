import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`
        relative
        flex items-center justify-between
        px-4 py-4 sm:px-6
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
        <div className={`hidden h-5 w-px ${colors.border.subtle} sm:block`} />

        {/* Projects */}
        <Link
          to="/portfolio"
          className={`hidden sm:block
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
          className={`hidden sm:block
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
      <div className="hidden items-center gap-6 sm:flex">
        
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

      {/* Mobile menu button */}
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className={`
          flex h-10 w-10 flex-col items-center justify-center gap-1.5
          rounded-md border ${colors.border.subtle}
          ${colors.text.primary} sm:hidden
        `}
      >
        <span className="h-0.5 w-5 bg-current" />
        <span className="h-0.5 w-5 bg-current" />
        <span className="h-0.5 w-5 bg-current" />
      </button>

      {menuOpen && (
        <div className={`absolute left-4 right-4 top-full z-50 flex flex-col gap-4 border ${colors.border.subtle} ${colors.bg.base} p-5 shadow-lg sm:hidden`}>
          <Link
            to="/portfolio"
            onClick={() => setMenuOpen(false)}
            className={`${colors.text.secondary} ${colors.accent.textHover}`}
          >
            Projects
          </Link>

          <button
            type="button"
            onClick={scrollToContact}
            className={`text-left ${colors.text.secondary} ${colors.accent.textHover} cursor-pointer`}
          >
            Contact
          </button>

          <div className={`border-t ${colors.border.subtle} pt-4`}>
            <div className="flex items-center gap-6">
              <a href="https://github.com/cadermill" target="_blank" rel="noreferrer" aria-label="GitHub link" className={externalLinkClass}>
                <GitHubIcon className="h-7 w-7" />
              </a>
              <a href="https://linkedin.com/in/caden-miller-736251295" target="_blank" rel="noreferrer" aria-label="LinkedIn link" className={externalLinkClass}>
                <LinkedInIcon className="h-7 w-7" />
              </a>
              <a href="https://itch.io/profile/cadermill" target="_blank" rel="noreferrer" aria-label="Itch.io link" className={externalLinkClass}>
                <ItchIcon className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
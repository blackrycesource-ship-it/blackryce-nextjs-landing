"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const links = [
  { href: "/about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#technology", key: "technology" },
  { href: "#work", key: "work" },
  { href: "#contact", key: "contact" },
];

export default function Navbar() {

const t = useTranslations("nav");
const locale = useLocale();

  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="navbar">

      {/* Green scroll progress line */}
      <div
        className="navbar-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="nav-inner page-width">

        <a href="#top" className="logo" onClick={close}>
          <img src="/logo.jpeg" alt="Black Ryce" />
        </a>

        <nav className="desktop-nav">
  {links.map((link) =>
    link.href === "/about" ? (
      <Link
        key={link.href}
        href="/about"
        onClick={close}
      >
        {t(link.key)}
      </Link>
    ) : (
      <a
        key={link.href}
        href={link.href}
        onClick={close}
      >
        {t(link.key)}
      </a>
    )
  )}
</nav>

        <a
          href="https://wa.me/919365427150"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
        >
          {t("letsTalk")}
        </a>
         <div className="language-switcher">
  <button
    type="button"
    className="language-toggle"
    aria-label="Change language"
    onClick={() => setLanguageOpen((prev) => !prev)}
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3 12H21"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 3C14.2 5.4 15.4 8.6 15.4 12C15.4 15.4 14.2 18.6 12 21"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 3C9.8 5.4 8.6 8.6 8.6 12C8.6 15.4 9.8 18.6 12 21"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  </button>

  {languageOpen && (
    <div className="language-menu">
      <Link
        href="/"
        locale="en"
        className={locale === "en" ? "language-selected" : ""}
        onClick={() => setLanguageOpen(false)}
      >
        English
      </Link>

      <Link
        href="/"
        locale="ar"
        className={locale === "ar" ? "language-selected" : ""}
        onClick={() => setLanguageOpen(false)}
      >
        العربية
      </Link>
    </div>
  )}
</div>

        <button
          type="button"
          className={
            open
              ? "mobile-menu-button open"
              : "mobile-menu-button"
          }
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
        </button>

      </div>

      <div className={open ? "mobile-nav open" : "mobile-nav"}>

       {links.map((link) =>
          link.href === "/about" ? (
            <Link
              key={link.href}
              href="/about"
              onClick={close}
            >
              {t(link.key)}
            </Link>
          ) : (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
            >
              {t(link.key)}
            </a>
          )
        )}

        <a
          href="https://wa.me/919365427150"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
        >
          {t("letsTalk")}
        </a>

      </div>

    </header>
  );
}
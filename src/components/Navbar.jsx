"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
  href="https://wa.me/919365427150"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-button"
>
  Let's talk
</a>

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

        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={close}
          >
            {link.label}
          </a>
        ))}

        <a
          href="https://wa.me/919365427150"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
          >
            Let's talk
          </a>

      </div>

    </header>
  );
}
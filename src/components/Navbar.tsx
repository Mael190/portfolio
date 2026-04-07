import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#experience", label: "Expérience" },
  { href: "#skills", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,backdrop-filter,box-shadow,border-color] duration-500 border border-transparent shadow-none outline-none ${
        scrolled
          ? "glass shadow-lg shadow-slate-200/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-slate-800 hover:text-primary-600 transition-colors"
        >
          maël<span className="text-primary-500">.</span>dev
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks
            .filter((link) => link.label !== "Contact")
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-primary-600 text-white rounded-full text-sm font-semibold hover:bg-primary-700 transition-all shadow-md shadow-primary-200 hover:scale-105 active:scale-95"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-primary-600 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 animate-fade-up shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium transition-colors py-2 px-4 rounded-xl ${
                  link.label === "Contact"
                    ? "bg-primary-600 text-white text-center mt-2 shadow-lg shadow-primary-100"
                    : "text-slate-700 hover:text-primary-600"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

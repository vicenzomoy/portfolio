import { useState } from "react";

function Navbar({ onNavigateToSmartPond }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Education",
      href: "#education",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const handleSmartPondClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (onNavigateToSmartPond) {
      onNavigateToSmartPond();
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        {/* Navbar Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" onClick={handleMenuClick} className="text-xl font-bold tracking-wide text-white">
            Vicenzo<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-gray-300 transition hover:text-cyan-400">
                {item.name}
              </a>
            ))}

            {/* SmartPond Direct Link */}
            <a
              href="/smartpond"
              onClick={handleSmartPondClick}
              className="flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500/20 hover:border-cyan-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
              </span>
              <span>SmartPond IoT</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-300 transition hover:text-cyan-400 md:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleMenuClick}
                  className="py-1 text-sm text-gray-300 transition hover:text-cyan-400"
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-2 border-t border-white/10">
                <a
                  href="/smartpond"
                  onClick={handleSmartPondClick}
                  className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500/20 border border-cyan-400/30 py-2.5 text-xs font-semibold text-cyan-300"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  Kunjungi Halaman SmartPond IoT
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

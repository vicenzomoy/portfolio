import { useState } from "react";

function Navbar() {
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
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-gray-300 transition hover:text-cyan-400">
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-gray-300 transition hover:text-cyan-400 md:hidden" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} onClick={handleMenuClick} className="py-2 text-sm text-gray-300 transition hover:text-cyan-400">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

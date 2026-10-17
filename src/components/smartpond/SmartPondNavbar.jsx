import { useState, useEffect } from "react";
import { ArrowLeft, Menu, X, Wifi, Cpu, Activity } from "lucide-react";

export default function SmartPondNavbar({ onNavigateHome }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Ikhtisar", href: "#overview" },
    { name: "Prototipe 3D", href: "#prototype" },
    { name: "Video Simulasi", href: "#simulation" },
    { name: "Live Telemetri", href: "#telemetry" },
    { name: "Arsitektur IoT", href: "#architecture" },
    { name: "Spesifikasi", href: "#specs" },
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/90 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20"
          : "bg-gray-950/60 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: Brand & Home Link */}
        <div className="flex items-center gap-4">
          <button
            onClick={onNavigateHome}
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300 cursor-pointer"
            title="Kembali ke Portofolio Utama"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Kembali ke Portfolio</span>
            <span className="sm:hidden">Portfolio</span>
          </button>

          <a href="#overview" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden bg-gradient-to-tr from-cyan-900/60 to-emerald-900/60 p-1 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors">
              <img
                src="/assets/logo_smartpond.png"
                alt="SmartPond Logo"
                className="h-full w-full object-contain filter drop-shadow"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Smart<span className="text-cyan-400">Pond</span>
                </span>
                <span className="rounded-full bg-cyan-500/10 border border-cyan-400/30 px-2 py-0.5 text-[10px] font-semibold text-cyan-300 uppercase tracking-wider">
                  IoT Project
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-gray-400 leading-none">
                Smart Aquaculture Monitoring & Automation
              </p>
            </div>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-gray-900/60 px-3 py-1.5 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="rounded-full px-3 py-1 text-xs font-medium text-gray-300 transition-all hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right: Live Status Beacon & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wide flex items-center gap-1">
              <Wifi className="h-3 w-3" /> ESP32 LIVE
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-300 transition hover:bg-white/10 lg:hidden cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-gray-950/95 px-6 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Navigasi Halaman</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Telemetri Aktif
              </span>
            </div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10">
              <button
                onClick={onNavigateHome}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-cyan-500/20 border border-cyan-400/30 py-2.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/30 transition cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" /> Kembali ke Portfolio Vicenzo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

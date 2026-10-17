import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function SmartPondFooter({ onNavigateHome }) {
  return (
    <footer className="relative border-t border-white/10 bg-gray-950 py-12 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Logo & Bio */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-900 to-emerald-900 p-1 border border-cyan-400/30">
              <img
                src="/assets/logo_smartpond.png"
                alt="SmartPond Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="text-base font-bold text-white">
                Smart<span className="text-cyan-400">Pond</span>
              </span>
              <p className="text-xs text-gray-400">IoT Autonomous Fish Pond Ecosystem</p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Kembali ke Portfolio Vicenzo</span>
            </button>
            <span className="text-white/20">•</span>
            <a
              href="#overview"
              className="text-gray-300 hover:text-white transition"
            >
              Kembali ke Atas
            </a>
          </div>
        </div>

        {/* Disclaimer Notice Reiteration */}
        <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-950/20 p-4 text-xs text-amber-200/80 flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Catatan Hak Properti & Ilustrasi:</strong> Seluruh media visual berupa gambar render 3D (
            <code className="text-amber-300 font-mono">ilustrasi.png</code>) dan video animasi (
            <code className="text-amber-300 font-mono">video_simulasi.mp4</code>) yang digunakan dalam website ini adalah representasi konsep ilustrasi perancangan dan bukan merupakan dokumentasi produk/prototipe fisik final asli.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} SmartPond</p>
          <p className="flex items-center gap-1">
            Built with React 19, Tailwind CSS & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

import { AlertTriangle, Info } from "lucide-react";

export function DisclaimerBanner({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-cyan-950/30 p-4 sm:p-5 backdrop-blur-md shadow-lg shadow-amber-950/20 ${className}`}
    >
      <div className="absolute -left-12 -top-12 h-28 w-28 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
      <div className="flex items-start sm:items-center gap-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-inner">
          <AlertTriangle className="h-5 w-5 animate-pulse" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-amber-300 border border-amber-500/30">
              Pemberitahuan Ilustrasi
            </span>
            <span className="text-xs text-amber-200/70">Concept Design & Simulation</span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-amber-100/90 font-medium">
            <strong className="text-amber-300">Catatan Penting:</strong> Gambar 3D dan video simulasi yang disajikan pada halaman ini merupakan{" "}
            <span className="underline decoration-amber-400/50 underline-offset-2">ilustrasi konseptual 3D dan animasi representasi perancangan sistem</span>
            , bukan merupakan produk atau prototipe fisik final aslinya.
          </p>
        </div>
      </div>
    </div>
  );
}

export function DisclaimerTag({ text = "Gambar / Video merupakan ilustrasi, bukan produk fisik asli" }) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/70 px-3 py-1 text-xs text-amber-300 shadow-sm backdrop-blur-sm">
      <Info className="h-3.5 w-3.5 text-amber-400" />
      <span className="font-medium">{text}</span>
    </div>
  );
}

export default DisclaimerBanner;

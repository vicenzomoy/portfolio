import { Cpu, Wind, Droplets, Zap, Eye, Play, Gauge, ShieldCheck, Sparkles } from "lucide-react";

export default function SmartPondHero() {
  const highlights = [
    {
      icon: Droplets,
      label: "4 Sensor Multi-Parameter",
      desc: "pH, Suhu, TDS & Oksigen Terlarut",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: Wind,
      label: "Hybrid Renewable Power",
      desc: "Kincir Angin Mini + Solar + Aki 12V",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Cpu,
      label: "ESP32 IoT Core",
      desc: "Dual-Core 240MHz & Wi-Fi Cloud MQTT",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Zap,
      label: "Otomasi Presisi 24/7",
      desc: "Pakan Otomatis & Aerasi Adaptif",
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20",
    },
  ];

  return (
    <section id="overview" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Ambience / Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] sm:w-[900px] rounded-full bg-gradient-to-tr from-cyan-600/15 via-emerald-500/10 to-blue-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/60 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-950/50">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "8s" }} />
            <span>Sistem Otomasi & Monitoring Kolam Berbasis IoT</span>
            <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-cyan-400" />
            <span className="hidden sm:inline-block text-emerald-400 font-mono">Aquaculture 4.0</span>
          </div>

          {/* Logo & Headline */}
          <div className="mt-8 flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-xl animate-pulse" />
              <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-3xl border border-cyan-400/40 bg-gradient-to-b from-gray-900/90 to-gray-950/90 p-3 shadow-2xl backdrop-blur-xl">
                <img
                  src="/assets/logo_smartpond.png"
                  alt="Logo SmartPond"
                  className="h-full w-full object-contain filter drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15]">
              Modernisasi Kolam Ikan dengan{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
                SmartPond IoT
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300">
              Platform IoT terpadu untuk monitoring kualitas air kolam secara waktu-nyata, pemberian pakan terjadwal,
              serta aerasi otomatis dengan dukungan pasokan energi mandiri kincir angin mini dan panel surya.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#prototype"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-3 text-sm font-semibold text-gray-950 shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Eye className="h-4 w-4" />
              <span>Eksplorasi Prototipe 3D</span>
            </a>

            <a
              href="#simulation"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-gray-900/80 px-5 py-3 text-sm font-semibold text-cyan-300 shadow-md backdrop-blur-md transition-all hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="h-4 w-4 text-cyan-400 fill-cyan-400" />
              <span>Tonton Video Animasi</span>
            </a>

            <a
              href="#telemetry"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-200 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Gauge className="h-4 w-4 text-emerald-400" />
              <span>Simulasi Live Telemetri</span>
            </a>
          </div>

          {/* Key Metric Highlights Grid */}
          <div className="mt-14 w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`group rounded-2xl border p-4.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.bg}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-950/70 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                      <Icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">{item.label}</h3>
                      <p className="text-xs text-gray-400 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize,
  Film,
  Sparkles,
  Info,
  CheckCircle2,
  ArrowRight,
  Wind,
  Droplets,
  Activity,
  Fish,
} from "lucide-react";
import { DisclaimerTag } from "./DisclaimerAlert";

const SIMULATION_STAGES = [
  {
    step: "01",
    title: "Pemanenan & Regulasi Energi Hibrida",
    icon: Wind,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    desc: "Kincir angin mini dan panel surya secara simultan memanen energi alam. Tegangan distabilkan melalui Solar/Wind Charge Controller untuk mengisi aki 12V.",
    metric: "Input: 12-18V DC • Efisiensi: 92%",
  },
  {
    step: "02",
    title: "Sampling Kualitas Air oleh ESP32",
    icon: Droplets,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    desc: "Array multi-probe membaca tingkat keasaman (pH), suhu (°C), dan kekeruhan (TDS). Mikrokontroler ESP32 melakukan validasi data dan filtering noise.",
    metric: "Sampling: Setiap 5s • MQTT Broker Synced",
  },
  {
    step: "03",
    title: "Aktivasi Aerasi Oksigen Cerdas",
    icon: Activity,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    desc: "Ketika dissolved oxygen (DO) terdeteksi turun, relay ESP32 menghidupkan Aerator DC. Batu aerasi berpori mikro menyemburkan jutaan gelembung oksigen segar.",
    metric: "Debit Udara: 3.5 L/min • Auto-Cutoff",
  },
  {
    step: "04",
    title: "Penjadwalan Pakan Ikan Presisi",
    icon: Fish,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    desc: "Motor feeder otomatis membuka corong pelet sesuai timer yang telah disetel. Mencegah over-feeding dan menjaga air tetap jernih dan higienis.",
    metric: "Dosis: 15g/sesi • 3x Sehari",
  },
];

export default function SimulationVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="simulation" className="relative py-20 bg-gray-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <Film className="h-3.5 w-3.5" />
            <span>Video Simulasi Animasi</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Simulasi Gerak &{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Alur Kerja Otomasi
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Saksikan demonstrasi visual animasi alur kerja prototipe SmartPond, mulai dari pemanenan tenaga angin,
            sirkulasi oksigen aerator, hingga penjadwalan pakan otomatis.
          </p>

          <div className="mt-4 flex justify-center">
            <DisclaimerTag text="Catatan: Video merupakan animasi simulasi konseptual, bukan produk/prototipe fisik asli" />
          </div>
        </div>

        {/* Video & Process Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Video Player Card (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-gray-900 to-gray-950 p-2 sm:p-3 shadow-2xl backdrop-blur-xl">
              {/* Media Frame */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="/assets/video_simulasi.mp4"
                  poster="/assets/ilustrasi.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="h-full w-full object-cover"
                />

                {/* Video Overlay Watermark & Disclaimer */}
                <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-950/80 border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    Simulasi 3D Animasi SmartPond
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-20 pointer-events-none">
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-950/80 border border-amber-500/30 px-2 py-0.5 text-[10px] font-medium text-amber-300 backdrop-blur-md">
                    <Info className="h-3 w-3" /> Hanya Video Animasi / Ilustrasi
                  </span>
                </div>

                {/* Big Center Play/Pause button on hover if paused */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto h-16 w-16 flex items-center justify-center rounded-full bg-cyan-500/90 text-gray-950 shadow-2xl backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer"
                    aria-label="Putar Video"
                  >
                    <Play className="h-8 w-8 ml-1 fill-gray-950" />
                  </button>
                )}

                {/* Bottom Custom Control Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-950/90 via-gray-950/60 to-transparent p-3 pt-6 flex items-center justify-between text-white z-20">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="rounded-lg bg-white/10 p-2 hover:bg-cyan-500 hover:text-gray-950 transition cursor-pointer"
                      title={isPlaying ? "Jeda" : "Putar"}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
                    </button>

                    <button
                      onClick={restartVideo}
                      className="rounded-lg bg-white/10 p-2 hover:bg-white/20 transition cursor-pointer"
                      title="Ulangi dari Awal"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>

                    <button
                      onClick={toggleMute}
                      className="rounded-lg bg-white/10 p-2 hover:bg-white/20 transition cursor-pointer"
                      title={isMuted ? "Bunyikan Suara" : "Senyapkan"}
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-cyan-300 font-medium hidden sm:inline-block">
                      1080p Full HD • Simulasi
                    </span>
                    <button
                      onClick={handleFullscreen}
                      className="rounded-lg bg-white/10 p-2 hover:bg-white/20 transition cursor-pointer"
                      title="Layar Penuh"
                    >
                      <Maximize className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sub-card Disclaimer Notice */}
              <div className="mt-3 rounded-xl border border-amber-500/20 bg-amber-950/30 p-3 text-xs text-amber-200/90 flex items-start gap-2.5">
                <Info className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Catatan Verifikasi:</strong> Video di atas dirancang menggunakan perangkat lunak render animasi 3D
                  untuk mensimulasikan mekanisme aliran air, gelembung oksigen, dan rotasi generator kincir angin. Ini
                  bukan rekaman video dari unit prototipe fisik nyata.
                </p>
              </div>
            </div>
          </div>

          {/* Simulation Stages Breakdown (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="mb-2">
              <span className="text-xs uppercase font-bold tracking-wider text-cyan-400">
                Alur Tahapan Operasional
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Cara Kerja Sistem yang Disimulasikan
              </h3>
            </div>

            <div className="space-y-3">
              {SIMULATION_STAGES.map((stage, idx) => {
                const Icon = stage.icon;
                const isCurrent = idx === activeStepIndex;
                return (
                  <div
                    key={stage.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`rounded-2xl border p-4 transition-all duration-300 cursor-pointer ${
                      isCurrent
                        ? "border-cyan-400/50 bg-gradient-to-r from-cyan-950/40 to-gray-900/90 shadow-lg shadow-cyan-950/30 translate-x-1"
                        : "border-white/5 bg-gray-900/40 hover:border-white/20 hover:bg-gray-900/70"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <span className="font-mono text-xs font-bold text-cyan-400">{stage.step}</span>
                        <div
                          className={`mt-1.5 flex h-9 w-9 items-center justify-center rounded-xl border ${stage.color}`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-white flex items-center justify-between">
                          <span>{stage.title}</span>
                          {isCurrent && <CheckCircle2 className="h-4 w-4 text-cyan-400" />}
                        </h4>
                        <p className="mt-1 text-xs text-gray-300 leading-relaxed">{stage.desc}</p>
                        <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-mono text-cyan-300">
                          {stage.metric}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

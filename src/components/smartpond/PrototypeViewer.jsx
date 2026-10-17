import { useState } from "react";
import {
  Wind,
  Cpu,
  Zap,
  BatteryCharging,
  Fish,
  Waves,
  Activity,
  Layers,
  Maximize2,
  X,
  CheckCircle2,
  Info,
  Sparkles,
} from "lucide-react";
import { DisclaimerTag } from "./DisclaimerAlert";

const COMPONENTS_DATA = [
  {
    id: "kincir-angin",
    name: "Kincir Angin Mini",
    category: "Pembangkit Daya",
    categoryColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    icon: Wind,
    coords: { x: 17, y: 17 }, // % position on the image
    summary: "Pemanen energi kinetik angin ramah lingkungan untuk pengisian daya aki kontinu.",
    description:
      "Turbin angin mikro 3-blade yang mengubah hembusan angin di sekitar kolam terbuka menjadi energi listrik DC. Berfungsi bersama solar panel untuk menciptakan sistem energi hibrida terbarukan yang mandiri listrik (off-grid).",
    specs: [
      { label: "Output Generator", val: "DC 12V - 24V (Brushless)" },
      { label: "Kecepatan Awal (Cut-in)", val: "2.0 m/s" },
      { label: "Material Bilah", val: "Nylon Fiber Reinforced" },
      { label: "Proteksi", val: "Over-speed Braking & Weatherproof IP65" },
    ],
  },
  {
    id: "feeder-otomatis",
    name: "Feeder Otomatis",
    category: "Aktuator Cerdas",
    categoryColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    icon: Fish,
    coords: { x: 38, y: 18 },
    summary: "Dispenser pakan pelet ikan terjadwal dengan takaran presisi berbasis motor servo.",
    description:
      "Wadah penampung pakan transparan berkapasitas 1-2 kg yang dilengkapi katup dosing terkontrol. Terhubung dengan mikrokontroler ESP32 untuk mendistribusikan pakan pelet secara otomatis sesuai jadwal (pagi, siang, sore) atau dipicu secara remote melalui aplikasi.",
    specs: [
      { label: "Penggerak Katup", val: "Micro Servo MG996R Metal Gear" },
      { label: "Kapasitas Hopper", val: "1.5 Liter (Pellet 1mm - 5mm)" },
      { label: "Toleransi Takaran", val: "± 2 gram per dosis" },
      { label: "Sensor Level Pakan", val: "Ultrasonic / IR Level Detector" },
    ],
  },
  {
    id: "esp32",
    name: "ESP32 IoT Core",
    category: "Unit Kontroler",
    categoryColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    icon: Cpu,
    coords: { x: 26, y: 44 },
    summary: "Otak mikrokontroler dual-core dengan modul Wi-Fi & Bluetooth untuk telemetri IoT.",
    description:
      "Ditempatkan di dalam enclosure tahan air berstandar IP66 dengan penutup transparan. Mengelola pembacaan seluruh sensor analog & digital, mengeksekusi logika otomasi aerator & feeder, serta mengirimkan data ke broker MQTT/Cloud secara berkala.",
    specs: [
      { label: "Processor", val: "Xtensa® Dual-Core 32-bit LX6 @ 240MHz" },
      { label: "Konektivitas", val: "Wi-Fi 802.11 b/g/n + BLE 4.2" },
      { label: "Memory", val: "520 KB SRAM + 4MB SPI Flash" },
      { label: "Protokol IoT", val: "MQTT, HTTP REST, WebSockets" },
    ],
  },
  {
    id: "sensor-air",
    name: "Sensor Kualitas Air",
    category: "Sensor Array",
    categoryColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    icon: Activity,
    coords: { x: 67, y: 28 },
    summary: "Gugusan multi-probe pengukur pH, TDS, temperatur, dan kadar oksigen kolam.",
    description:
      "Kombinasi probe industri kedap air yang dicelupkan ke kolom air: Probe pH analog untuk keasaman, sensor suhu DS18B20 stainless steel anti-korosi, probe TDS meter untuk partikel terlarut/kejernihan, dan DO meter untuk saturasi oksigen.",
    specs: [
      { label: "Probe pH", val: "pH-4502C (Rentang 0 - 14 pH, Akurasi ±0.1)" },
      { label: "Probe Suhu", val: "DS18B20 Waterproof (-10°C s/d +85°C)" },
      { label: "Probe TDS", val: "Gravity Analog TDS (0 - 1000 PPM)" },
      { label: "Sampling Rate", val: "Interval 5 detik (Moving Average)" },
    ],
  },
  {
    id: "kontrol-pengisian",
    name: "Kontrol Pengisian",
    category: "Manajemen Daya",
    categoryColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    icon: Zap,
    coords: { x: 32, y: 68 },
    summary: "Smart Charge Controller untuk proteksi dan efisiensi pengisian baterai.",
    description:
      "Unit pengatur pengisian daya berbasis PWM/MPPT yang meregulasi tegangan dari turbin angin mini dan panel surya menuju aki. Mencegah overcharge, over-discharge, dan arus balik pada saat malam hari atau tanpa angin.",
    specs: [
      { label: "Tegangan Sistem", val: "Auto 12V / 24V DC" },
      { label: "Maksimal Arus", val: "10A - 20A Charge Current" },
      { label: "Fitur Proteksi", val: "Short-Circuit, Reverse Polarity, Overheat" },
      { label: "Indikator Status", val: "LED Status Charging & Battery Health" },
    ],
  },
  {
    id: "aki-cadangan",
    name: "Aki Cadangan (Battery Bank)",
    category: "Penyimpan Energi",
    categoryColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    icon: BatteryCharging,
    coords: { x: 44, y: 74 },
    summary: "Baterai 12V Deep Cycle untuk suplai daya mandiri 24 jam nonstop tanpa henti.",
    description:
      "Bank baterai VRLA / Sealed Lead Acid berkapasitas tinggi yang menjamin sistem IoT, mikrokontroler ESP32, pompa aerator, dan motor feeder tetap beroperasi normal bahkan saat tidak ada sinar matahari atau kecepatan angin rendah.",
    specs: [
      { label: "Kapasitas Nominal", val: "12V 7.2Ah / 12Ah Deep Cycle" },
      { label: "Otonomi Sistem", val: "Hingga 24-36 Jam Standalone" },
      { label: "Suhu Operasional", val: "-15°C hingga +50°C" },
      { label: "Regulasi Tegangan", val: "Step-Down DC-DC Buck Converter 5V/3.3V" },
    ],
  },
  {
    id: "batu-aerasi",
    name: "Batu Aerasi & Kolam",
    category: "Sirkulasi Akuatik",
    categoryColor: "text-teal-400 bg-teal-500/10 border-teal-500/30",
    icon: Waves,
    coords: { x: 55, y: 64 },
    summary: "Diffuser mikropori pembuat gelembung mikro oksigen untuk kelangsungan hidup ikan.",
    description:
      "Batu aerasi berpori mikro yang ditempatkan di dasar kolam/akuarium. Mengubah hembusan udara bertekanan dari aerator DC menjadi jutaan gelembung halus, memaksimalkan luas permukaan kontak oksigen dengan air kolam.",
    specs: [
      { label: "Ukuran Pori", val: "Ultra-fine pore (diameter 100-200 micron)" },
      { label: "Diameter Diffuser", val: "40mm - 60mm Carborundum" },
      { label: "Efisiensi Transfer O2", val: "Meningkat hingga 40% vs aerasi kasar" },
      { label: "Selang Penghubung", val: "Food-grade Silicone Tubing 4mm" },
    ],
  },
  {
    id: "aerator-dc",
    name: "Aerator DC 12V",
    category: "Aktuator Aerasi",
    categoryColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    icon: Activity,
    coords: { x: 86, y: 66 },
    summary: "Pompa diafragma udara hemat energi yang dikendalikan otomatis via relay ESP32.",
    description:
      "Pompa aerasi bertenaga DC 12V berefisiensi tinggi dengan suara senyap. Dinyalakan secara dinamis oleh ESP32 ketika kadar oksigen terlarut kolam berada di bawah ambang batas kritis (DO < 5 mg/L), sehingga menghemat konsumsi daya aki.",
    specs: [
      { label: "Tegangan Kerja", val: "DC 12V (Low Noise Diaphragm)" },
      { label: "Tekanan Maksimal", val: "0.025 MPa" },
      { label: "Debit Udara", val: "2.5 - 4.0 Liter / menit" },
      { label: "Konsumsi Daya", val: "4.5 Watt (Sangat Hemat)" },
    ],
  },
];

export default function PrototypeViewer() {
  const [selectedId, setSelectedId] = useState("esp32");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeComponent = COMPONENTS_DATA.find((c) => c.id === selectedId) || COMPONENTS_DATA[0];

  return (
    <section id="prototype" className="relative py-20 bg-gray-950/80 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <Layers className="h-3.5 w-3.5" />
            <span>Desain Interaktif Prototipe 3D</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Eksplorasi Komponen Perangkat{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              SmartPond
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Klik pin interaktif pada gambar ilustrasi atau pilih daftar komponen di bawah untuk melihat rincian fungsi,
            spesifikasi perangkat keras, dan integrasinya dalam ekosistem SmartPond.
          </p>

          <div className="mt-4 flex justify-center">
            <DisclaimerTag text="Catatan: Gambar merupakan ilustrasi konseptual 3D, bukan produk/prototipe fisik asli" />
          </div>
        </div>

        {/* Component Selector Chips */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {COMPONENTS_DATA.map((comp) => {
            const isSelected = comp.id === selectedId;
            const Icon = comp.icon;
            return (
              <button
                key={comp.id}
                onClick={() => setSelectedId(comp.id)}
                className={`group flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-cyan-500 text-gray-950 shadow-md shadow-cyan-500/30 scale-105"
                    : "border border-white/10 bg-gray-900/60 text-gray-300 hover:border-cyan-400/40 hover:bg-gray-800"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isSelected ? "text-gray-950" : "text-cyan-400"}`} />
                <span>{comp.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left/Center: Visual Image with Hotspots (lg:col-span-7 or 8) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-3">
            <div className="relative group rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-gray-900/90 to-gray-950 p-2 sm:p-3 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-gray-900 flex items-center justify-center">
                <img
                  src="/assets/ilustrasi.png"
                  alt="Ilustrasi Prototipe SmartPond IoT"
                  className="h-full w-full object-contain select-none"
                />

                {/* Hotspot Pins */}
                {COMPONENTS_DATA.map((comp) => {
                  const isSelected = comp.id === selectedId;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => setSelectedId(comp.id)}
                      style={{
                        left: `${comp.coords.x}%`,
                        top: `${comp.coords.y}%`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin cursor-pointer focus:outline-none"
                      aria-label={`Pilih ${comp.name}`}
                    >
                      <div className="relative flex items-center justify-center">
                        {/* Ripple Effect on Active */}
                        {isSelected && (
                          <span className="absolute h-8 w-8 rounded-full bg-cyan-400 opacity-60 animate-ping" />
                        )}
                        {/* Outer Ring */}
                        <div
                          className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 transition-transform duration-300 group-hover/pin:scale-125 ${
                            isSelected
                              ? "bg-cyan-400 border-white text-gray-950 shadow-lg shadow-cyan-400/80 scale-110"
                              : "bg-gray-950/80 border-cyan-400 text-cyan-400 backdrop-blur-md shadow-md"
                          }`}
                        >
                          <div className={`h-2 w-2 rounded-full ${isSelected ? "bg-gray-950" : "bg-cyan-400"}`} />
                        </div>

                        {/* Tooltip on pin */}
                        <div
                          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none whitespace-nowrap rounded-lg border px-2.5 py-1 text-[11px] font-bold shadow-xl transition-all duration-200 ${
                            isSelected
                              ? "bg-cyan-950 border-cyan-400 text-cyan-200 opacity-100 scale-100"
                              : "bg-gray-900/95 border-white/20 text-gray-200 opacity-0 group-hover/pin:opacity-100 group-hover/pin:scale-100 scale-95"
                          }`}
                        >
                          {comp.name}
                        </div>
                      </div>
                    </button>
                  );
                })}

                {/* Quick overlay controls */}
                <div className="absolute bottom-3 right-3 z-30 flex items-center gap-2">
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-gray-950/80 px-3 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-md transition hover:bg-white/10 hover:text-white cursor-pointer"
                  >
                    <Maximize2 className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Perbesar Gambar</span>
                  </button>
                </div>

                {/* Watermark/Notice badge inside the picture */}
                <div className="absolute top-3 left-3 z-30 pointer-events-none">
                  <span className="inline-flex items-center gap-1 rounded-md bg-gray-950/70 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-amber-300/90 backdrop-blur-md">
                    <Info className="h-3 w-3" /> Ilustrasi 3D Konseptual
                  </span>
                </div>
              </div>

              {/* Caption Bar */}
              <div className="mt-2.5 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-400 gap-1.5">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Model Perancangan Miniatur SmartPond Aquaculture</span>
                </span>
                <span className="text-[11px] text-amber-400/80">
                  *Bukan merupakan foto produk/prototipe fisik asli
                </span>
              </div>
            </div>
          </div>

          {/* Right: Component Detail Card (lg:col-span-5 or 4) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-gray-900/90 via-gray-950/90 to-gray-950 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300">
              {/* Category & Icon */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${activeComponent.categoryColor}`}
                >
                  <activeComponent.icon className="h-3.5 w-3.5" />
                  {activeComponent.category}
                </span>

                <span className="font-mono text-xs text-cyan-400/70">ID: {activeComponent.id.toUpperCase()}</span>
              </div>

              {/* Title & Summary */}
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  {activeComponent.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-cyan-300/90 leading-snug">
                  {activeComponent.summary}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {activeComponent.description}
                </p>
              </div>

              {/* Technical Specs List */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                  Spesifikasi & Karakteristik
                </h4>

                <div className="mt-3 space-y-2.5">
                  {activeComponent.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-start justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-xs"
                    >
                      <span className="text-gray-400 font-medium">{spec.label}</span>
                      <span className="text-right font-semibold text-white font-mono">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role in Ecosystem */}
              <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-950/30 p-3.5 text-xs">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-1">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Peran Utama dalam Sistem</span>
                </div>
                <p className="text-gray-300 text-[11px] leading-relaxed">
                  Terintegrasi secara langsung dengan modul ESP32 untuk memastikan ekosistem kolam selalu berada pada
                  kondisi baku mutu yang ideal bagi benih dan indukan ikan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg">
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition cursor-pointer"
              aria-label="Tutup"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-gray-950 max-h-[85vh] flex items-center justify-center p-2">
              <img
                src="/assets/ilustrasi.png"
                alt="Detail Ilustrasi SmartPond"
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            <p className="mt-3 text-xs text-amber-300/90 text-center font-medium">
              *Catatan: Gambar merupakan ilustrasi perancangan 3D sistem miniatur, bukan produk atau prototipe fisik asli.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

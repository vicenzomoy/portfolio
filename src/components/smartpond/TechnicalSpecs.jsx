import { useState } from "react";
import {
  FileText,
  CheckCircle,
  HelpCircle,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Zap,
} from "lucide-react";

const SPECS_TABLE = [
  {
    part: "Kincir Angin Mini",
    type: "Horizontal Axis Wind Turbine (HAWT)",
    voltage: "12V - 24V DC",
    current: "Max 1.5A @ 10 m/s",
    function: "Memanfaatkan hembusan angin untuk mengisi aki secara kontinyu",
  },
  {
    part: "Feeder Otomatis",
    type: "Gravity Funnel + MG996R Servo Gate",
    voltage: "5V DC (via Step-down)",
    current: "500mA saat bergerak",
    function: "Mengatur takaran dan jadwal pemberian pelet ikan secara teratur",
  },
  {
    part: "ESP32 IoT Core",
    type: "Xtensa 32-bit Dual-Core LX6 Microcontroller",
    voltage: "3.3V / 5V DC (Vin)",
    current: "80mA - 240mA (Wi-Fi TX)",
    function: "Pusat pemrosesan logika, kontrol aktuator, dan pengiriman telemetri",
  },
  {
    part: "Sensor Kualitas Air",
    type: "Probe Analog pH, DS18B20 Temp, & Analog TDS",
    voltage: "3.3V - 5V DC",
    current: "15mA - 30mA",
    function: "Memonitor tingkat pH, temperatur, dan kekeruhan air secara real-time",
  },
  {
    part: "Batu Aerasi",
    type: "Micro-pore Mineral Air Diffuser 40mm",
    voltage: "Pasif (Tekanan Udara)",
    current: "-",
    function: "Memecah udara menjadi gelembung halus untuk mempercepat larutnya oksigen",
  },
  {
    part: "Aerator DC",
    type: "12V Diaphragm Air Pump (Low Noise)",
    voltage: "12V DC",
    current: "350mA - 400mA",
    function: "Meniupkan udara bertekanan ke batu aerasi saat kadar O2 turun",
  },
  {
    part: "Kontrol Pengisian",
    type: "Solar & Wind Hybrid Charge Controller PWM",
    voltage: "Auto 12V / 24V",
    current: "Max 10A Charging",
    function: "Menjaga aki dari overcharge, over-discharge, dan lonjakan arus",
  },
  {
    part: "Aki Cadangan",
    type: "Sealed Lead Acid / VRLA 12V 7.2Ah",
    voltage: "12V DC Nominal (13.6V Float)",
    current: "Kapasitas 86.4 Wh",
    function: "Menyediakan cadangan daya listrik tanpa henti selama 24 jam penuh",
  },
];

const FAQS = [
  {
    q: "Apakah sistem SmartPond dapat beroperasi tanpa jaringan internet?",
    a: "Ya. ESP32 dirancang dengan logika mandiri (edge computing). Meskipun koneksi Wi-Fi atau internet terputus, fitur kritis seperti aerasi otomatis berdasarkan sensor O2 dan jadwal pakan ikan tetap berjalan normal di tingkat perangkat keras.",
  },
  {
    q: "Bagaimana sistem tetap bekerja ketika tidak ada angin dan tidak ada sinar matahari?",
    a: "SmartPond dilengkapi dengan Aki Cadangan VRLA 12V 7.2Ah yang mampu menyuplai seluruh komponen sistem (ESP32, sensor, dan aerator periodik) hingga 24–36 jam tanpa pasokan daya eksternal.",
  },
  {
    q: "Mengapa gambar dan video di halaman ini disebut sebagai ilustrasi?",
    a: "Gambar dan video yang ditampilkan dibuat menggunakan teknik permodelan 3D dan animasi simulasi komputer untuk memvisualisasikan arsitektur prototipe dan alur kerja sistem. Halaman ini mendokumentasikan konsep desain teknik sistem IoT sebelum implementasi massal di kolam terbuka.",
  },
  {
    q: "Berapa kapasitas pelet yang dapat ditampung oleh feeder otomatis?",
    a: "Model dispenser konseptual ini dirancang dengan volume tabung 1.5 Liter, mampu menampung sekitar 1 kg pelet ikan ukuran standar (1–3 mm), cukup untuk pemeliharaan kolam mini selama 1 hingga 2 minggu.",
  },
];

export default function TechnicalSpecs() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="specs" className="relative py-20 bg-gray-950/80 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <FileText className="h-3.5 w-3.5" />
            <span>Spesifikasi & Rincian Teknis</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Rincian Spesifikasi{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Perangkat Keras
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Tabel komparasi teknis dari kedelapan komponen utama yang tertera pada visualisasi perancangan SmartPond.
          </p>
        </div>

        {/* Specs Table */}
        <div className="mt-12 overflow-x-auto rounded-3xl border border-white/10 bg-gray-900/60 backdrop-blur-xl shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-950/90 text-cyan-400 uppercase tracking-wider text-[11px] font-semibold border-b border-white/10">
              <tr>
                <th className="py-4 px-5">Komponen Perangkat</th>
                <th className="py-4 px-5">Tipe / Model</th>
                <th className="py-4 px-5">Tegangan Kerja</th>
                <th className="py-4 px-5">Konsumsi Arus</th>
                <th className="py-4 px-5">Fungsi Utama</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {SPECS_TABLE.map((row) => (
                <tr key={row.part} className="hover:bg-cyan-500/[0.04] transition-colors">
                  <td className="py-4 px-5 font-bold text-white flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {row.part}
                  </td>
                  <td className="py-4 px-5 font-mono text-cyan-200/90">{row.type}</td>
                  <td className="py-4 px-5 font-mono">{row.voltage}</td>
                  <td className="py-4 px-5 font-mono">{row.current}</td>
                  <td className="py-4 px-5 text-gray-400 max-w-xs">{row.function}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Pertanyaan yang Sering Diajukan (FAQ)</h3>
            <p className="text-xs text-gray-400 mt-1">
              Informasi tambahan seputar sistem SmartPond dan metodologi perancangan.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-md overflow-hidden transition-colors hover:border-cyan-400/30"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-4.5 text-left text-sm font-semibold text-white cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-cyan-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4.5 pt-0 text-xs leading-relaxed text-gray-300 border-t border-white/5 bg-gray-950/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

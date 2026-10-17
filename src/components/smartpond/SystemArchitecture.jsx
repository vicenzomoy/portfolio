import {
  Cpu,
  Zap,
  Wind,
  Layers,
  Activity,
  Server,
  Radio,
  ArrowRight,
  Shield,
  Code2,
  Check,
} from "lucide-react";

export default function SystemArchitecture() {
  const layers = [
    {
      title: "1. Sumber Energi Mandiri (Renewable Power)",
      badge: "Power Layer",
      color: "border-emerald-500/30 bg-emerald-950/20 text-emerald-400",
      icon: Wind,
      components: [
        "Turbin Kincir Angin Mini 12V-24V",
        "Panel Surya Monocrystalline 20W",
        "Solar/Wind Charge Controller PWM/MPPT",
        "Aki Cadangan VRLA 12V 7.2Ah Deep-Cycle",
        "Step-Down Buck Converter (12V ke 5V & 3.3V)",
      ],
      desc: "Menjamin ketersediaan energi 24/7 di luar jangkauan grid PLN (off-grid), sehingga sistem monitoring tidak pernah mati.",
    },
    {
      title: "2. Gugusan Sensor Lingkungan (Sensing Layer)",
      badge: "Sensor Array",
      color: "border-cyan-500/30 bg-cyan-950/20 text-cyan-400",
      icon: Activity,
      components: [
        "Sensor pH-4502C Analog Probe",
        "Sensor Suhu Waterproof DS18B20 1-Wire",
        "Gravity Analog TDS Sensor (Kekeruhan Air)",
        "Water Level Float Switch Sensor",
      ],
      desc: "Membaca kondisi biokimia air kolam setiap detik dengan konversi ADC 12-bit dan algoritma kalibrasi digital.",
    },
    {
      title: "3. Unit Pemroses & Logika Cerdas (Compute Core)",
      badge: "ESP32 Core",
      color: "border-blue-500/30 bg-blue-950/20 text-blue-400",
      icon: Cpu,
      components: [
        "ESP32 DevKit V1 (Xtensa LX6 Dual-Core 240MHz)",
        "FreeRTOS Multitasking Task Scheduler",
        "Non-Volatile Storage (NVS) untuk Simpan Pengaturan",
        "Watchdog Timer (WDT) untuk Auto-Recovery",
      ],
      desc: "Memproses ambang batas logika lokal, memicu aktuator darurat tanpa butuh koneksi internet, dan mengemas paket MQTT.",
    },
    {
      title: "4. Aktuator Mekanikal & Aerasi (Execution Layer)",
      badge: "Actuators",
      color: "border-purple-500/30 bg-purple-950/20 text-purple-400",
      icon: Zap,
      components: [
        "Aerator DC 12V Low Noise Diaphragm Pump",
        "Batu Aerasi Mikro Karborundum 40mm",
        "Servo Feeder Pakan MG996R High-Torque",
        "Relay Optocoupler 2-Channel 12V/5V",
      ],
      desc: "Mengeksekusi tindakan fisik: menyuplai oksigen terlarut melalui gelembung mikro dan mendistribusikan pakan ikan terjadwal.",
    },
    {
      title: "5. Komunikasi & Platform Cloud (Connectivity Layer)",
      badge: "Cloud & IoT",
      color: "border-teal-500/30 bg-teal-950/20 text-teal-400",
      icon: Radio,
      components: [
        "Wi-Fi 802.11 b/g/n (2.4 GHz)",
        "Protokol MQTT over TLS (Port 8883)",
        "Broker MQTT Publik / Privat (HiveMQ / EMQX)",
        "Modern Responsive React Web Dashboard",
      ],
      desc: "Mendistribusikan data telemetri ke pengguna melalui antarmuka web yang dapat diakses di mana saja dan kapan saja.",
    },
  ];

  return (
    <section id="architecture" className="relative py-20 bg-gray-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <Layers className="h-3.5 w-3.5" />
            <span>Topologi Perangkat Keras & Jaringan</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Arsitektur Sistem{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              End-to-End
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Perancangan arsitektur berjenjang yang memadukan keandalan perangkat keras industri, mikrokontroler
            ESP32 berdaya rendah, dan protokol komunikasi IoT modern.
          </p>
        </div>

        {/* Architecture Stack */}
        <div className="mt-12 space-y-4 max-w-5xl mx-auto">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.title}
                className="group rounded-3xl border border-white/10 bg-gray-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-gray-900/90 hover:shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${layer.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                          {layer.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mt-0.5">{layer.title}</h3>
                      <p className="text-xs text-gray-300 mt-1 max-w-xl leading-relaxed">{layer.desc}</p>
                    </div>
                  </div>

                  <div className="lg:border-l lg:border-white/10 lg:pl-6 shrink-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-2">
                      Komponen Terpasang
                    </span>
                    <ul className="space-y-1.5">
                      {layer.components.slice(0, 3).map((comp) => (
                        <li key={comp} className="flex items-center gap-2 text-xs text-gray-300">
                          <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span>{comp}</span>
                        </li>
                      ))}
                      {layer.components.length > 3 && (
                        <li className="text-[11px] text-cyan-400/80 font-medium pl-5.5">
                          + {layer.components.length - 3} modul lainnya
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

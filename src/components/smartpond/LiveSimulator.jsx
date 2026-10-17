import { useState, useEffect, useRef } from "react";
import {
  Gauge,
  Activity,
  Droplets,
  Thermometer,
  Zap,
  Fish,
  Power,
  RotateCcw,
  Terminal,
  CheckCircle,
  AlertTriangle,
  Clock,
  Sparkles,
  Wifi,
  Waves,
} from "lucide-react";

export default function LiveSimulator() {
  // Simulator State
  const [ph, setPh] = useState(7.2);
  const [temperature, setTemperature] = useState(26.8);
  const [tds, setTds] = useState(185);
  const [dissolvedOxygen, setDissolvedOxygen] = useState(6.8);
  const [batteryLevel, setBatteryLevel] = useState(88);
  const [batteryCharging, setBatteryCharging] = useState(true);

  // Actuator States
  const [aeratorActive, setAeratorActive] = useState(true);
  const [isFeeding, setIsFeeding] = useState(false);
  const [feedCountdown, setFeedCountdown] = useState(0);
  const [totalFeedDispensed, setTotalFeedDispensed] = useState(45);
  const [activeScenario, setActiveScenario] = useState("normal");

  // MQTT Logs
  const [logs, setLogs] = useState([
    {
      time: "19:28:10",
      topic: "smartpond/telemetry",
      type: "info",
      payload: '{"status":"CONNECTED", "core":"ESP32-LX6", "firmware":"v2.4.1"}',
    },
    {
      time: "19:28:12",
      topic: "smartpond/sensors/water",
      type: "data",
      payload: '{"ph":7.2,"temp":26.8,"tds":185,"do":6.8}',
    },
    {
      time: "19:28:14",
      topic: "smartpond/power",
      type: "data",
      payload: '{"source":"WIND+SOLAR", "battery":88, "v_in":13.6, "charge_mode":"BULK"}',
    },
  ]);

  const logContainerRef = useRef(null);

  // Add Log Helper
  const addLog = (topic, type, payload) => {
    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0];
    setLogs((prev) => [...prev.slice(-25), { time: timeStr, topic, type, payload }]);
  };

  // Scroll to bottom on log update
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Subtle real-time oscillation to simulate live IoT sensors
  useEffect(() => {
    const interval = setInterval(() => {
      // Small jitter
      setPh((prev) => {
        const delta = (Math.random() - 0.5) * 0.04;
        return Number((prev + delta).toFixed(2));
      });
      setTemperature((prev) => {
        const delta = (Math.random() - 0.5) * 0.06;
        return Number((prev + delta).toFixed(1));
      });
      setTds((prev) => {
        const delta = Math.floor((Math.random() - 0.5) * 4);
        return Math.max(100, Math.min(800, prev + delta));
      });

      // Dissolved Oxygen behavior depends on aerator
      setDissolvedOxygen((prev) => {
        if (aeratorActive) {
          const target = 7.1;
          const step = (target - prev) * 0.1 + (Math.random() - 0.5) * 0.05;
          return Number(Math.min(8.5, prev + step).toFixed(1));
        } else {
          const target = 4.8;
          const step = (target - prev) * 0.08 + (Math.random() - 0.5) * 0.04;
          return Number(Math.max(3.0, prev + step).toFixed(1));
        }
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [aeratorActive]);

  // Periodic Telemetry Telecast
  useEffect(() => {
    const telecastInterval = setInterval(() => {
      addLog(
        "smartpond/sensors/telemetry",
        "data",
        JSON.stringify({
          ph,
          temp: temperature,
          tds,
          do: dissolvedOxygen,
          aerator: aeratorActive ? 1 : 0,
          batt: batteryLevel,
        })
      );
    }, 6000);

    return () => clearInterval(telecastInterval);
  }, [ph, temperature, tds, dissolvedOxygen, aeratorActive, batteryLevel]);

  // Feeder Trigger Handler
  const handleTriggerFeeder = () => {
    if (isFeeding) return;
    setIsFeeding(true);
    setFeedCountdown(3);

    addLog(
      "smartpond/actuators/feeder",
      "action",
      '{"command":"DISPENSE", "amount_gram":15, "duration_ms":3000}'
    );

    const timer = setInterval(() => {
      setFeedCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFeeding(false);
          setTotalFeedDispensed((t) => t + 15);
          addLog(
            "smartpond/actuators/feeder",
            "success",
            '{"status":"COMPLETED", "dispensed_gram":15, "servo":"RETURN_HOME"}'
          );
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Aerator Toggle
  const handleToggleAerator = () => {
    const nextState = !aeratorActive;
    setAeratorActive(nextState);
    addLog(
      "smartpond/actuators/aerator",
      "action",
      JSON.stringify({
        relay: "RELAY_1",
        state: nextState ? "ON" : "OFF",
        current_amp: nextState ? 0.38 : 0.01,
      })
    );
  };

  // Scenario Presets
  const applyScenario = (mode) => {
    setActiveScenario(mode);
    if (mode === "normal") {
      setPh(7.2);
      setTemperature(26.5);
      setTds(180);
      setDissolvedOxygen(6.9);
      setAeratorActive(true);
      setBatteryLevel(88);
      addLog("smartpond/preset", "info", '{"mode":"NORMAL", "condition":"Optimal ecosystem"}');
    } else if (mode === "acidic") {
      setPh(5.4);
      setTemperature(25.8);
      setTds(240);
      setDissolvedOxygen(5.2);
      addLog("smartpond/alert", "warn", '{"alert":"LOW_PH_DETECTED", "value":5.4, "threshold":6.5}');
    } else if (mode === "hot") {
      setPh(7.4);
      setTemperature(32.8);
      setTds(210);
      setDissolvedOxygen(4.9);
      setAeratorActive(true);
      addLog("smartpond/alert", "warn", '{"alert":"HIGH_TEMP_DETECTED", "value":32.8, "aerator_auto":"FORCED_ON"}');
    } else if (mode === "turbid") {
      setPh(6.8);
      setTemperature(27.0);
      setTds(480);
      setDissolvedOxygen(5.0);
      addLog("smartpond/alert", "warn", '{"alert":"HIGH_TURBIDITY", "tds_ppm":480, "action":"FILTER_REQUIRED"}');
    }
  };

  return (
    <section id="telemetry" className="relative py-20 bg-gray-950/90 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 text-xs font-semibold text-cyan-400">
            <Gauge className="h-3.5 w-3.5" />
            <span>Interactive IoT Dashboard</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Simulasi Kendali &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Telemetri Real-Time
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Coba secara langsung sistem kontrol aktuator SmartPond! Nyalakan aerator, beri pakan otomatis, atau ubah
            kondisi simulasi air untuk mengamati respons logika mikrokontroler ESP32 secara instan.
          </p>
        </div>

        {/* Preset Scenario Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-gray-400 font-semibold mr-2 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" /> Skenario Pengujian:
          </span>
          {[
            { id: "normal", label: "🌿 Kolam Sehat (Normal)", desc: "Parameter optimal" },
            { id: "acidic", label: "⚠️ Air Asam (pH Drop)", desc: "Simulasi peringatan pH" },
            { id: "hot", label: "☀️ Suhu Tinggi (Panas)", desc: "Auto-aerator cooldown" },
            { id: "turbid", label: "🌫️ Air Keruh (TDS Tinggi)", desc: "Sisa pakan larut" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => applyScenario(item.id)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeScenario === item.id
                  ? "bg-cyan-500 text-gray-950 shadow-md shadow-cyan-500/30 scale-105"
                  : "border border-white/10 bg-gray-900/60 text-gray-300 hover:border-white/20 hover:bg-gray-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Telemetry Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Gauge 1: pH Level */}
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-gray-900/90 to-gray-950 p-5 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5">
                <Activity className="h-4 w-4 text-cyan-400" /> Keasaman Air (pH)
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  ph >= 6.5 && ph <= 8.5
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "bg-red-500/20 text-red-300 border border-red-500/30 animate-pulse"
                }`}
              >
                {ph >= 6.5 && ph <= 8.5 ? "NORMAL" : "KRITIS"}
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white font-mono tracking-tight">{ph}</span>
              <span className="text-xs text-gray-400 font-mono">pH</span>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                <span>Asam (4.0)</span>
                <span>Netral (7.0)</span>
                <span>Basa (10.0)</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-800 overflow-hidden relative">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    ph < 6.5 ? "bg-red-500" : ph > 8.5 ? "bg-purple-500" : "bg-cyan-400"
                  }`}
                  style={{ width: `${Math.min(100, Math.max(0, ((ph - 4) / 6) * 100))}%` }}
                />
              </div>
            </div>
            <p className="mt-3 text-[11px] text-gray-400 leading-snug">
              Rentang ideal budidaya ikan: <strong>6.5 – 8.0 pH</strong>.
            </p>
          </div>

          {/* Gauge 2: Water Temperature */}
          <div className="rounded-2xl border border-teal-500/20 bg-gradient-to-b from-gray-900/90 to-gray-950 p-5 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5">
                <Thermometer className="h-4 w-4 text-teal-400" /> Suhu Air (DS18B20)
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  temperature >= 24 && temperature <= 30
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                }`}
              >
                {temperature >= 24 && temperature <= 30 ? "OPTIMAL" : "PERINGATAN"}
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white font-mono tracking-tight">{temperature}</span>
              <span className="text-xs text-gray-400 font-mono">°C</span>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                <span>15°C</span>
                <span>28°C</span>
                <span>40°C</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-800 overflow-hidden relative">
                <div
                  className="h-full rounded-full bg-teal-400 transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(0, ((temperature - 15) / 25) * 100))}%` }}
                />
              </div>
            </div>
            <p className="mt-3 text-[11px] text-gray-400 leading-snug">
              Metabolisme optimal ikan tropis pada <strong>25°C – 30°C</strong>.
            </p>
          </div>

          {/* Gauge 3: Dissolved Oxygen (DO) */}
          <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-b from-gray-900/90 to-gray-950 p-5 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5">
                <Waves className="h-4 w-4 text-blue-400" /> Oksigen Terlarut (DO)
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  dissolvedOxygen >= 5.0
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "bg-red-500/20 text-red-300 border border-red-500/30 animate-pulse"
                }`}
              >
                {dissolvedOxygen >= 5.0 ? "KAYA O2" : "RENDAH"}
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white font-mono tracking-tight">{dissolvedOxygen}</span>
              <span className="text-xs text-gray-400 font-mono">mg/L</span>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                <span>2.0</span>
                <span>5.0</span>
                <span>9.0</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-800 overflow-hidden relative">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    dissolvedOxygen < 5.0 ? "bg-red-400" : "bg-blue-400"
                  }`}
                  style={{ width: `${Math.min(100, Math.max(0, ((dissolvedOxygen - 2) / 7) * 100))}%` }}
                />
              </div>
            </div>
            <p className="mt-3 text-[11px] text-gray-400 leading-snug">
              Status Aerator: <strong>{aeratorActive ? "ON (Batu Aerasi Aktif)" : "OFF (Mati)"}</strong>.
            </p>
          </div>

          {/* Gauge 4: Battery & Renewable Power */}
          <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-gray-900/90 to-gray-950 p-5 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-emerald-400" /> Daya Aki & Kincir
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                CHARGING
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white font-mono tracking-tight">{batteryLevel}%</span>
              <span className="text-xs text-emerald-400 font-mono">13.4V DC</span>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-800 overflow-hidden relative">
                <div
                  className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                  style={{ width: `${batteryLevel}%` }}
                />
              </div>
            </div>
            <p className="mt-3 text-[11px] text-gray-400 leading-snug">
              Sumber: <strong>Kincir Angin Mini + Solar MPPT</strong>.
            </p>
          </div>
        </div>

        {/* Interactive Actuator Controls & Console Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Actuator Control Board (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-gray-900/80 p-6 backdrop-blur-xl shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Power className="h-5 w-5 text-cyan-400" /> Panel Kendali Aktuator Kolam
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                Simulasikan perintah mikrokontroler ESP32 ke modul relay dan servo feeder secara real-time.
              </p>

              {/* Control 1: Aerator DC Toggle */}
              <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-gray-950/70 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors ${
                        aeratorActive
                          ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-300"
                          : "bg-gray-800 border-white/10 text-gray-500"
                      }`}
                    >
                      <Waves className={`h-5 w-5 ${aeratorActive ? "animate-pulse" : ""}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Aerator DC 12V</h4>
                      <p className="text-xs text-gray-400">Pompa Udara & Batu Aerasi</p>
                    </div>
                  </div>

                  <button
                    onClick={handleToggleAerator}
                    className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      aeratorActive ? "bg-cyan-500" : "bg-gray-700"
                    }`}
                    aria-label="Toggle Aerator"
                  >
                    <span
                      className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                        aeratorActive ? "translate-x-7" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between pt-3 border-t border-white/5 text-[11px]">
                  <span className="text-gray-400">Status Operasi:</span>
                  <span
                    className={`font-mono font-bold ${
                      aeratorActive ? "text-cyan-400" : "text-gray-500"
                    }`}
                  >
                    {aeratorActive ? "● AKTIF (Batu Aerasi Meniup O2)" : "○ MATI (Standby)"}
                  </span>
                </div>
              </div>

              {/* Control 2: Feed Fish Button */}
              <div className="mt-4 rounded-2xl border border-purple-500/20 bg-gray-950/70 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors ${
                        isFeeding
                          ? "bg-purple-500/30 border-purple-400 text-purple-300 animate-spin"
                          : "bg-purple-500/10 border-purple-500/20 text-purple-400"
                      }`}
                    >
                      <Fish className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Feeder Otomatis</h4>
                      <p className="text-xs text-gray-400">Dispenser Pelet Terukur</p>
                    </div>
                  </div>

                  <button
                    onClick={handleTriggerFeeder}
                    disabled={isFeeding}
                    className={`rounded-xl px-4 py-2 text-xs font-bold transition-all shadow-md cursor-pointer ${
                      isFeeding
                        ? "bg-purple-600 text-white cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:scale-105 active:scale-95 shadow-purple-500/25"
                    }`}
                  >
                    {isFeeding ? `Menebar... (${feedCountdown}s)` : "Beri Pakan Sekarang"}
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between pt-3 border-t border-white/5 text-[11px]">
                  <span className="text-gray-400">Total Pakan Hari Ini:</span>
                  <span className="font-mono font-bold text-purple-300">{totalFeedDispensed} gram (Terkendali)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Real-time MQTT Packet Stream (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-cyan-500/30 bg-gray-950 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-cyan-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Live MQTT Broker Telemetry Stream
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] text-gray-400">broker.smartpond.io:8883</span>
                </div>
              </div>

              {/* Console Body */}
              <div
                ref={logContainerRef}
                className="mt-3 h-[290px] overflow-y-auto font-mono text-[11px] space-y-2 p-3 rounded-2xl bg-black/70 border border-white/5 scrollbar-thin scrollbar-thumb-gray-800"
              >
                {logs.map((log, index) => {
                  let badgeColor = "text-cyan-400 bg-cyan-950/60 border-cyan-500/30";
                  if (log.type === "action") badgeColor = "text-purple-400 bg-purple-950/60 border-purple-500/30";
                  if (log.type === "warn") badgeColor = "text-amber-400 bg-amber-950/60 border-amber-500/30";
                  if (log.type === "success") badgeColor = "text-emerald-400 bg-emerald-950/60 border-emerald-500/30";

                  return (
                    <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <span className="text-gray-500 shrink-0">[{log.time}]</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${badgeColor} shrink-0`}>
                        {log.topic}
                      </span>
                      <span className="text-gray-300 break-all">{log.payload}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Wifi className="h-3.5 w-3.5 text-emerald-400" /> Protokol: MQTT over TLS • ESP32 FreeRTOS Task
                </span>
                <button
                  onClick={() =>
                    setLogs([
                      {
                        time: new Date().toTimeString().split(" ")[0],
                        topic: "smartpond/system",
                        type: "info",
                        payload: '{"message":"Console buffer reset by user"}',
                      },
                    ])
                  }
                  className="hover:text-cyan-400 transition cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="h-3 w-3" /> Bersihkan Log
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect } from "react";
import SmartPondNavbar from "../components/smartpond/SmartPondNavbar";
import SmartPondHero from "../components/smartpond/SmartPondHero";
import DisclaimerAlert from "../components/smartpond/DisclaimerAlert";
import PrototypeViewer from "../components/smartpond/PrototypeViewer";
import SimulationVideoSection from "../components/smartpond/SimulationVideoSection";
import LiveSimulator from "../components/smartpond/LiveSimulator";
import SystemArchitecture from "../components/smartpond/SystemArchitecture";
import TechnicalSpecs from "../components/smartpond/TechnicalSpecs";
import SmartPondFooter from "../components/smartpond/SmartPondFooter";

export default function SmartPondPage({ onNavigateHome }) {
  useEffect(() => {
    // Set document title & favicon khusus untuk halaman /smartpond
    const prevTitle = document.title;
    document.title = "SmartPond — Smart Fish Pond IoT";

    let faviconLink = document.querySelector("link[rel*='icon']");
    const prevFavicon = faviconLink ? faviconLink.getAttribute("href") : "/favicon.svg";
    const prevType = faviconLink ? faviconLink.getAttribute("type") : "image/svg+xml";

    if (faviconLink) {
      faviconLink.setAttribute("href", "/assets/logo_smartpond.png");
      faviconLink.setAttribute("type", "image/png");
    } else {
      faviconLink = document.createElement("link");
      faviconLink.rel = "icon";
      faviconLink.type = "image/png";
      faviconLink.href = "/assets/logo_smartpond.png";
      document.head.appendChild(faviconLink);
    }

    window.scrollTo({ top: 0, behavior: "instant" });

    return () => {
      document.title = prevTitle;
      const link = document.querySelector("link[rel*='icon']");
      if (link) {
        link.setAttribute("href", prevFavicon || "/favicon.svg");
        link.setAttribute("type", prevType || "image/svg+xml");
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-cyan-500 selection:text-gray-950">
      {/* Sticky Header */}
      <SmartPondNavbar onNavigateHome={onNavigateHome} />

      <main className="relative">
        {/* Hero Section */}
        <SmartPondHero />

        {/* Global Prominent Disclaimer Banner */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 mb-10">
          <DisclaimerAlert />
        </div>

        {/* Interactive 3D Prototype Explorer */}
        <PrototypeViewer />

        {/* Simulation Video & Process Breakdown */}
        <SimulationVideoSection />

        {/* Real-time Interactive IoT Dashboard Simulator */}
        <LiveSimulator />

        {/* Hardware & Topologi System Architecture */}
        <SystemArchitecture />

        {/* Component Technical Specifications & FAQ */}
        <TechnicalSpecs />
      </main>

      {/* Footer */}
      <SmartPondFooter onNavigateHome={onNavigateHome} />
    </div>
  );
}

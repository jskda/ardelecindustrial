import energyStorage from '../../assets/commercial-industrial-thumb.jpg'

export default function EnergyStorage() {
  return (
    <section className="container max-w-[1320px] mx-auto px-6 py-4">
      
      <h1 className="block text-gray-600 text-sm">ARDELEC</h1>
      <h1 className="text-3xl font-bold mb-8 text-gray-700">Commercial & Industrial Energy Storage</h1>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="w-full">
          <img 
            src={energyStorage} 
            alt="Software Development image"
            className="w-full h-full object-cover shadow"
          />
        </div>

        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Scope
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Behind-the-meter and microgrid storage for facilities with high peak tariffs, transformer/feeder constraints, off-grid operation, or unstable grids. Supports PV integration and improves energy-use efficiency.
          </p>
<h2 className="text-2xl font-semibold text-gray-700">
            Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Containerized or cabinet BESS (LFP) with PCS/inverters, MV transformer and switchgear, protection/metering, EMS, HVAC and fire-safety subsystems; AC- or DC-coupled PV configurations.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700">
            Use cases
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Peak–valley arbitrage; demand-response participation; capacity relief for transformers/lines; PV self-consumption and export limiting; backup/islanding for continuity of supply; power-quality support.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700">
            Engineering & Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Load profiling and right-sizing, EMS strategy (SOC windows, set-points), protection and coordination, interconnection studies, SLD/layout, commissioning (FAT/SAT), remote monitoring, preventive maintenance, warranty and capacity-retention programs.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700">
            Quality & compliance
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Delivered to applicable IEC/IEEE/UL codes and site HSE requirements. (Standards tailored per project.)
          </p>
        </div>
      </div>
    </section>
  );
};

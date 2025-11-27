import powerGeneration from '../../assets/power_generation_cover.webp'

export default function PowerGeneration() {
  return (
    <section className="container max-w-[1320px] mx-auto px-6 py-6">
      <p className="text-gray-600 text-md">Ardelec</p>
      <h1 className="text-3xl font-bold mb-8 text-gray-700">Power Generation</h1>
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="w-full">
          <img 
            src={powerGeneration} 
            alt="Software Development"
            className="w-full object-cover shadow"
          />
        </div>
        <div className="md:col-span-2 space-y-6">
          <div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Scope
          </h2>
          <p className="text-gray-600 leading-relaxed">
            End-to-end support for thermal, gas-turbine, steam, hydro, renewables, and industrial captive plants.
          </p>
          </div>
          <div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Engineering
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Studies: load flow, short-circuit, protection coordination, arc flash; harmonics/EMC; transient stability.
            Grid interface & compliance: interconnection, power quality, VAR/voltage control, LVRT/FRT, islanding/black start.
            Primary/secondary & digital substation: single-line/layout, equipment sizing, grounding/lightning; protection settings, control logic, SCADA/DCS, metering, telecoms, cybersecurity (IEC 62443); IEC 61850 SCL, GOOSE/SV, time sync (PTP/IRIG-B).
            Docs & Owner’s Engineer: specifications/BoQ, FAT/SAT, commissioning, as-builts; due diligence, vendor evaluation, QA/QC, ITP; RAM/LCC; HAZOP/FMEA/SIL; compliance with IEC/IEEE/GOST and local codes.
          </p>
          </div>
          <div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Supply
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Power evacuation system equipment — from generator terminals through step-up and grid interconnection.
          </p>
          </div>
          <div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Service
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Diagnostics, inspection, electrical/functional testing; repair/refurbishment (on-site/workshop); supervision, commissioning, handover; upgrades/retrofits and life-extension programs; lifecycle spares planning; operator training.
          </p>
          </div>
          <div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Quality & compliance
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Conformance to customer requirements and IEC/IEEE; HSE and electrical-safety controls enforced. Test protocols, as-built documentation, and warranty provided.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

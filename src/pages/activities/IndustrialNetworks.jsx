import softwareDevelopment from '../../assets/industrial-network.webp'

export default function IndustrialNetworks() {
  return (
      <section className="container max-w-[1320px] mx-auto px-6 py-6">
            
            <p className="text-gray-600 text-md">Engineering & Consulting</p>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">for Industrial Networks</h1>
      
            <div className="grid md:grid-cols-3 gap-10 items-start">
              <div className="w-full">
                <img 
                  src={softwareDevelopment} 
                  alt="Software Development"
                  className="w-full h-full object-cover shadow"
                />
              </div>
              <div className="md:col-span-2 space-y-6">
                <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Our Services
                </h2>
                <ul className="space-y-3 text-gray-700">
                    {[
                    "Visualization and design of optimal network topologies",
      "Diesel/gas/converter-fed generation modelling in island mode and grid connected modes of network operation",
      "Selection and specification of key plant parameters",
      "Power quality assessment in systems with high densities of power electronic drives",
      "Standby power and auxiliary supply systems",
      "Load shedding strategy development for process assurance",
      "Cable analysis and selection",
      "Stability in island mode operation",
      "Evaluation of motor starting transients and strategies for the starting of motors and drives",
      "Experience applicable to any industrial segment including oil and gas, manufacturing, mining, metals, chemical, marine and data centers",
      "Determination of consumer lists and load structures",
      "Preparation and review of plant designs and network expansions",
      "Dimensioning of switchgear, distribution systems, cables and transformers based on load flow and short-circuit calculations in accordance with relevant standards",
      "Development and dimensioning of connections of third-party grids and in house power plants including the required standby power supply concepts",
      "Definition of the basic parameters of generators and control systems",
      "Design of highly reliable network areas",
      "Integration of large drives and strongly fluctuating consumption",
      "Assurance of the required grid quality and reliability of supply",
      "Arc flash hazard calculation based on the applicable standards",
      "Evaluation of motor starting and re-starting concepts as well as the application of automatic transfer switches in order to avoid long interruptions in a process, taking into account the dynamical behavior of generators",
                    ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-600 shrink-0 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                    </li>
                    ))}
                </ul>
                </div>
              </div>
            </div>
          </section>
  );
}

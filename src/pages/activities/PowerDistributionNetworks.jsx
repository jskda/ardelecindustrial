import softwareDevelopment from '../../assets/distribution-network.webp'

export default function PowerDistributionNetworks() {
  return (
      <section className="container max-w-[1320px] mx-auto px-6 py-6">
            <p className="text-gray-600 text-md">Engineering & Consulting</p>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">for Power Distribution Networks</h1>
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
                    "Target network planning",
                    "Structured analysis of given network topologies; concepts for change",
                    "Comprehensive assessment of connection concepts (e.g. looping in and T-branches)",
                    "Voltage profile optimization",
                    "Reactive power exchange with other networks (distribution, transmission level)",
                    "Analyses of load profiles",
                    "Technical and economic assessments",
                    "Determination of the power loss on all network levels based on real or specific reference network",
                    "Network restructuring and optimization",
                    "Power Quality analyses (e.g. measurements and simulation)",
                    "Harmonic analysis including multiple voltage levels, background distortion",
                    "Design of compensation systems",
                    "Reliability assessment of distribution networks",
                    "Optimized integration of peripheral generating plants (objective: minimum network expansion)",
                    "Connection request assessments and determination of potentially necessary network enhancements",
                    "Identification of regional characteristics in distribution networks",
                    "Specified and regional requirements regarding the electrical properties of generating plants",
                    "Islanding and network restoration",
                    "Assessment of neutral point treatment concepts",
                    "Optimal future neutral point treatment",
                    "Interaction of neutral point treatment and requirements regarding earthing systems",
                    "Objective assessment of damage; analyses of the cause of damage",
                    "Quality of supply as part of the security of supply",
                    "Electromagnetic fields",
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

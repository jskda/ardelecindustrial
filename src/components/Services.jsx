import { Link } from "react-router-dom";
import powerIcon from '../assets/supply.svg'
import softwareIcon from '../assets/development.svg'
import industrialIcon from '../assets/engineering_industrial.svg'
import generationIcon from '../assets/power_generation.svg'
import energyStorage from '../assets/energy_store.svg'

export default function Services() {
  return (
  <div className="container max-w-[1320px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="flex items-start space-x-4">
    <img src={powerIcon} alt="Power Icon" className="w-12 h-12 shrink-0" />
    <div>
      <h3 className="text-gray-700 text-xl font-semibold mb-1">Special Power Supply</h3>
      <p className="text-gray-700">
        Rectifier systems used for production of hydrogen, metal extraction, refining and heat treatments are designed to operate in the most challenging operating conditions, maintaining highest efficiency. High-current busduct systems with high current switching devices.
      </p>
      <Link 
        to="/activities/SpecialPowerSupply"
        className="inline-flex items-center mt-3 text-red-600 hover:underline"
      >
        View More
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <img src={softwareIcon} alt="Software Icon" className="w-12 h-12 shrink-0" />
    <div>
      <h3 className="text-gray-700 text-xl font-semibold mb-1">Software Development & Digital Control Systems</h3>
      <p className="text-gray-700">
        The digital controls systems, entirely developed by Ardelec, grants the highest level of reliability, safety and performance. Ardelec combine deep domain expertise with connectivity and software innovation to empower real-time, data-driven decisions for safer, smarter operations that maximize resource efficiency.
      </p>
      <Link 
        to="/activities/SoftwareDevelopment"
        className="inline-flex items-center mt-3 text-red-600 hover:underline"
      >
        View More
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <img src={energyStorage} alt="Software Icon" className="w-12 h-12 shrink-0" />
    <div>
      <h3 className="text-gray-700 text-xl font-semibold mb-1">Industrial Energy Storage</h3>
      <p className="text-gray-700">
        Ardelec delivers turn-key commercial & industrial energy storage solutions (LFP BESS) for peak shaving, demand response, PV integration, microgrids and backup power. Containerized or cabinet systems include PCS, MV equipment, EMS, HVAC and fire safety, fully engineered, commissioned and maintained to IEC/IEEE/UL standards.
      </p>
      <Link 
        to="/activities/EnergyStorage"
        className="inline-flex items-center mt-3 text-red-600 hover:underline"
      >
        View More
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <img src={generationIcon} alt="Software Icon" className="w-12 h-12 shrink-0" />
    <div>
      <h3 className="text-gray-700 text-xl font-semibold mb-1">Power Generation</h3>
      <p className="text-gray-700">
        Ardelec offers full-cycle power generation solutions for thermal, gas-turbine, hydro, renewable and captive plants — engineering (studies, grid compliance, digital substations IEC 61850), supply of evacuation systems, diagnostics, testing, commissioning, retrofits, training and lifecycle support — all to IEC/IEEE/GOST standards.
      </p>
      <Link 
        to="/activities/PowerGeneration"
        className="inline-flex items-center mt-3 text-red-600 hover:underline"
      >
        View More
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>

  <div className="md:col-span-2 flex items-start space-x-4">
    <img src={industrialIcon} alt="Consulting Icon" className="w-12 h-12 shrink-0" />
    <div>
      <h3 className="text-gray-700 text-xl font-semibold mb-1">Engineering & Consulting</h3>
      <div className="md:col-span-2 flex items-start space-x-4">
      <div className="appear-animation" style={{animationDelay: '950ms', animationName: 'fadeInUpShorterPlus'}}>
        <div className="flex">
          <div className="pl-3">
            <h4 className="text-gray-900 font-semibold mb-5 text-1xl">for Power Distribution Networks</h4>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Target network planning</li>
              <li>Structured analysis of given network topologies; concepts for change</li>
              <li>Comprehensive assessment of connection concepts (e.g. looping in and T-branches)</li>
              <li>Voltage profile optimization</li>
              <li>Reactive power exchange with other networks (distribution, transmission level)</li>
            </ul>
            <h4 className="text-gray-900 font-semibold mb-5 text-1xl">for Industrial Networks</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Visualization and design of optimal network topologies</li>
              <li>Diesel/gas/converter-fed generation modelling in island mode and grid-connected modes of network operation</li>
              <li>Selection and specification of key plant parameters</li>
              <li>Power quality assessment in systems with high densities of power electronic drives</li>
              <li>Standby power and auxiliary supply systems</li>
              <li>Load shedding strategy development for process assurance</li>
            </ul>
      </div>
    </div>
  </div>
</div>

      <Link 
        to="/activities/EngineeringConsulting"
        className="inline-flex items-center mt-3 text-red-600 hover:underline"
      >
        View More
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
</div>
  )
}

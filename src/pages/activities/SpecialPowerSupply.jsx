import specialPowerSupply_1 from '../../assets/special_power_supply_1.webp'
import specialPowerSupply_2 from '../../assets/special_power_supply_2.webp'
import specialPowerSupply_3 from '../../assets/special_power_supply_3.webp'

export default function SpecialPowerSupply() {
  return (
    <section className="container max-w-[1320px] mx-auto px-6 py-4">
      <h1 className="block text-gray-600 text-sm">ARDELEC</h1>
      <h1 className="text-3xl font-bold mb-8 text-gray-700">Special Power Supply</h1>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="w-full h-full">
          <img 
            src={specialPowerSupply_1} 
            alt="Special power supply image"
            className="w-full h-full object-cover shadow"
          />
        </div>
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            High-Performance Industrial Rectifier Systems
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Rectifier systems used for production of hydrogen, metal extraction, refining and heat treatments are designed to operate in the most challenging operating conditions, maintaining highest efficiency. High-current busduct systems with high current switching devices.
          </p>
        </div>
      </div>

      <div className="my-4 border-t border-gray-300"></div>

        <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="w-full h-full">
          <img 
            src={specialPowerSupply_2} 
            alt="Special power supply image"
            className="w-full h-full object-cover shadow"
          />
        </div>
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Advanced Power Quality and Stabilization Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Innovative power quality equipment offers the right load compensating performance for large and medium size industrial plants: excellent voltage stabilization and power factor correction provide the best preconditions for stable production, securing power quality parameters for electrical power supply.
          </p>
        </div>
      </div>

      <div className="my-4 border-t border-gray-300"></div>
      
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="w-full h-full">
          <img 
            src={specialPowerSupply_3} 
            alt="Special power supply"
            className="w-full h-full object-cover shadow"
          />
        </div>
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Digital Fiber-Optic Measurement Technologies
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Flexible electronic fiber optical current transformers. The product line includes fiber optical instrument transformers for current measurement and electronic voltage transformers that enable solutions for digital smart grids and power demanding industries.
          </p>
        </div>
      </div>
    </section>
  );
};

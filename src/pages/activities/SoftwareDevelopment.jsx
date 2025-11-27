import softwareDevelopment from '../../assets/software_development_cover.webp'

export default function SoftwareDevelopment() {
  return (
    <section className="container max-w-[1320px] mx-auto px-6 py-6">
      
      <p className="text-gray-600 text-md">Ardelec</p>
      <h1 className="text-3xl font-bold mb-8 text-gray-700">Software Development</h1>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="w-full h-full">
          <img 
            src={softwareDevelopment} 
            alt="Software Development"
            className="w-full h-full object-cover shadow"
          />
        </div>

        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Our Digital Control Systems
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All digital control systems developed by Ardelec deliver industry-leading reliability, performance and safety — built for the most demanding operational environments.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700">
            Why We Stand Out
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Leveraging deep industry expertise, advanced connectivity and cutting-edge software, Ardelec enables real-time, data-driven decisions that power smarter, safer industrial operations — boosting resource efficiency and operational stability.
          </p>
        </div>
      </div>
    </section>
  );
};

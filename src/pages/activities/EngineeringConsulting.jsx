import { Link } from "react-router-dom";
import distributionNetwork from '../../assets/distribution-network.webp';
import industrialNetwork from '../../assets/industrial-network.webp';

export default function EngineeringConsulting() {
  const items = [
    {
      image: distributionNetwork,
      label: "Engineering & Consulting",
      title: "for Power Distribution Networks",
      link: "/activities/PowerDistributionNetworks",
    },
    {
      image: industrialNetwork,
      label: "Engineering & Consulting",
      title: "for Industrial Networks",
      link: "/activities/IndustrialNetworks",
    }
  ];

  return (
    <section className="container max-w-[1320px] mx-auto px-6 py-6">
      <p className="text-gray-600 text-md">Ardelec</p>
      <h1 className="text-3xl font-bold mb-8 text-gray-700">
        Engineering & Consulting
      </h1>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item, index) => (
          <div key={index} className="group">
            <Link to={item.link}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-xl object-cover shadow-md group-hover:brightness-75 transition"
              />
            </Link>
            <div className="text-gray-600 text-md mt-6">
              {item.label}
            </div>
            <Link 
              to={item.link}
              className="block text-2xl font-semibold text-gray-700 hover:text-red-600 transition"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

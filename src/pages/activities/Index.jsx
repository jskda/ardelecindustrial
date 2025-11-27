import { NavLink } from 'react-router-dom';

import specialPowerSupply from '../../assets/special_power_supply_cover.webp';
import softwareDev from '../../assets/software_development_cover.webp';
import engineering from '../../assets/engineering_consulting_cover.webp';
import powerGen from '../../assets/power_generation_cover.webp';
import energyStorage from '../../assets/energy_storage_cover.webp';

export default function ActivitiesIndex() {
  const activities = [
    {
      label: "Special Power Supply",
      url: "/activities/SpecialPowerSupply",
      img: specialPowerSupply,
      alt: "Special Power Supply"
    },
    {
      label: "Software Development & Digital Control Systems",
      url: "/activities/SoftwareDevelopment",
      img: softwareDev,
      alt: "Software Development"
    },
    {
      label: "Engineering & Consulting",
      url: "/activities/EngineeringConsulting",
      img: engineering,
      alt: "Engineering & Consulting"
    },
    {
      label: "Power Generation",
      url: "/activities/PowerGeneration",
      img: powerGen,
      alt: "Power Generation"
    },
    {
      label: "Industrial Energy Storage",
      url: "/activities/EnergyStorage",
      img: energyStorage,
      alt: "Industrial Energy Storage"
    },
  ];

  return (
    <div className="container max-w-[1320px] mx-auto pb-5 my-5">
      <div className="flex flex-wrap -mx-3">
        {activities.map((activity) => (
          <div key={activity.url} className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
            <div className="group cursor-pointer">
              <NavLink to={activity.url} className="block relative overflow-hidden rounded">
                <img
                  src={activity.img}
                  alt={activity.alt}
                  className="w-full h-64 object-cover transition duration-300 group-hover:brightness-75"
                />
              </NavLink>
              <span className="block text-gray-600 text-sm mt-3">Ardelec</span>
              <h2 className="text-gray-700 text-xl font-semibold mb-1">
                <NavLink to={activity.url} className="text-gray-900 hover:text-[#C41230] transition no-underline">
                  {activity.label}
                </NavLink>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
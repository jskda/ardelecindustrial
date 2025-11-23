import { NavLink } from 'react-router-dom';

export default function ActivitiesIndex() {
  const activities = [
    {
      label: "Special Power Supply",
      url: "/activities/SpecialPowerSupply",
      img: "img/yuzonbir/construction/generic/generic-1-medium.jpg",
      alt: "Special Power Supply"
    },
  ];

  return (
    <div className="container pb-5 my-5">
      <ul className="nav nav-pills justify-center md:justify-start text-3.5 pb-2 mb-4">

      </ul>

      <div className="flex flex-wrap -mx-3">
        {activities.map((activity) => (
          <div key={activity.url} className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
            <div className="group cursor-pointer">
              <NavLink to={activity.url} className="block relative overflow-hidden rounded">
                <img
                  src={activity.img}
                  alt={activity.alt}
                  className="w-full object-cover transition duration-300 ease-in-out group-hover:brightness-75"
                />
              </NavLink>
              <span className="block text-gray-600 tracking-wide font-medium text-base mt-2">ARDELEC</span>
              <h2 className="font-bold text-2xl leading-tight mt-1">
                <NavLink to={activity.url} className="text-gray-900 hover:text-primary no-underline">
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
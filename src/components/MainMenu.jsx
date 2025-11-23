import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
// eslint-disable-next-line no-unused-vars
import { useTrail, animated } from "react-spring";
import logo from '../assets/logo_horizontal_red.svg';

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Company", to: "/company" },
  {
    label: "Activities", to: "/activities",
    children: [
      { label: "Special Power Supply", to: "/activities/SpecialPowerSupply" },
      { label: "Software Development", to: "/activities/SoftwareDevelopment" },
      { label: "Engineering & Consulting", to: "/activities/EngineeringConsulting" },
      { label: "Power Generation", to: "/activities/PowerGeneration" },
      { label: "Industrial Energy Storage", to: "/activities/EnergyStorage" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

const socialUrls = [
  "http://www.facebook.com/",
  "http://www.twitter.com/",
  "http://www.linkedin.com/"
];

export default function MainMenu() {
  const [openIndex, setOpenIndex] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (idx) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenIndex(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenIndex(null), 200);
  };

  const trail = useTrail(menuItems.length + socialUrls.length, {
    from: { opacity: 0, transform: 'translateX(20px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 300,
  });

  return (
    <animated.nav className="shadow-md fixed top-0 left-0 right-0 z-50 bg-white/90">
      <div className="container mx-auto px-4 flex items-center justify-between p-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="ARDELEC logo" className="h-10 w-auto" />
        </a>
        
        <div className="flex items-center ml-6 w-full justify-end space-x-6">
          {menuItems.map((menuItem, index) => (
            <animated.div
              key={menuItem.label}
              style={trail[index]}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {menuItem.children ? (
                <>
                  <NavLink
                    to={menuItem.to}
                    className={({ isActive }) =>
                      `font-regular text-gray-700 hover:text-primary hover:text-red-600 flex items-center cursor-pointer select-none ${
                        isActive ? "font-semibold text-primary" : ""
                      }`
                    }
                    onClick={() => setOpenIndex(index)}
                  >
                    {menuItem.label}
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.5 7.5l4.5 4.5 4.5-4.5h-9z" />
                    </svg>
                  </NavLink>
                  <ul
                    className={`absolute left-0 top-full mt-1 bg-white rounded shadow-lg py-2 min-w-[220px] z-50 transition-opacity duration-150 ease-in-out ${
                      openIndex === index ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    style={{ pointerEvents: openIndex === index ? "auto" : "none" }}
                  >
                    {menuItem.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-200 hover:text-primary ${
                              isActive ? "font-semibold text-primary" : ""
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={menuItem.to}
                  className={({ isActive }) =>
                    `font-regular text-gray-700 hover:text-red-600 hover:text-primary ${
                      isActive ? "font-semibold text-primary" : ""
                    }`
                  }
                >
                  {menuItem.label}
                </NavLink>
              )}
            </animated.div>
          ))}
          {socialUrls.map((url, idx) => (
            <animated.div key={url} style={trail[menuItems.length + idx]}>
              <SocialIcon
                url={url}
                fgColor="#4B5563"
                bgColor="transparent"
                style={{ height: 32, width: 32 }}
                title={`Social Icon ${idx}`}
              />
            </animated.div>
          ))}
        </div>
      </div>
    </animated.nav>
  );
}

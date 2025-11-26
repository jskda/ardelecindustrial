import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useTrail, animated, useSpring } from "react-spring";
import logo from "../assets/logo_horizontal_red.svg";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Company", to: "/company" },
  {
    label: "Activities",
    to: "/activities",
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
  "http://www.linkedin.com/",
];

export default function MainMenu() {
  const [openIndex, setOpenIndex] = useState(null);  // desktop submenu
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const [mobileAccordion, setMobileAccordion] = useState(null); // mobile Activities open/close
  const timeoutRef = useRef(null);

  // desktop submenu open
  const handleMouseEnter = (idx) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenIndex(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenIndex(null), 200);
  };

  // desktop entrance animation
  const trail = useTrail(menuItems.length + socialUrls.length, {
    from: { opacity: 0, transform: "translateX(20px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    config: { tension: 120, friction: 14 },
    delay: 300,
  });

  // mobile menu slide animation
  const mobileMenuSpring = useSpring({
    transform: mobileOpen ? "translateX(0%)" : "translateX(100%)",
    opacity: mobileOpen ? 1 : 0,
    config: { tension: 200, friction: 24 },
  });

  return (
    <>
      {/* NAVBAR */}
      <nav className="shadow-md fixed top-0 left-0 right-0 z-50 bg-white/90">
        <div className="container max-w-[1320px] mx-auto px-4 flex items-center justify-between p-4">
          <a href="/" className="flex items-center">
            <img src={logo} alt="ARDELEC logotype" className="h-10 w-auto" />
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center ml-6 w-full justify-end space-x-6">
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
                        `font-regular text-gray-700 hover:text-red-600 flex items-center ${
                          isActive ? "font-semibold text-red-600" : ""
                        }`
                      }
                    >
                      {menuItem.label}
                      <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5.5 7.5l4.5 4.5 4.5-4.5h-9z" />
                      </svg>
                    </NavLink>

                    {/* Submenu */}
                    <ul
                      className={`absolute left-0 top-full mt-1 bg-white rounded shadow-lg py-2 min-w-[220px] transition-all ${
                        openIndex === index ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                    >
                      {menuItem.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-red-600"
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
                      `font-regular text-gray-700 hover:text-red-600 ${
                        isActive ? "font-semibold text-red-600" : ""
                      }`
                    }
                  >
                    {menuItem.label}
                  </NavLink>
                )}
              </animated.div>
            ))}

            {/* Social Icons */}
            <div className="flex gap-2">
              {socialUrls.map((url, idx) => (
                <animated.div key={url} style={trail[menuItems.length + idx]}>
                  <SocialIcon
                    url={url}
                    fgColor="#4B5563"
                    bgColor="transparent"
                    style={{ height: 30, width: 30 }}
                  />
                </animated.div>
              ))}
            </div>
          </div>

          {/* BURGER BUTTON FOR MOBILE */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      <animated.div
        style={mobileMenuSpring}
        className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-[60] p-6 flex flex-col lg:hidden"
      >
        {/* Mobile nav items */}
        {menuItems.map((item, idx) => (
          <div key={item.label} className="mb-4">
            {!item.children ? (
              <NavLink
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block text-lg text-gray-700 py-2"
              >
                {item.label}
              </NavLink>
            ) : (
              <>
                <button
                  className="w-full flex justify-between items-center py-2 text-lg text-gray-700"
                  onClick={() =>
                    setMobileAccordion(mobileAccordion === idx ? null : idx)
                  }
                >
                  {item.label}
                  <span>{mobileAccordion === idx ? "▲" : "▼"}</span>
                </button>

                {/* Accordion submenu */}
                {mobileAccordion === idx && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setMobileOpen(false)}
                        className="block text-gray-600"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}

        {/* Social Icons */}
        <div className="flex gap-3 mt-auto">
          {socialUrls.map((url) => (
            <SocialIcon
              key={url}
              url={url}
              fgColor="#4B5563"
              bgColor="transparent"
              style={{ height: 30, width: 30 }}
            />
          ))}
        </div>
      </animated.div>
    </>
  );
}

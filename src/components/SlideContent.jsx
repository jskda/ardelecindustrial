import React, { useEffect, useState } from "react";

export default function SlideContent({ active, image, lines }) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  useEffect(() => {
    if (active) {
      setTimeout(() => setShow1(true), 100);
      setTimeout(() => setShow2(true), 250);
      setTimeout(() => setShow3(true), 400);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow1(false);
      setShow2(false);
      setShow3(false);
    }
  }, [active]);

  return (
    <div className="absolute right-0 bottom-0 z-10 flex flex-col items-end p-12 w-full h-full select-none">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />
      <div className="absolute right-0 bottom-10 z-10 p-12 w-[900px] select-none">
        <div
          className={`transition-all duration-1200
            ${show1 ? "opacity-70 translate-x-0" : "opacity-0 translate-x-24"}
            text-[140px] font-extrabold px-10 mb-1 text-transparent whitespace-nowrap`}
          style={{ WebkitTextStroke: "1px #fff", textAlign: "left" }}
        >
          {lines[0]}
        </div>
        <div
          className={`transition-all duration-1200
            ${show2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}
            text-[100px] font-black text-white -mt-20 whitespace-nowrap text-left`}
        >
          {lines[1]}
        </div>
        <div
          className={`transition-all duration-1200 relative ${show3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"} -mt-4 mb-8`}
            style={{ width: "900px" }}
        >
          <div className="bg-neutral-800 skew-x-[-45deg] py-8 px-15 absolute left-15 top-0" style={{ right: "-200px" }}>
            <span className="block skew-x-45 text-white font-bold text-[28px] -mt-2 leading-none whitespace-nowrap">
              {lines[2]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

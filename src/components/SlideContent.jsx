import React, { useEffect, useState } from "react";

export default function SlideContent({ active, image, lines }) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  useEffect(() => {
    let t1, t2, t3;
    if (active) {
      t1 = setTimeout(() => setShow1(true), 100);
      t2 = setTimeout(() => setShow2(true), 250);
      t3 = setTimeout(() => setShow3(true), 400);
    } else {
      setShow1(false);
      setShow2(false);
      setShow3(false);
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [active]);

  return (
    <div className="relative w-full h-full select-none">

      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <div className="hidden xl:block absolute right-0 bottom-0 z-10 p-12 w-[900px]">

        <div
          className={`
            transition-all duration-1000
            ${show1 ? "opacity-70 translate-x-0" : "opacity-0 translate-x-24"}
            font-extrabold text-transparent whitespace-nowrap px-10 text-left
          `}
          style={{
            WebkitTextStroke: "1px #fff",
            
            fontSize: "130px"
          }}
        >
          {lines[0]}
        </div>

        <div
          className={`
            transition-all duration-1000 
            ${show2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}
            text-white font-black whitespace-nowrap text-left
            -mt-18
          `}
          style={{
            fontSize: "100px"
          }}
        >
          {lines[1]}
        </div>

        <div
          className={`
            transition-all duration-1200 relative 
            ${show3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"} -mt-4 mb-14`}
            style={{ width: "900px" }}
        >
          <div className="bg-neutral-800 skew-x-[-45deg] py-8 px-15 absolute left-15 top-0" style={{ right: "-200px" }}>
            <span className="block skew-x-45 text-white font-bold text-[28px] -mt-2 leading-none whitespace-nowrap">
              {lines[2]}
            </span>
          </div>
        </div>
      </div>

      <div className="hidden md:block xl:hidden absolute bottom-0 right-10 z-10 p-10 w-[600px]">

        <div
          className={`
            transition-all duration-1000
            ${show1 ? "opacity-70 translate-x-0" : "opacity-0 translate-x-24"}
            font-extrabold text-transparent whitespace-nowrap px-5 text-left
          `}
          style={{
            WebkitTextStroke: "1px #fff",
            
            fontSize: "85px"
          }}
        >
          {lines[0]}
        </div>

        <div
          className={`
            transition-all duration-1000 
            ${show2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}
            text-white font-black whitespace-nowrap text-left
            -mt-12
          `}
          style={{
            fontSize: "75px"
          }}
        >
          {lines[1]}
        </div>

        <div
          className={`
            transition-all duration-1200 relative 
            ${show3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"} -mt-3 mb-6`}
            style={{ width: "900px" }}
        >
          <div className="bg-neutral-800 skew-x-[-45deg] py-4 px-8 absolute left-15" style={{ right: "-200px" }}>
            <span className="block skew-x-45 text-white font-bold text-[20px] -mt-0 leading-none whitespace-nowrap">
              {lines[2]}
            </span>
          </div>
        </div>
      </div>

      <div className="block md:hidden xl:hidden absolute bottom-0 left-10 z-10 w-[400px]">
        <div
          className={`
            transition-all duration-1000
            ${show1 ? "opacity-70 translate-x-0" : "opacity-0 translate-x-24"}
            font-extrabold text-transparent whitespace-nowrap px-10 text-left
          `}
          style={{
            WebkitTextStroke: "1px #fff",
            
            fontSize: "55px"
          }}
        >
          {lines[0]}
        </div>

        <div
          className={`
            transition-all duration-1000 
            ${show2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}
            text-white font-black whitespace-nowrap -mt-8 px-5
          `}
          style={{
            fontSize: "45px"
          }}
        >
          {lines[1]}
        </div>

        <div
          className={`
            transition-all duration-1200 relative 
            ${show3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"} -mt-2 mb-14`}
            style={{ width: "900px" }}
        >
          <div className="bg-neutral-800 skew-x-[-45deg] py-4 px-8 absolute left-0" style={{ right: "-200px" }}>
            <span className="block skew-x-45 text-white font-bold text-[15px] -mt-1 leading-none whitespace-nowrap">
              {lines[2]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

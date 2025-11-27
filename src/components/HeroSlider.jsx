import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideContent from "./SlideContent";

import img_1 from "../assets/slide_1.webp";
import img_2 from "../assets/slide_2.webp";
import img_3 from "../assets/slide_3.webp";

import { useState } from "react";

const slides = [
  {
    image: img_1,
    lines: ["SPECIAL", "POWER SUPPLY", "Rectifier systems used for production"],
  },
  {
    image: img_2,
    lines: ["SOFTWARE", "DEVELOPMENT", "Software Development & Digital Control Systems"],
  },
  {
    image: img_3,
    lines: ["POWER", "GENERATION", "Engineering-Driven Power Systems"],
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className="
  h-100
  sm:h-120
  md:h-150
  lg:h-180
  xl:h-200
"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx} className="relative">
          <SlideContent
            active={activeIndex === idx}
            image={slide.image}
            lines={slide.lines}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

import { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import HeroSlider from '../components/HeroSlider'
import Services from '../components/Services'
import About from '../components/About'

import img1 from '../assets/slide_1.jpg';
import img2 from '../assets/slide_2.jpg';
import img3 from '../assets/slide_3.jpg';

export default function Home() {

const images = [img1, img2, img3];
const [loading, setLoading] = useState(true)

useEffect(() => {
  let loadedCount = 0;
  images.forEach(src => {
    const img = new window.Image();
    img.src = src;
    img.onload = check;
    img.onerror = check;
  });

  function check() {
    loadedCount += 1;
    if (loadedCount === images.length) setLoading(false);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  if (loading) return <Loader />;
  return (
    <>
      <HeroSlider />
      <About />
      <div className="container mx-auto px-4">
        <Services />
      </div>
    </>
  )
}
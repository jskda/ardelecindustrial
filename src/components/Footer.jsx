// src/components/Footer.jsx
import logoHorizontal from '../assets/logo_horizontal_red.svg';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5]">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Левая колонка — твой код + адаптивное выравнивание */}
          <div className="
            flex 
            justify-center           /* на мобильных — по центру */
            md:justify-end            /* на десктопе — к правому краю */
          ">
            <div className="
              text-center 
              md:text-right             /* на десктопе текст тоже по правому краю */
            ">
              <img 
                src={logoHorizontal} 
                alt="ARDELEC" 
                className="h-12 mb-4 mx-auto md:mx-0" 
              />
              <p className="text-gray-500 text-md">
                considering the energy
              </p>
            </div>
          </div>

          {/* Правая колонка — твой код + адаптивное выравнивание */}
          <div className="
            text-center                  /* на мобильных — по центру */
            md:text-left                 /* на десктопе — по левому краю */
            space-y-5 text-sm
          ">
            <h3 className="font-semibold text-gray-700 text-base mb-4">Contact Us</h3>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <svg className="w-4 h-4 text-gray-700 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <div>
                <p className="text-gray-700">ARDELEC INDUSTRIAL SOLUTIONS LTD</p>
                <p className="text-gray-700">128, City Road, London, EC1V 2NX, UK</p>
                <p className="text-gray-700">Company Registration Number: 14794597</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <svg className="w-4 h-4 text-gray-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <a href="tel:+442036933963" className="text-gray-700 hover:text-[#C41230] transition">
                +44 203 693 3963
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <svg className="w-4 h-4 text-gray-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <a href="mailto:info@ardelecindustrial.com" className="text-gray-700 hover:text-[#C41230] transition">
                info@ardelecindustrial.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
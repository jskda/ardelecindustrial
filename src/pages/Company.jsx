import { useEffect, useState } from 'react';
import Title from '../components/Title';
import companyImage from '../assets/company.webp';
import aboutImage from '../assets/about_image.webp';

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 inline-block -mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function Company() {
  const [active, setActive] = useState('who');
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
    sections.forEach(s => observer.observe(s));
    return () => sections.forEach(s => observer.unobserve(s));
  }, []);
  return (
    <>
      <Title title="About Us" image={companyImage} />
      <div className="container max-w-[1320px] mx-auto px-6 py-16 scroll-smooth">
        <div className="grid md:grid-cols-3 gap-10">
          <aside className="pl-6">
            <ul className="space-y-4 text-md font-medium sticky top-20">

              <li>
                <a
                  href="#who"
                  className={`flex items-center gap-1 hover:text-red-600 transition-colors ${
                    active === 'who' ? 'text-red-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  <ArrowIcon /> About Us
                </a>
              </li>
              <li>
                <a
                  href="#history"
                  className={`flex items-center gap-1 hover:text-red-600 transition-colors ${
                    active === 'history'
                      ? 'text-red-600 font-semibold'
                      : 'text-gray-700'
                  }`}
                >
                  <ArrowIcon /> History
                </a>
              </li>
            </ul>
          </aside>
          <div className="md:col-span-2 space-y-16">
            <section id="who" className="space-y-6 scroll-mt-24">
              <img src={aboutImage} className="w-full h-auto rounded shadow-md mb-4" alt="Power lines at sunset" />

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-700">
                Who we are
              </h2>
              <p className="font-semibold text-gray-600 leading-relaxed">
                Ardelec creates maximum value for partners through engineering,
                design, manufacturing and project management. We collaborate with
                innovative suppliers who bring technology and creativity to our
                projects, integrating this network from the concept phase to secure
                a competitive advantage across the value chain. Our supply chain
                management is organised for value. We focus on innovation,
                productivity, quality and availability, while maintaining
                competitive and transparent sourcing with our suppliers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ardelec Industrial is headquartered in the UK, with operations and
                manufacturing in Türkiye. In cooperation with General Electric, ABB
                and other leading international partners, we bring proven
                technologies and global best practices to every project. Our
                Turkish hub delivers engineering, manufacturing and project
                management, ensuring competitive lead times into Europe, the Middle
                East and neighbouring regions. We maintain regional offices across
                key international markets to provide project management, contract
                administration and after-sales support. Corporate governance and
                compliance operate under an integrated QHSE and QA/QC framework,
                enabling disciplined project execution. Engineering leadership and
                a dedicated Project Management Office ensure engineering excellence,
                schedule adherence, cost control and reliable performance.
              </p>
            </section>
            <section id="history" className="space-y-6 scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                History
              </h2>
              <div className="bg-gray-100 p-6">
                <p className="text-gray-600 leading-relaxed">
                  The company was built by a team of highly experienced professionals
                  in the field of electrical engineering and project management with
                  vast experience in execution of projects in domestic and
                  international markets. Major drive and motivation of ours is
                  creation of energy efficient solutions for satisfaction of our
                  customers, while taking care of business partners and wealth of our
                  own.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
import Title from '../components/Title';
import companyImage from '../assets/company.jpg'
import aboutImage from '../assets/about_image.jpg'

export default function Company() {
  return (
        <>
      <Title 
        title="About Us"
        image={companyImage} />
  
  <div className="container max-w-[1320px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          <aside className="pl-6 flex">
            <ul className=" space-y-4 text-md font-medium">
              <li><a href="#who" className="hover:text-red-600"> <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 inline-block -mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg> About Us</a></li>
              <li><a href="#history" className="hover:text-red-600"> <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 inline-block -mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg> History</a></li>
            </ul>
          </aside>

          <div className="md:col-span-2 space-y-16">

            <section id="who" className="space-y-6">
              <img src= {aboutImage} class="img-fluid mb-4" alt="Engineer Man" />
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Who we are</h2>
              <p className="font-semibold text-gray-600 leading-relaxed">
                ARDELEC creates maximum value for partners through engineering, design, manufacturing 
                and project management. We collaborate with innovative suppliers who bring technology 
                and creativity to our projects, integrating this network from the concept phase to secure 
                a competitive advantage across the value chain. Our supply chain management is organised 
                for value, focusing on innovation, productivity, quality and availability.
              </p>

              <p className="text-gray-600">
                ARDELEC Industrial is headquartered in the UK, with operations and manufacturing in Türkiye. 
                In cooperation with General Electric, ABB and other leading international partners, we bring 
                proven technologies and global best practices to every project. Our Turkish hub delivers 
                engineering, manufacturing and project management, ensuring competitive lead times across 
                Europe, the Middle East and neighbouring regions.
              </p>
            </section>

            <section id="history" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">History</h2>

              <div className="bg-gray-100 p-6">
                <p className="text-gray-600">
                  The company was built by a team of highly experienced professionals in electrical engineering 
                  and project management, with extensive international experience. Our motivation is to create 
                  energy-efficient solutions for our customers while supporting partners and strengthening our 
                  own expertise.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
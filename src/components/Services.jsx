import ServiceBlock from './ServiceBlock'
import powerIcon from '../assets/alt1.png'
import softwareIcon from '../assets/alt2.png'
import consultingIcon from '../assets/alt3.png'

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
      <ServiceBlock
        icon={powerIcon}
        title="Special Power Supply"
        description="Rectifier systems used for production of hydrogen, metal extraction..."
        link="/special-power-supply-services"
      />
      <ServiceBlock
        icon={softwareIcon}
        title="Software Development & Digital Control Systems"
        description="The digital controls systems, entirely developed by ARDELEC..."
        link="/software-development-services"
      />
      <ServiceBlock
        icon={consultingIcon}
        title="Engineering & Consulting"
        description="Comprehensive assessment, network topologies, power quality..."
        link="/engineering-consulting-services"
      />
    </section>
  )
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Company from './pages/Company';
import Activities from './pages/Activities';
import ActivitiesIndex from './pages/activities/Index'
import SpecialPowerSupply from './pages/activities/SpecialPowerSupply';
import SoftwareDevelopment from './pages/activities/SoftwareDevelopment';
import EnergyStorage from './pages/activities/EnergyStorage';
import EngineeringConsulting from './pages/activities/EngineeringConsulting'
import PowerGeneration from './pages/activities/PowerGeneration'
import PowerDistributionNetworks from './pages/activities/PowerDistributionNetworks'
import IndustrialNetworks from './pages/activities/IndustrialNetworks'
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className='min-h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/activities" element={<Activities />}>
            <Route index element={<ActivitiesIndex />} /> 
            <Route path="SpecialPowerSupply" element={<SpecialPowerSupply />} />
            <Route path="SoftwareDevelopment" element={<SoftwareDevelopment />} />
            <Route path="EnergyStorage" element={<EnergyStorage />} />
            <Route path="EngineeringConsulting" element={<EngineeringConsulting />} />
            <Route path="PowerGeneration" element={<PowerGeneration />} />
            <Route path="PowerDistributionNetworks" element={<PowerDistributionNetworks />} />
            <Route path="IndustrialNetworks" element={<IndustrialNetworks />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
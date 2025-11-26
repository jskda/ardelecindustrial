import { Outlet } from 'react-router-dom';
import Title from '../components/Title';
import companyImage from '../assets/company.jpg'

export default function Company() {
  return (
        <>
      <Title 
        title="About Us"
        image={companyImage} />
    <section className="container max-w-[1320px] mx-auto px-6 py-12 prose">
      <h1>Company</h1>
      <p>ARDELEC activities in the fields of Engineering, Design, Manufacturing and Project Management are directed towards creating the maximum value...</p>
      <Outlet />
    </section>
    </>
  );
}
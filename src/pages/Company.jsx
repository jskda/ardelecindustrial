import { Outlet } from 'react-router-dom';
import Title from '../components/Title';

export default function Company() {
  return (
        <>
      <Title 
        title="About Us"
        image="company.jpg" />
    <section className="max-w-4xl mx-auto px-6 py-12 prose">
      <h1>Company</h1>
      <p>ARDELEC activities in the fields of Engineering, Design, Manufacturing and Project Management are directed towards creating the maximum value...</p>
      <Outlet />
    </section>
    </>
  );
}
import { Outlet } from 'react-router-dom';
import Title from '../components/Title';

export default function Activities() {
  return (
    <>
      <Title 
        title="Activities"
        image="activities.jpg" />

      <section className="w-full py-16">
        <div className="container max-w-[1320px] mx-auto px-4">
        <Outlet />
        </div>
    </section>
    </>
  );
}
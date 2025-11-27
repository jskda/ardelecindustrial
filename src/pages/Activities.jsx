import { Outlet } from 'react-router-dom';
import Title from '../components/Title';
import activitiesImage from '../assets/activities.webp';

export default function Activities() {
  return (
    <>
      <Title 
        title="Activities"
        image={activitiesImage}
      />
      <section className="container max-w-[1320px] mx-auto px-6 py-12 scroll-mt-24">
        <Outlet />
      </section>
    </>
  );
}
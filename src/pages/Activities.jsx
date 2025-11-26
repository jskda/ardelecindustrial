import { Outlet } from 'react-router-dom';
import Title from '../components/Title';
import activitiesImage from '../assets/activities.jpg'

export default function Activities() {
  return (
    <>
      <Title 
        title="Activities"
        image={activitiesImage} />

      <section className= "container max-w-[1320px] mx-auto">
        <div>
        <Outlet />
        </div>
    </section>
    </>
  );
}
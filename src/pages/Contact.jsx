import Title from '../components/Title';
import contactImage from '../assets/contact.jpg'

export default function Company() {
  return (
        <>
      <Title 
        title="Contact Us"
        image={contactImage} />
    <section className="container max-w-[1320px] mx-auto px-6 py-12 prose">
      <h1>Contact Us</h1>
      <p>Email: info@ardelecindustrial.com</p>
      <p>Phone: +44 203 693 3963</p>
      {/* Добавьте форму или другие контакты по необходимости */}
    </section>
    </>
  )
}

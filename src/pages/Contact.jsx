import Title from '../components/Title';

export default function Company() {
  return (
        <>
      <Title 
        title="Contact Us"
        image="contact.jpg" />
    <section className="max-w-4xl mx-auto px-6 py-12 prose">
      <h1>Contact Us</h1>
      <p>Email: info@ardelecindustrial.com</p>
      <p>Phone: +44 203 693 3963</p>
      {/* Добавьте форму или другие контакты по необходимости */}
    </section>
    </>
  )
}

import Title from '../components/Title'
import contactImage from '../assets/contact.webp'

export default function Contact() {
  return (
    <>
      <Title title="Contact" image={contactImage} />
      <section className="w-full bg-white py-12">
        <div className="container mx-auto max-w-[1320px] px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Corporate Headquarters
              </h2>
              <p className="text-gray-600 font-semibold">
              Ardelec Industrial Solutions Ltd
              </p>
              <p className="text-gray-600">
                128, City Road, London, EC1V 2NX, UK
              </p>
              <p className="text-gray-600">
                Tel: +44 203 693 3963
                </p>
              <p className="text-gray-600 mb-4">
                info@ardelecindustrial.com
              </p>
              <div className="w-full h-[350px] md:h-[450px]">
                <iframe
                  title="London Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2355693016134!2d-0.09124068740505346!3d51.52723900913569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca671a6cfb7%3A0x9320c88f0a927f3f!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20Birle%C5%9Fik%20Krall%C4%B1k!5e0!3m2!1str!2str!4v1683278451800!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Operations in Türkiye
              </h2>
              <p className="text-gray-600 font-semibold">
              Meta FX Global Software and Trade Ltd
              </p>
              <p className="text-gray-600">
                Esentepe Mah., Keskin Kalem Sokak, Arya Plaza No:17, İç Kapı No:2, Şişli, Istanbul
              </p>
              <p className="text-gray-600">
                Tel: +90 535 379 5318
                </p>
              <p className="text-gray-600 mb-4">
                info@ardelecindustrial.com
              </p>
              <div className="w-full h-[350px] md:h-[450px]">
                <iframe
                  title="Istanbul Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0196273190636!2d29.00522941217077!3d41.06856361559021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6508b597d1b%3A0x65257705984a6a8a!2sEsentepe%2C%20Keskin%20Kalem%20Sok.%20No%3A17%2C%2034394%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1683280265914!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import ContactForm from "./ContactForm"
import Nav from "./Nav"

export default function Contact() {

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-title">
            Contact
          </h2>
          <p className="contact-statement">
            I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
      <div className="seperator"></div>
      <Nav/>
    </section>
  )
}


function Contact({restData, isLoaded}) {
    return (
      isLoaded ?
        <section className="contact" id="contact" data-aos="fade-zoom-in" data-aos-easing="ease" data-aos-delay="200" data-aos-offset="0">
          <div className="contact-content">
            <h2>{restData.acf['contacts_header']}</h2>
            <p>{restData.acf['contacts_text']}</p>
          </div>
        </section>
      : null
    );
  }

export default Contact;
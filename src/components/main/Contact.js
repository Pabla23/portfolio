import { acfImageHTML } from "../../globals/globals";
import { useState } from "react";

function Contact({restData, isLoaded}) {

  const [isCopied, setIsCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText('dilraj_pabla@hotmail.com');

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }
    , 2400);
  }

  return (
    isLoaded ?
      <section className="contact" id="contact" data-aos="fade-zoom-in" data-aos-easing="ease" data-aos-delay="200" data-aos-offset="0">
        <div className="contact-content">
          <h2>{restData.acf['contacts_header']}</h2>
          <div className="contact-text" dangerouslySetInnerHTML={{__html: restData.acf['contacts_text']}}></div>
          <button className={`btn-primary ${isCopied ? 'copied' : ''}`} onClick={copyEmail}>
            {isCopied ? 'Email Copied!' : 'Copy Email'}
          </button>
          <figure dangerouslySetInnerHTML={acfImageHTML(restData.acf.working_image)}></figure>
        </div>
      </section>
    : null
  );
}

export default Contact;
import { acfImageHTML } from "../../globals/globals";
import { useState } from "react";

function Contact({restData, isLoaded}) {

  const [isCopied, setIsCopied] = useState(false);

  function copyEmail() {
    const email = 'dilraj_pabla@hotmail.com';
  
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
  
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
  
    document.execCommand('copy');
  
    document.body.removeChild(tempInput);
  
    setIsCopied(true);
  
    setTimeout(() => {
      setIsCopied(false);
    }, 2400);
  }

  return (
    isLoaded ?
      <section className="contact" id="contact" data-aos="fade-zoom-in" data-aos-easing="ease" data-aos-delay="200" data-aos-offset="100">
        <div className="contact-content">
          <h2>{restData.acf['contacts_header']}</h2>
          <div className="contact-text" dangerouslySetInnerHTML={{__html: restData.acf['contacts_text']}}></div>
          <button className={`btn-primary ${isCopied ? 'copied' : ''}`} onClick={copyEmail}>
            {isCopied ? 'Email Copied!' : 'Copy Email'}
          </button>
        </div>
        <div className="background">
          <figure className="content-image" dangerouslySetInnerHTML={acfImageHTML(restData.acf.working_image)}></figure>
        </div>
      </section>
    : null
  );
}

export default Contact;
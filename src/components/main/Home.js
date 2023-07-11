import { acfImageHTML } from "../../globals/globals";
import { useEffect, useState } from "react";

function Home({restData, isLoaded}) {

  // type out "I'm a Web Developer"
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const text = "I'm a Web Developer.";
      if (currentIndex < text.length) {
        const typingTimeout = setTimeout(() => {
          setTypedText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, 135);
        
        return () => {
          clearTimeout(typingTimeout);
        };
      }
  }, [currentIndex]);

  return (
    isLoaded ?
      <section className="home" id="home" data-aos="fade-zoom-in" data-aos-easing="ease" data-aos-delay="300" data-aos-offset="0">
        <div className="home-content" role="banner">
          <h1 dangerouslySetInnerHTML={{__html: restData.title.rendered}}></h1>
          <p className="self-intro">{typedText}</p>
        </div>
        <div className="background">
          <figure className="content-image" dangerouslySetInnerHTML={acfImageHTML(restData.acf.idea_image)}></figure>
        </div>
      </section>
    : null
  );
}

export default Home;
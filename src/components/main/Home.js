import { acfImageHTML } from "../../globals/globals";

function Home({restData, isLoaded}) {

  return (
    isLoaded ?
      <section className="home" id="home" data-aos="fade-zoom-in" data-aos-easing="ease" data-aos-delay="300" data-aos-offset="0">
        <div className="home-content">
          <h1>{restData.title.rendered}</h1>
          <figure className="content-image" dangerouslySetInnerHTML={acfImageHTML(restData)}></figure>
        </div>
      </section>
    : null
  );
}

export default Home;
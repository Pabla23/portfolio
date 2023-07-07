function About({restData, isLoaded}) {
  
  return (
    isLoaded ?
      <section className="about" id="about" data-aos="fade-zoom-in" data-aos-easing="ease" data-aos-delay="200" data-aos-offset="100">
        <div className="about-content">
          <section className="about-intro">
            <h2>{restData.acf['about_header']}</h2>
            <div>
              <h3>Background</h3>
              <div dangerouslySetInnerHTML={{__html: restData.acf['about_text']}}></div>
            </div>
            <div>
              <h3>Hobbies</h3>
              <div dangerouslySetInnerHTML={{__html: restData.acf['about_text_2']}}></div>
            </div>
          </section>

          <div className="stack-wrapper">
            <section className="tech stack">
              <h3>Tech Stack</h3>
              <ul>
                {restData.acf['tech_stack'] ? restData.acf['tech_stack'].map((tech, index) => (
                  <li key={index} dangerouslySetInnerHTML={{__html: tech.tech_skill}}></li>
                )): null}
              </ul>
            </section>

            <section className="design stack">
              <h3>Design Stack</h3>
              <ul>
                {restData.acf['design_stack'] ? restData.acf['design_stack'].map((design, index) => (
                  <li key={index} dangerouslySetInnerHTML={{__html: design.design_skill}}></li>
                )): null}
                <li className="favourite"><strong>My Favourites</strong></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    : null
  );
}

export default About;
function About({restData, isLoaded}) {
  
  return (
    isLoaded ?
      <section className="about" id="about" data-aos="fade-zoom-in" data-aos-easing="ease" data-aos-delay="200" data-aos-offset="0">
        <div className="about-content">
          <section className="about-intro">
            <h2>{restData.acf['about_header']}</h2>
            <p>{restData.acf['about_text']}</p>
          </section>
          <section className="tech-stack">
            <h3>Tech Stack</h3>
            <ul>
              {restData.acf['tech_stack'] ? restData.acf['tech_stack'].map((tech, index) => (
                <li key={index} dangerouslySetInnerHTML={{__html: tech.tech_skill}}></li>
              )): null}
            </ul>
          </section>

          <section className="design-stack">
            <h3>Design Stack</h3>
            <ul>
              {restData.acf['design_stack'] ? restData.acf['design_stack'].map((design, index) => (
                <li key={index} dangerouslySetInnerHTML={{__html: design.design_skill}}></li>
              )): null}
            </ul>
          </section>
        </div>
      </section>
    : null
  );
}

export default About;
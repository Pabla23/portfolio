

function About({restData, isLoaded}) {
    return (
      isLoaded ?
        <section className="about" id="about">
        <div className="about-content">
          <h2>{restData.acf['about_header']}</h2>
          <p>{restData.acf['about_text']}</p>
        </div>
        </section>
      : null
    );
  }

export default About;


function Projects({restData, isLoaded}) {
    return (
      isLoaded ?
        <section className="projects" id="projects">
        <div className="projects_content">
          <h2>{restData.acf['projects_header']}</h2>
          <p>{restData.acf['projects_text']}</p>
        </div>
        </section>
      : null
    );
  }

export default Projects;
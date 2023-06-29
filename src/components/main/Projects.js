import { useEffect, useState } from "react";
import { restBase } from "../../globals/globals";
import { featuredImage } from "../../globals/globals";
import { Link } from "react-router-dom";

function Projects({restData, isLoaded}) {

  const restPath = restBase + "/posts?_embed";
  const [restDataCPT, setData] = useState([]);
  const [isLoadedCPT, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath)
      if ( response.ok ) {
        const data = await response.json()
        setData(data)
        setLoadStatus(true)
      } else {
        setLoadStatus(false)
      }
    }
    fetchData()
  }, [restPath])

  return (
    isLoaded ?
      <section className="projects" id="projects" data-aos="fade-zoom-in" data-aos-easing="ease" data-aos-delay="200" data-aos-offset="0">
        <div className="projects_content">
          <h2>{restData.acf['projects_header']}</h2>
          <p>{restData.acf['projects_text']}</p>
          <div className="projects_grid">
            {isLoadedCPT ? restDataCPT.map((item, index) => {
              return (
                <div className="project" key={index}>
                  <Link to={`/project/${item.slug}`}>
                    <figure className="featured_image" dangerouslySetInnerHTML={featuredImage(item._embedded['wp:featuredmedia'][0])}></figure>
                    <div className="project_info">
                      <h3>{item.title.rendered}</h3>
                      <div dangerouslySetInnerHTML={{__html: item.excerpt.rendered}}></div>
                    </div>
                  </Link>
                </div>
              )
            }) : null}
          </div>
        </div>
      </section>
    : null
  );
}

export default Projects;
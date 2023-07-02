import { useEffect, useState } from "react";
import { restBase, featuredImage } from "../../globals/globals";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Projects({restData, isLoaded}) {

  const restPath = restBase + "/posts?_embed";
  const [restDataCPT, setData] = useState([]);
  const [isLoadedCPT, setLoadStatus] = useState(false);

  const [isMobile, setMobile] = useState(window.innerWidth < 1200);

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

  //reverse the order of the array
  const restDataAdjusted = restDataCPT.slice().reverse();

  //check if mobile useEffect
  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth < 1200);
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    isLoaded ?
      <section className="projects" id="projects" data-aos="fade-zoom-in" data-aos-easing="ease" data-aos-delay="200" data-aos-offset="0">
        <div className="projects_content">
          <h2>{restData.acf['projects_header']}</h2>
          <p>{restData.acf['projects_text']}</p>

          {isMobile ? (
            <div className="projects_grid">
              <Carousel showThumbs={false} infiniteLoop={true}>
                {isLoadedCPT ? restDataAdjusted.map((item, index) => (
                  <div className={`project p${item.id}`} key={index}>
                    <Link to={`/project/${item.slug}`}>
                      <figure className="featured_image" dangerouslySetInnerHTML={featuredImage(item._embedded['wp:featuredmedia'][0])}></figure>
                      <div className="project_info">
                        <h3>{item.title.rendered}</h3>
                        <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
                      </div>
                    </Link>
                  </div>
                )) : null}
              </Carousel>
            </div>
          ) : (
            <div className="projects_grid">
              {isLoadedCPT ? restDataAdjusted.map((item, index) => (
                <div className={`project p${item.id}`} key={index}>
                  <Link to={`/project/${item.slug}`}>
                    <figure className="featured_image" dangerouslySetInnerHTML={featuredImage(item._embedded['wp:featuredmedia'][0])}></figure>
                    <div className="project_info">
                      <h3>{item.title.rendered}</h3>
                      <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
                    </div>
                  </Link>
                </div>
              )) : null}
            </div>
          )}
        </div>
      </section>
    : null
  );
}

export default Projects;
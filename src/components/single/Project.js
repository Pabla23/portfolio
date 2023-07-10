import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { featuredImage, restBase, appTitle } from "../../globals/globals"
import ProjectNav from "./ProjectNav";
import PrevNextProject from "./PrevNextProject";
import { ReactComponent as HomeBtn } from "../../images/home-singleproject.svg";
import { ReactComponent as GithubSVG } from "../../images/github.svg";


function Project() {

    const {slug} = useParams();
    const restPath = restBase + `/posts?_embed&slug=${slug}&acf_format=standard`;
    const [restDataCPT, setData] = useState([]);
    const [isLoadedCPT, setLoadStatus] = useState(false);
    const [key, setKey] = useState(0);
  
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

    useEffect(() => {
      setKey(prevKey => prevKey + 1);
    }, [slug]);
    console.log(key);

    return (
        <div className="single-project">
              <header className="project-head">
                <Link className="home-btn" to="/">
                    <HomeBtn/>
                </Link>
                <ProjectNav restData={restDataCPT} isLoaded={isLoadedCPT}/>
              </header>

            {isLoadedCPT ? restDataCPT.map((project) => {
                // set document title
                document.title = `${appTitle + " | " + project.title.rendered}`;

                const gallery = project._embedded['acf:attachment'];
                const tools = project.acf.project_tools;
                const functionality = project.acf.project_functionality;
                const planning = project.acf.project_planning;

                return (
                    <main key={key} className='content-wrapper'>

                        <div className="project-content">
                          <h1>{project.title.rendered}</h1>

                          <div className="image-collage" id={project.slug}>
                            {/* map through ACF gallery */}
                            {gallery ? gallery.map((image, i) => {
                                return (
                                    <figure key={i} className={image.slug} dangerouslySetInnerHTML={featuredImage(image)}></figure>
                                )
                            }): null}
                          </div>

                          <div className="project-caption" dangerouslySetInnerHTML={{__html: project.content.rendered}}></div>

                          {/* map through tools to get a list */}
                          <section className="project-tools">
                            <h2>Project Tools</h2>
                            <ul>
                              {tools ? tools.map((tool, i) => {
                                  return (
                                      <li key={i}>{tool.list1}</li>
                                  )
                              }): null}
                            </ul>
                          </section>

                          <section className="project-overview">
                            <h2>{project.acf.overview_header}</h2>
                            <div dangerouslySetInnerHTML={{__html: project.acf.project_overview}}></div>
                            <div dangerouslySetInnerHTML={{__html: project.acf.extra_paragraph}}></div>
                            <div dangerouslySetInnerHTML={{__html: project.acf.extra_paragraphv2}}></div>
                          </section>
                          {planning ?                           
                            <section className="project-planning">
                              <h2>{project.acf.planning_header}</h2>
                              <div dangerouslySetInnerHTML={{__html: project.acf.project_planning}}></div>
                            </section> 
                          : null}

                          {functionality ? 
                            <section className="project-functionality">
                              <h2>{project.acf.functionality_header}</h2>

                              {functionality ? functionality.map((item, i) => {
                                  return (
                                      <div key={i}>
                                          <h3>{item.function_heading}</h3>
                                          <p>{item.function_paragraph}</p>
                                          <a href={item.github_link} target="_blank" rel="noopener noreferrer">
                                            View Code
                                            <GithubSVG/>
                                          </a>
                                      </div>
                                  )
                              }): null}
                            </section>
                          : null}

                          <section className="project-links">
                            <h2>Results</h2>
                            <p>Use the links below to check out the live site or  view the project in GitHub.</p>
                            <a href={project.acf.live_site_link} target="_blank" rel="noopener noreferrer">Live Site</a>
                            <a href={project.acf.github_link} target="_blank" rel="noopener noreferrer">
                              GitHub
                              <GithubSVG/>
                            </a>
                          </section>
                        </div>
                        <PrevNextProject project={project}/>                     
                    </main>
                )
            }) : null}
        </div>
    )
}

export default Project
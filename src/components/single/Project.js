import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { featuredImage, restBase, appTitle } from "../../globals/globals"
import ProjectNav from "./ProjectNav";
import PrevNextProject from "./PrevNextProject";

function Project() {

    const {slug} = useParams();
    const restPath = restBase + `/posts?_embed&slug=${slug}&acf_format=standard`;
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
        <div className="single-project">
            <Link to="/">Back</Link>

            {isLoadedCPT ? restDataCPT.map((project, i) => {
                // set document title
                document.title = `${appTitle + " | " + project.title.rendered}`;

                const gallery = project._embedded['acf:attachment'];
                const tools = project.acf.project_tools;
                const functionality = project.acf.project_functionality;

                return (
                    <div key={i}>
                        <PrevNextProject project={project}/>

                        <ProjectNav/>

                        <div className="project-content">
                          <h1>{project.title.rendered}</h1>

                          <div className="image-collage">
                            {/* map through ACF gallery */}
                            {gallery ? gallery.map((image, i) => {
                                return (
                                    <figure key={i} dangerouslySetInnerHTML={featuredImage(image)}></figure>
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
                          </section>

                          <section className="project-planning">
                            <h2>{project.acf.planning_header}</h2>
                            <div dangerouslySetInnerHTML={{__html: project.acf.project_planning}}></div>
                          </section>

                          <section className="project-functionality">
                            <h2>{project.acf.functionality_header}</h2>

                              {functionality ? functionality.map((item, i) => {
                                  return (
                                      <div key={i}>
                                          <h3>{item.function_heading}</h3>
                                          <p>{item.function_paragraph}</p>
                                          <a href={item.github_link}>View Code</a>
                                      </div>
                                  )
                              }): null}
                          </section>

                          <section className="project-links">
                            <h2>Project Results</h2>
                            <p>Use the links below to check out the live site or  view the project in GitHub.</p>
                            <a href={project.acf.live_site_link}>Live Site</a>
                            <a href={project.acf.github_link}>GitHub</a>
                          </section>
                        </div>                        
                    </div>
                )
            }) : null}
        </div>
    )
}

export default Project
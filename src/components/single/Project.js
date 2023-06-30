import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { featuredImage, restBase } from "../../globals/globals"
import ProjectNav from "./ProjectNav";
import PrevNextProject from "./PrevNextProject";

function Project() {

    const {slug} = useParams();
    const restPath = restBase + `/posts?_embed&slug=${slug}`;
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

                const gallery = project._embedded['acf:attachment'];

                return (
                    <div key={i}>
                        <PrevNextProject project={project}/>

                        <ProjectNav/>
                        
                        <h1>{project.title.rendered}</h1>

                        {gallery ? gallery.map((image, i) => {
                            return (
                                <figure key={i} dangerouslySetInnerHTML={featuredImage(image)}></figure>
                            )
                        }): null}

                        <div dangerouslySetInnerHTML={{__html: project.content.rendered}}></div>

                    </div>
                )
            }) : null}
        </div>
    )
}

export default Project
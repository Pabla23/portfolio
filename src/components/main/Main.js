import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect, useState } from "react";

function Main({restBase, featuredImage}) {

  const restPath = restBase + "/pages/2?_embed";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

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
    <div className="section-wrapper">
      <Home restData = {restData} isLoaded = {isLoaded} featuredImage = {featuredImage}/>
      <About restData = {restData} isLoaded = {isLoaded}/>
      <Projects restData = {restData} isLoaded = {isLoaded}/>
      <Contact restData = {restData} isLoaded = {isLoaded}/>
    </div>
  );
}

export default Main;
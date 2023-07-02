import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import { restBase, appTitle } from "../../globals/globals";
import AOS from "aos";
import "../../aos/aos.css";

function Main() {

  document.title = `${appTitle + " | Portfolio"}`;

  const restPath = restBase + "/pages/2?acf_format=standard";
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main>
      <div className="section-wrapper">
        <Home restData = {restData} isLoaded = {isLoaded}/>
        <About restData = {restData} isLoaded = {isLoaded}/>
        <Projects restData = {restData} isLoaded = {isLoaded}/>
        <Contact restData = {restData} isLoaded = {isLoaded}/>
      </div>
    </main>
  );
}

export default Main;
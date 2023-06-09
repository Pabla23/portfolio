import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Main() {
    return (
      <div className="section-wrapper">
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    );
  }

export default Main;
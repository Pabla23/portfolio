import { currentYear, author } from "../globals/globals";
import { useLocation } from "react-router-dom";
// import SVG as react component
import { ReactComponent as GithubSVG } from "../images/github.svg";
import { ReactComponent as DillySVG } from "../images/dilly.svg";
import { ReactComponent as LinkedInSVG } from "../images/linkedin.svg";


function Footer() {
  const location = useLocation();

  // Check if we are on the single project page
  const isSingleProjectPage = location.pathname.includes("/project/");

  // Render the footer only if it's not the single project page
  if (isSingleProjectPage) {
    return null;
  }

  return (
    <footer>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/dilraj-pabla/" target="_blank" rel="noopener noreferrer">
          <LinkedInSVG/>
          <span className="sr-only">LinkedIn profile</span>
        </a>
        <a href="https://github.com/Pabla23/" target="_blank" rel="noopener noreferrer">
          <GithubSVG/>
          <span className="sr-only">GitHub profile</span>
        </a>
      </div>
      <a className="source-link" href="https://github.com/Pabla23/portfolio" target="_blank" rel="noopener noreferrer">
        View Source Code
        <span className="sr-only"> on GitHub</span>
        <GithubSVG/>
      </a>
      <div className="svg-wrapper">
        <DillySVG className="dilly-svg"/>
      </div>
      <p>&copy; {currentYear} {author}</p>
    </footer>
  );
}

export default Footer;
import { currentYear, author } from "../globals/globals";
import { useLocation } from "react-router-dom";
// import SVG as react component
import { ReactComponent as GithubSVG } from "../images/github.svg";


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
      <p>&copy; {currentYear} {author}</p>
      <a href="https://github.com/Pabla23/portfolio" target="_blank" rel="noopener noreferrer">
        View Source Code
        <GithubSVG/>
      </a>
      
      
    </footer>
  );
}

export default Footer;
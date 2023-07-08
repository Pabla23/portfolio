import { currentYear, author } from "../globals/globals";
import { useLocation } from "react-router-dom";

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
    </footer>
  );
}

export default Footer;
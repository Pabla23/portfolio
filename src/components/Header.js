import Nav from "./Nav";
import { useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();
    const key = location.pathname;
    
    // Check if we are on the single project page
    const isSingleProjectPage = location.pathname.includes("/project/");
  
    // Render the footer only if it's not the single project page
    if (isSingleProjectPage) {
      return null;
    }
    
    return (
        <header key={key}>
            <Nav/>
        </header>
    );
  }

export default Header;
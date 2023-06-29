import Nav from "./Nav";
import { useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();
    const key = location.pathname;

    return (
        <header key={key}>
            <Nav/>
        </header>
    );
  }

export default Header;
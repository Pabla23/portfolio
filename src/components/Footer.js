import { currentYear, author } from "../globals/globals";

function Footer() {
    return (
        <footer>
            <p>&copy; {currentYear} {author}</p>
        </footer>
    );
  }

export default Footer;
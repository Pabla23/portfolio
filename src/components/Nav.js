import homeIcon from '../images/home.svg';
import aboutIcon from '../images/about.svg';
import projectsIcon from '../images/projects.svg';
import contactIcon from '../images/contact.svg';

function Nav() {
    return (
        <nav className='main-nav'>
            <ul className="nav-menu">
                <li>
                    <a href="#home">
                        <img className='menu-icon' src={homeIcon} alt="home"/>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <img className='menu-icon' src={aboutIcon} alt="about"/>
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <img className='menu-icon' src={projectsIcon} alt="projects"/>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <img className='menu-icon' src={contactIcon} alt="contact"/>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
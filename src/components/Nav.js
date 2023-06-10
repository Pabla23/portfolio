import { useState, useEffect } from 'react';
import homeIcon from '../images/home.svg';
import aboutIcon from '../images/about.svg';
import projectsIcon from '../images/projects.svg';
import contactIcon from '../images/contact.svg';

function Nav() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {

    // Update the nav menu when the user scrolls
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      let activeSectionIndex = 0;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        // distance from top of the page to the top of the section
        const offsetTop = section.offsetTop;
        // height of the section
        const sectionHeight = section.offsetHeight;

        // if the user has scrolled past half of the next section
        if (scrollTop >= offsetTop - sectionHeight / 2) {
          activeSectionIndex = i;
          break;
        }
      }

      setActiveSectionIndex(activeSectionIndex);
    };

    window.addEventListener('scroll', handleScroll);

  }, []);

  return (
    <nav className='main-nav'>
      <ul className="nav-menu">
        <li className={activeSectionIndex === 0 ? 'active' : ''}>
          <a href="#home">
            <img className='menu-icon' src={homeIcon} alt="home" />
            Home
          </a>
        </li>
        <li className={activeSectionIndex === 1 ? 'active' : ''}>
          <a href="#about">
            <img className='menu-icon' src={aboutIcon} alt="about" />
            About
          </a>
        </li>
        <li className={activeSectionIndex === 2 ? 'active' : ''}>
          <a href="#projects">
            <img className='menu-icon' src={projectsIcon} alt="projects" />
            Projects
          </a>
        </li>
        <li className={activeSectionIndex === 3 ? 'active' : ''}>
          <a href="#contact">
            <img className='menu-icon' src={contactIcon} alt="contact" />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

//TESTS
// console.log('scrollTop', scrollTop);
// console.log('offsetTop', offsetTop);
// console.log('sectionHeight', sectionHeight);
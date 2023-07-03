import { useState, useEffect } from 'react';
import homeIcon from '../images/home.svg';
import aboutIcon from '../images/about.svg';
import projectsIcon from '../images/projects.svg';
import contactIcon from '../images/contact.svg';

function Nav() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  // add active class to nav menu item when section is in view (scrolling)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const aboutElement = document.querySelector('#about');

      if (aboutElement) {
        const offsetTop = aboutElement.offsetTop / 2;
        const sectionHeight = aboutElement.clientHeight;
        const activeIndex = Math.floor((scrollTop - offsetTop) / sectionHeight) + 1;
        setActiveSectionIndex(activeIndex);
      }
    };

    if (window.location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (window.location.pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    window.location.pathname === '/' && (
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
    )
  );
}

export default Nav;

//TESTS
// console.log('scrollTop', scrollTop);
// console.log('offsetTop', offsetTop);
// console.log('sectionHeight', sectionHeight);
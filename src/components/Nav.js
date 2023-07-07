import { useState, useEffect } from 'react';
//import svg as react component (not as image)
import { ReactComponent as HomeIcon } from "../images/home.svg";
import { ReactComponent as AboutIcon } from "../images/about.svg";
import { ReactComponent as ProjectsIcon } from "../images/projects.svg";
import { ReactComponent as ContactIcon } from "../images/contact.svg";


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
            <HomeIcon className='menu-icon' />
            Home
          </a>
        </li>
        <li className={activeSectionIndex === 1 ? 'active' : ''}>
          <a href="#about">
            <AboutIcon className='menu-icon' />
            About
          </a>
        </li>
        <li className={activeSectionIndex === 2 ? 'active' : ''}>
          <a href="#projects">
            <ProjectsIcon className='menu-icon' />
            Projects
          </a>
        </li>
        <li className={activeSectionIndex === 3 ? 'active' : ''}>
          <a href="#contact">
            <ContactIcon className='menu-icon' />
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
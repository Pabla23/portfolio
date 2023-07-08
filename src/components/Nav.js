import { useState, useEffect } from 'react';
//import svg as react component (not as image)
import { ReactComponent as HomeIcon } from "../images/home.svg";
import { ReactComponent as AboutIcon } from "../images/about.svg";
import { ReactComponent as ProjectsIcon } from "../images/projects.svg";
import { ReactComponent as ContactIcon } from "../images/contact.svg";


function Nav() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  // add active class to nav menu when section is in view (scrolling)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const aboutSection = document.querySelector('#about');

      if (aboutSection) {
        const offsetTop = aboutSection.offsetTop / 2;
        const sectionHeight = (aboutSection.clientHeight) - 110;

        const activeIndex = Math.floor((scrollTop - offsetTop) / sectionHeight) + 1;
        if (activeIndex > 3) {
          setActiveSectionIndex(3);
        } else {
          setActiveSectionIndex(activeIndex);
        }
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

//TESTS copy/paste in useEffect if needed
// console.log('scrollTop', scrollTop);
// console.log('offsetTop', offsetTop);
// console.log('sectionHeight', sectionHeight);
// console.log('activeIndex', ((scrollTop - offsetTop) / sectionHeight) + 1);
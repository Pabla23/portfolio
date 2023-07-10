import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProjectNav({ restData, isLoaded }) {
    // is nav open?
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setMobile] = useState(window.innerWidth < 750);

    // handle nav open/close
    const handleNav = (e) => {
        if (isMobile) {
            e.stopPropagation();
            setIsOpen(!isOpen);
        }
    }

    // close nav on click outside
    useEffect(() => {
        const closeNav = () => {
            setIsOpen(false);
        }
        window.addEventListener('click', closeNav);
        return () => window.removeEventListener('click', closeNav);
    }, []);

    //check if mobile useEffect
    useEffect(() => {
        function handleResize() {
        setMobile(window.innerWidth < 750);
        }
        window.addEventListener('resize', handleResize)
    })

    return (
        isLoaded &&
        <div className="project-nav" onClick={handleNav}>
            <div className='dropdown'>
                <div className='project-name'>{restData[0].title.rendered}</div>
            </div>
            <nav className={isOpen ? 'options open' : 'options'}>
                <NavLink to={`/project/capstone-project`}>Capstone Project</NavLink>
                <NavLink to={`/project/movie-database`}>Movie Database</NavLink>
                <NavLink to={`/project/php-myadmin-interface`}>PHP MyAdmin Interface</NavLink>
                <NavLink to={`/project/tic-tac-toe-game`}>Tic Tac Toe Game</NavLink>
            </nav>
        </div>
    )
}

export default ProjectNav;

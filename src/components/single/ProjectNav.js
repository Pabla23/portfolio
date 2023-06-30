import { NavLink } from "react-router-dom"

function ProjectNav() {

    return (
        <nav className="posts-navigation">
            <NavLink to={`/project/capstone-project`}>Capstone Project</NavLink>
            <NavLink to={`/project/movie-database`}>Movie Database</NavLink>
            <NavLink to={`/project/php-myadmin-interface`}>PHP MyAdmin Interface</NavLink>
            <NavLink to={`/project/tic-tac-toe-game`}>Tic Tac Toe Game</NavLink>
        </nav>
    )
}

export default ProjectNav;

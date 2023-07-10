import { Link } from "react-router-dom";
import { ReactComponent as PrevBtn } from "../../images/left.svg";
import { ReactComponent as NextBtn } from "../../images/right.svg";

function PrevNextProject({project}) {

    const linkClick = () => {
        document.querySelector('html').style.scrollBehavior = 'auto';
        window.scrollTo({ top: 0 });
        document.querySelector('html').style.scrollBehavior = 'smooth';
    };

    return (
        <nav className="prev-next nav">
            {project.previous_post.title &&
                <Link to={`/project/${project.previous_post['slug']}`} className="prev-post" onClick={linkClick}>
                    <PrevBtn/>
                    <span>{project.previous_post['title']}</span>
                </Link>
            }

            {project.next_post.id &&
                <Link to={`/project/${project.next_post['slug']}`} className="next-post" onClick={linkClick}>
                    <NextBtn/>
                    <span>{project.next_post['title']}</span>
                </Link>
            }
        </nav>
    )
}

export default PrevNextProject
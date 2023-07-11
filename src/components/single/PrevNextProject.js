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
        <nav className="prev-next nav" role="navigation">
            {project.previous_post.title &&
                <div className="prev-wrapper">
                    <Link to={`/project/${project.previous_post['slug']}`} className="prev-post" onClick={linkClick}>
                        <PrevBtn/>
                        <span className="sr-only">Previous project</span>
                        <span>{project.previous_post['title']}</span>
                    </Link>
                </div>
            }

            {project.next_post.id &&
                <div className="next-wrapper">
                    <Link to={`/project/${project.next_post['slug']}`} className="next-post" onClick={linkClick}>
                        <NextBtn/>
                        <span className="sr-only">Next project</span>
                        <span>{project.next_post['title']}</span>
                    </Link>
                </div>
            }
        </nav>
    )
}

export default PrevNextProject
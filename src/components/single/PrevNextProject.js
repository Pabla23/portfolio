import { Link } from "react-router-dom";

function PrevNextProject({project}) {

    return (
        <nav className="prev-next nav">
            {project.previous_post.title &&
                <Link to={`/project/${project.previous_post['slug']}`} className="prev-post">Previous: {project.previous_post['title']}</Link>
            }

            {project.next_post.id &&
                <Link to={`/project/${project.next_post['slug']}`} className="next-post">Next: {project.next_post['title']}</Link>
            }
    </nav>
    )
}

export default PrevNextProject
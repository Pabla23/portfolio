import { Link } from "react-router-dom"

// use Link to send the user back to the projects section of the main page


function Project() {

    return (
        <div className="single-project">
            <h1>Project</h1>
            <Link to="/">Back</Link>
        </div>
    )
}

export default Project
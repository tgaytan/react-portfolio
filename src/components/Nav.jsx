import { Link, useLocation } from 'react-router-dom'

function Nav() {
    const currentPage = useLocation().pathname

    return (
        <>
            <nav>
                <Link to="/" className="active-link" aria-current="page">About</Link>
                <Link to="/Portfolio">Portfolio</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Resume">Resume</Link>
            </nav>
        </>
    )
}

export default Nav



{/* <Link to="/" className="nav-link active" aria-current="page" >About Me</Link>
<Link to="/Portfolio" className="nav-link" >Portfolio</Link>
<Link to="/Contact" className="nav-link" >Contact</Link>
<Link to="/Resume" className="nav-link" >Resume</Link> */}
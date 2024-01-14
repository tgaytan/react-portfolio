import { Link, useLocation } from 'react-router-dom'

function Nav() {
    const currentPage = useLocation().pathname

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'} aria-current="page" >About Me</Link>
                        <Link to="/Portfolio" className={currentPage === '/' ? 'nav-link active' : 'nav-link'} >Portfolio</Link>
                        <Link to="/Contact" className={currentPage === '/' ? 'nav-link active' : 'nav-link'} >Contact</Link>
                        <Link to="/Resume" className={currentPage === '/' ? 'nav-link active' : 'nav-link'} >Resume</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav



{/* <Link to="/" className="nav-link active" aria-current="page" >About Me</Link>
<Link to="/Portfolio" className="nav-link" >Portfolio</Link>
<Link to="/Contact" className="nav-link" >Contact</Link>
<Link to="/Resume" className="nav-link" >Resume</Link> */}
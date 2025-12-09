import { Link, NavLink } from "react-router-dom";

export default function Header() {

    const Links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Chi Siamo",
            path: "/about",
        },
        {
            title: "I nostri Prodotti",
            path: "/products",
        },
        
    ]



    return (
        <header className="">
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                           {Links.map((link, index) => {
                            return (
                                <NavLink className="nav-link" aria-current="page" to={link.path}>{link.title}</NavLink>
                            )
                           })}
                            
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
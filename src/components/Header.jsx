import {NavLink} from "react-router-dom"
const Header = ({setSearchTerm}) => {
   return(
    <header>
        <nav className="navbar navbar-expand-lg px-0 py-0" style={{ backgroundColor: "gray",height:"70px"}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFnqYPlAC9O7323ahFVwUQEkz0VUlCoxBbg&s"
                alt="MeetUp"
                width="100"
                height="55"
                className="me-5"
            />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                   <NavLink to="/" className="nav-link"><i>Home</i></NavLink>
                </li>

            </ul>
            </div>
            
             <form className="d-flex ms-auto">
            <input
                type="search"
                className="form-control"
                placeholder="Search by title or tags"
                onChange = {(e) => setSearchTerm(e.target.value)}
            />
            </form>
             

            </div>
        </nav>
    </header>
   )
}
export default Header;
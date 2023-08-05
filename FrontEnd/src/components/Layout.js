import {Link, Outlet} from "react-router-dom"

export default function useLayoutEffect(){
    return <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-brand" >TABS</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <button className="nav-link active" aria-current="page"><Link to="/Home"><b>HOME</b></Link></button>
                        <button className="nav-link" ><Link to="/Items"><b>ITEMS</b></Link></button>
                        <button className="nav-link" ><Link to="/AddItem"><b>ADD ITEM</b></Link></button>
                        <button className="nav-link" ><Link to="/Search"><b>SEARCH</b></Link></button>
                    </div>
                    </div>
                </div>
            </nav>
        <Outlet/>
    </div>
}
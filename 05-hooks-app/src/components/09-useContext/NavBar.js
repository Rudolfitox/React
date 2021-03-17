import React from 'react';
import { Link,NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        
        // <nav>
        //     <ul>
        //         <li>
        //             {/* Remplazar por link para que no haga un refresh el navegador */}
        //             {/* <a href="./">Home</a> */}
        //             <Link to="./">Home</Link>
        //         </li>
                
        //         <li>
        //             <Link to="./about">About</Link>
        //         </li>

        //         <li>
        //             <Link to="./login">Login</Link>
        //         </li>
        //     </ul>
        // </nav>
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        {/* <Link className="nav-item nav-link" to="./">Home</Link>
                        <Link className="nav-item nav-link" to="./about">About</Link>
                        <Link className="nav-item nav-link" to="./login">Login</Link> */}

                        {/* NavLink: Permite establecer una clase cuando se navega en cierta opcion del menu */}
                        <NavLink activeClassName="active" exact className="nav-item nav-link" to="./">Home</NavLink>
                        <NavLink activeClassName="active" exact className="nav-item nav-link" to="./about">About</NavLink>
                        <NavLink activeClassName="active" exact className="nav-item nav-link" to="./login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

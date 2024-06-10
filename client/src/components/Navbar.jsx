import { NavLink } from "react-router-dom"
import "../styles/Navbar.css";

export const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to="/">My Portfolio.</NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/service">Servies</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/Register">Register</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
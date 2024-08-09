import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <React.Fragment>
            <div style={{ display: "flex", backgroundColor: "red", padding: "15px" }}>
                <li style={{ listStyle: "none" }}>
                    <Link ClassName="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li style={{ listStyle: "none", marginLeft: "15px" }}>
                    <Link ClassName="nav-link" to="/contact">Contact</Link>
                </li>
            </div>
        </React.Fragment>)
}
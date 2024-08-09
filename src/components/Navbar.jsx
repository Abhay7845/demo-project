import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <React.Fragment>
            <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
                <div ClassName="container-fluid">
                    <Link ClassName="navbar-brand" to="/home">Navbar</Link>
                    <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span ClassName="navbar-toggler-icon"></span>
                    </button>
                    <div ClassName="collapse navbar-collapse" id="navbarNav">
                        <ul ClassName="navbar-nav">
                            <li ClassName="nav-item">
                                <Link ClassName="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li ClassName="nav-item">
                                <Link ClassName="nav-link" to="/contact">Features</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>)
}
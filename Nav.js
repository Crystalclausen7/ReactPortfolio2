import React from "react";
import "./Nav";

export default class Nav extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">Crystal Clausen</a><button 
                        className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-whie rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars"></i></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                 href="#about">About</a></li>
                                 <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                 href="#portfolio">Portfolio</a></li>
                                 <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                 href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
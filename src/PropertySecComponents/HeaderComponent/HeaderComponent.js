import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './HeaderComponent.css';

class HeaderComponents extends Component {

    render(){
        return (
            <div className="header">
                <div className="logo">
                    <NavLink className="link" exact to="/" title="Bayut Property Portal"/>
                </div>
                <nav className="bussiness-links">
                    <NavLink className="nav-links" exact to="/" title="Bayut Blog">Blog</NavLink>
                    <NavLink className="nav-links" exact to="/" title="Bayut Area Guide">Area Guide</NavLink>
                    <NavLink className="nav-links" exact to="/" title="Bayut Agents">Agents</NavLink>
                    <NavLink className="nav-links" exact to="/" title="Bayut Market Intelligence">Market Intelligence</NavLink>
                    <NavLink className="nav-links" exact to="/" title="Arbi">Arabic</NavLink>
                    <button className="header-login">Login</button>
                </nav>
            </div>
        );
    }
}

export default HeaderComponents;
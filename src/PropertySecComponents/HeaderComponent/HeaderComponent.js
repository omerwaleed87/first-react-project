import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import HeaderComponentStyle from './HeaderComponent.css';

class HeaderComponents extends Component {

    render(){
        return (
            <div className={HeaderComponentStyle.header}>
                <div className={HeaderComponentStyle.logo}>
                    <NavLink className={HeaderComponentStyle.link} exact to="/" title="Bayut Property Portal"/>
                </div>
                <nav className={HeaderComponentStyle.bussinessLinks}>
                    <NavLink className={HeaderComponentStyle.navLinks} exact to="/" title="Bayut Blog">Blog</NavLink>
                    <NavLink className={HeaderComponentStyle.navLinks} exact to="/" title="Bayut Area Guide">Area Guide</NavLink>
                    <NavLink className={HeaderComponentStyle.navLinks} exact to="/" title="Bayut Agents">Agents</NavLink>
                    <NavLink className={HeaderComponentStyle.navLinks} exact to="/" title="Bayut Market Intelligence">Market Intelligence</NavLink>
                    <NavLink className={HeaderComponentStyle.navLinks} exact to="/" title="Arbi">Arabic</NavLink>
                    <button className={HeaderComponentStyle.headerLogin}>Login</button>
                </nav>
            </div>
        );
    }
}

export default HeaderComponents;
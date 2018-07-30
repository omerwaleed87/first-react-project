import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import SearchHeaderComponentStyle from './SearchHeaderComponent.css';

class SearchHeaderComponent extends Component {

    render(){
        return (
            <div className={SearchHeaderComponentStyle.header}>
                <div className={SearchHeaderComponentStyle.logo}>
                    <NavLink className={SearchHeaderComponentStyle.link} exact to="/" title="Bayut Property Portal"/>
                </div>
                <nav className={SearchHeaderComponentStyle.bussinessLinks}>
                    <NavLink className={SearchHeaderComponentStyle.navLinks} exact to="/" title="Bayut Blog">Blog</NavLink>
                    <NavLink className={SearchHeaderComponentStyle.navLinks} exact to="/" title="Arbi">Arabic</NavLink>
                    <button className={SearchHeaderComponentStyle.headerLogin}>Login</button>
                </nav>
            </div>
        );
    }
}

export default SearchHeaderComponent;
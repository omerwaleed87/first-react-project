import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import './PopularSearchComponent.css';

class PopularSearchComponent extends Component{

    render(){
        return (
            <div className="popular-search">
                <div className="heading">Popular Areas in UAE</div>
                <div className="popular-container">
                    <div className="popular-for-sale">
                        <h3>Popular places for sale</h3>
                        <ul className="popular-search-ul">
                            <li>
                                <NavLink to="/:purpose/:prop_type/:location/" title="For sale houses in Lahore">For sale houses in Lahore</NavLink>
                            </li>
                            <li>
                                <NavLink to="/:purpose/:prop_type/:location/" title="For sale houses in Lahore">For sale houses in Lahore</NavLink>
                            </li>
                            <li>
                                <NavLink to="/:purpose/:prop_type/:location/" title="For sale houses in Lahore">For sale houses in Lahore</NavLink>
                            </li>
                            <li>
                                <NavLink to="/:purpose/:prop_type/:location/" title="For sale houses in Lahore">For sale houses in Lahore</NavLink>
                            </li>
                            <li>
                                <NavLink to="/:purpose/:prop_type/:location/" title="For sale houses in Lahore">For sale houses in Lahore</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="popular-to-rent">
                        <h3>Popular places to rent</h3>
                        <ul className="popular-search-ul-2">
                            <li>
                                <NavLink to="/:purpose/:prop_type/:location/" title="For sale houses in Lahore">For sale houses in Lahore</NavLink>
                            </li>
                            <li>
                                <NavLink to="/:purpose/:prop_type/:location/" title="For sale houses in Lahore">For sale houses in Lahore</NavLink>
                            </li>
                            <li>
                                <NavLink to="/:purpose/:prop_type/:location/" title="For sale houses in Lahore">For sale houses in Lahore</NavLink>
                            </li>
                            <li>
                                <NavLink to="/:purpose/:prop_type/:location/" title="For sale houses in Lahore">For sale houses in Lahore</NavLink>
                            </li>
                            <li>
                                <NavLink to="/:purpose/:prop_type/:location/" title="For sale houses in Lahore">For sale houses in Lahore</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopularSearchComponent;
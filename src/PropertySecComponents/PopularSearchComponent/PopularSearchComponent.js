import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import PopularSearchComponentStyle from './PopularSearchComponent.css';

class PopularSearchComponent extends Component{

    render(){
        return (
            <div className={PopularSearchComponentStyle.popularSearch}>
                <div className={PopularSearchComponentStyle.heading}>Popular Areas in UAE</div>
                <div className={PopularSearchComponentStyle.popularContainer}>
                    <div className={PopularSearchComponentStyle.popularForSale}>
                        <h3>Popular places for sale</h3>
                        <ul className={PopularSearchComponentStyle.popularSearchUl}>
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
                    <div className={PopularSearchComponentStyle.popularToRent}>
                        <h3>Popular places to rent</h3>
                        <ul className={PopularSearchComponentStyle.popularSearchUl}>
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
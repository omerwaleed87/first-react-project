import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import SearchListingStyles from "../SearchListingComponent.css";

class Features extends Component{

    render(){
        if(typeof this.props.url !== "undefined"){
            return(
                <div className={SearchListingStyles.listings}>
                    <NavLink to={this.props.url[0]} className={SearchListingStyles.listingsContainer}>
                        <div className={SearchListingStyles.image}>
                            <div className={SearchListingStyles.imageContainer}>
                                <img className={SearchListingStyles.containerImage} src={this.props.image[0]} alt=""></img>
                            </div>
                        </div>
                        <div className={SearchListingStyles.features}>
                            <div className={SearchListingStyles.price}>AED {this.props.price}</div>
                            <div className={SearchListingStyles.location}>
                                {this.props.locationData.locationTitle}, {this.props.locationData.parentTitle}
                            </div>
                            <div className={SearchListingStyles.type}>{this.props.type.title}</div>
                            <div className={SearchListingStyles.description}>{this.props.description}</div>
                        </div>
                    </NavLink>
                </div>
            )
        }
        return null;
    }
}

export default Features;
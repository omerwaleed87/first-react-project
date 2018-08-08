import React, { Component } from "react";

import SearchListingStyles from "../SearchListingComponent.css";

class Features extends Component{

    render(){
        return(
            <div className={SearchListingStyles.listings}>
                <div className={SearchListingStyles.listingsContainer}>
                    <div className={SearchListingStyles.image}>
                        <div className={SearchListingStyles.imageContainer}>
                            <img className={SearchListingStyles.containerImage} src={this.props.image[0]}></img>
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
                </div>
            </div>
        )
    }
}

export default Features;
import React, { Component } from "react";
import { connect } from 'react-redux';

import SearchListingStyles from "./SearchListingComponent.css";

class SearchListingComponent extends Component{
    render(){
        return(
            <div className={SearchListingStyles.searchListings}>
                <div className={SearchListingStyles.container}>

                    <div className={SearchListingStyles.listings}>
                        <div className={SearchListingStyles.listingsContainer}>
                            <div className={SearchListingStyles.image}>
                                <div className={SearchListingStyles.imageContainer}>
                                    
                                </div>
                            </div>
                            <div className={SearchListingStyles.features}>
                                <div className={SearchListingStyles.price}>100000 AED</div>
                                <div className={SearchListingStyles.location}>Dubai Marin, UAE</div>
                                <div className={SearchListingStyles.description}>Hello this is my first property</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default SearchListingComponent;
import React, { Component } from "react";
import { connect } from 'react-redux';

import * as ListingActionCreator from './Store/Action';
import SearchListingStyles from "./SearchListingComponent.css";
import ListingFeaturesTemplate from "./Template/Features";

class SearchListingComponent extends Component{

    componentWillMount(nextState, b){
        // if(typeof this.props.listings[0] === "undefined")
            this.props.mountListings(this.props.parameters);
    }

    componentWillUpdate(nextState, b){
        if(nextState.parameters.purposeId !== this.props.parameters.purposeId
            || nextState.parameters.propertyTypeId !== this.props.parameters.propertyTypeId
            || nextState.parameters.location !== this.props.parameters.location 
            || nextState.parameters.page !== this.props.parameters.page)
                this.props.mountListings(nextState.parameters);
        
        return true;
    }

    renderListings = () => {
        const listingData = this.props.listings;
        let listingArray = [];
        for (let x in listingData){
            listingArray.push(listingData[x]);
        }
        return listingArray.map((val, key) => {
            return <ListingFeaturesTemplate price={val.price}
                      locationData={val.locationdetail}
                      description={val.description}
                      image={val.imagedetail}
                      type={val.typeDetail}
                      url={val.url}
                      key={key}>
                   </ListingFeaturesTemplate>
        });
    }

    render(){
        if(typeof this.props.listings[0] !== "undefined"){
            const listingTemplateData = this.renderListings();
            return(
                <div className={SearchListingStyles.searchListings}>
                    <div className={SearchListingStyles.container}>
                        {listingTemplateData}
                    </div>
                </div>
            )
        }
        return null;
    }
}

const mapStateToProps = state => {
    if(typeof state !== "undefined"){
        return {
            listings : state.listings,
            parameters : state.parameters,
        };
    }
}

const mapDispatchToProps = dispatch => {
    return {
        mountListings : (stateParams) => dispatch(ListingActionCreator.getListingsOnMount(stateParams)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListingComponent);
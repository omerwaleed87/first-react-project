import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import * as DetailsActionCreator from "./Store/Action";
import PropertyDetailsComponentStyle from './PropertyDetailsComponent.css';

class PropertyDetailsComponent extends Component{
    
    componentDidMount(){
        // const route = {...this.props.detailsRouteParams};
        // this.props.mountDetails(route, this.props.parameters);
    }

    componentWillUpdate(nextState, b){
        if(typeof nextState.propertyDetail.details === "undefined"){
            const route = {...this.props.detailsRouteParams};
            this.props.mountDetails(route, this.props.parameters);
        }
        else if(typeof nextState.propertyDetail.details !== "undefined" && typeof this.props.detailsRouteParams.match.params.selector !== "undefined"){
            if(nextState.propertyDetail.details[0].id !== this.props.detailsRouteParams.match.params.selector){
                const route = {...this.props.detailsRouteParams};
                this.props.mountDetails(route, nextState.parameters);
            }
        }
    }

    render(){
        if(typeof this.props.propertyDetail.details !== "undefined"){
            return(
                <div className={PropertyDetailsComponentStyle.detailContainer}>
                    <div className={PropertyDetailsComponentStyle.imageContainer}>
                        <img src={this.props.propertyDetail.details[0].imagedetail[0]}/>
                    </div>
                    <div className={PropertyDetailsComponentStyle.details}>
                        <div className={PropertyDetailsComponentStyle.price}>
                            {this.props.propertyDetail.details[0].price} AED
                        </div>
                        <div className={PropertyDetailsComponentStyle.area}>
                            {this.props.propertyDetail.details[0].area} Square meters
                        </div>
                        <div className={PropertyDetailsComponentStyle.beds}>
                            {this.props.propertyDetail.details[0].beds} beds
                        </div>
                        <div className={PropertyDetailsComponentStyle.baths}>
                            {this.props.propertyDetail.details[0].baths} baths
                        </div>
                        <div className={PropertyDetailsComponentStyle.location}>
                            {this.props.propertyDetail.details[0].locationdetail.locationTitle}, {this.props.propertyDetail.details[0].locationdetail.parentTitle}
                        </div>
                        <div className={PropertyDetailsComponentStyle.type}>
                            {this.props.propertyDetail.details[0].typeDetail.title}
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = state => {
    if(typeof state !== "undefined"){
        return {
            parameters : state.parameters,
            propertyDetail : state.propertyDetail
        };
    }
    return {
        parameters : {},
        propertyDetail : {},
    };
}

const mapDispatchToProps = dispatch => {
    return {
        mountDetails : (route, params) => dispatch(DetailsActionCreator.getListingDetailsOnMount(route, params)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetailsComponent);
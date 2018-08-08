import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import * as BreadCrumbActionCreator from './Store/Action';
import BreadcrumbComponentStyle from './BreadcrumbComponent.css';

class BreadcrumbComponent extends Component {

    componentDidMount(){
        this.props.mountBreadcrumbTitle(this.props.parameters);
    }

    componentWillUpdate(nextState, b){
        if(nextState !== "undefined" && this.props !== "undefined"){
            if(nextState.parameters.purposeId !== this.props.parameters.purposeId
                || nextState.parameters.propertyTypeId !== this.props.parameters.propertyTypeId
                || nextState.parameters.location !== this.props.parameters.location)
                this.props.mountBreadcrumbTitle(nextState.parameters);
        }
        return false;
    }

    render(){
        
        if(this.props.breadcrumb.breadcrumb){
            let breadcrumblocs = [];
            for(let x in this.props.breadcrumb.breadcrumb.locBreadcrumb){
                breadcrumblocs.push(this.props.breadcrumb.breadcrumb.locBreadcrumb[x]);
            }
            breadcrumblocs.reverse();
            return (
                <div className={BreadcrumbComponentStyle.breadcrumb}>
                    <div className={BreadcrumbComponentStyle.container}>
                        <div className={BreadcrumbComponentStyle.breadcrumbs}>
                            {breadcrumblocs.map((value, key) => {
                                return <div key={key} className={BreadcrumbComponentStyle.breadcrumbaArrow}>
                                            <NavLink to={value.url} title={value.locationTitle}>
                                                {value.title}
                                            </NavLink>
                                            <i> > </i>
                                       </div>    
                            })}
                        </div>
                        <div className={BreadcrumbComponentStyle.breadcrumbTitle}>
                            {this.props.breadcrumb.breadcrumb.breadcrumbTitle}
                        </div>
                        <div className={BreadcrumbComponentStyle.listingCounts}>
                            "Listings Count"
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
            breadcrumb : state.breadcrumb
        };
    }
    else
        return {};
}

const mapDispatchToProps = dispatch => {
    return {
        mountBreadcrumbTitle : (stateParams) => dispatch(BreadCrumbActionCreator.getBreadCrumbTitleOnMount(stateParams)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbComponent);
import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import * as BreadCrumbActionCreator from './Store/Action';
import BreadcrumbComponentStyle from './BreadcrumbComponent.css';

class BreadcrumbComponent extends Component {

    componentDidMount(){
        this.props.mountBreadcrumbTitle();
    }

    componentWillUpdate(nextState, b){
        if(nextState !== "undefined" && this.props !== "undefined"){
            if(nextState.parameters.purposeId !== this.props.parameters.purposeId
                || nextState.parameters.propertyTypeId !== this.props.parameters.propertyTypeId)
                this.props.mountBreadcrumbTitle();
        }
        return false;
    }

    render(){
        
        if(this.props.breadcrumb.breadcrumb){
            let breadcrumblocs = [];
            for(let x in this.props.breadcrumb.breadcrumb.locBreadcrumb){
                breadcrumblocs.push(this.props.breadcrumb.breadcrumb.locBreadcrumb[x]);
            }
            return (
                <div className={BreadcrumbComponentStyle.breadcrumb}>
                    <div className={BreadcrumbComponentStyle.container}>
                        <div className={BreadcrumbComponentStyle.breadcrumbs}>
                            {breadcrumblocs.map((value, key) => {
                                return <NavLink to={value.url} title={value.locationTitle} key={key}>
                                        {value.title}
                                    </NavLink>    
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
}

const mapDispatchToProps = dispatch => {
    return {
        mountBreadcrumbTitle : () => dispatch(BreadCrumbActionCreator.getBreadCrumbTitleOnMount()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbComponent);
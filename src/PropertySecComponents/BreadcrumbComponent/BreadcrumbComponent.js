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
            return (
                <div className={BreadcrumbComponentStyle.breadcrumb}>
                    <div className={BreadcrumbComponentStyle.container}>
                        <div className={BreadcrumbComponentStyle.breadcrumbs}>
                            <NavLink to={this.props.breadcrumb.breadcrumb.locBreadcrumb[0].url} title={this.props.breadcrumb.breadcrumb.locBreadcrumb[0].locationTitle}>
                                {this.props.breadcrumb.breadcrumb.locBreadcrumb[0].title}
                            </NavLink>
                            <NavLink to={this.props.breadcrumb.breadcrumb.locBreadcrumb[1].url} title={this.props.breadcrumb.breadcrumb.locBreadcrumb[1].locationTitle}>
                                {this.props.breadcrumb.breadcrumb.locBreadcrumb[1].title}
                            </NavLink>
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
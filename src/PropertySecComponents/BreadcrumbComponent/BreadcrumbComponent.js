import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import * as BreadCrumbActionCreator from './Store/Action';
import BreadcrumbComponentStyle from './BreadcrumbComponent.css';

class BreadcrumbComponent extends Component {

    currentPage = "";

    componentDidMount(nextState){
        this.props.mountBreadcrumbTitle(this.props.parameters, this.props.searchRouteParams);
    }

    componentWillUpdate(nextState, b){
        if(typeof nextState.searchRouteParams.match.params.selector !== "undefined")
            this.currentPage = "detail";
        else
            this.currentPage = "search";
        
        if(nextState !== "undefined" && this.props !== "undefined"){
            if(nextState.parameters.purposeId !== this.props.parameters.purposeId
                || nextState.parameters.propertyTypeId !== this.props.parameters.propertyTypeId
                || nextState.parameters.location !== this.props.parameters.location)
                this.props.mountBreadcrumbTitle(nextState.parameters, nextState.searchRouteParams);
        }
    }

    getBreadcrumbHeadline = () => {
        let content = "";
        if(this.currentPage === "search"){
            if(typeof this.props.listings[0] !== "undefined"){
                content = <div className={BreadcrumbComponentStyle.listingCounts}>
                                {Object.keys(this.props.listings).length} Properties
                          </div>;
            }
            else{
                content = <div className={BreadcrumbComponentStyle.listingCounts}>
                                0 Properties
                          </div>
            }
        }
        else{
            if(typeof this.props.propertyDetail.listing !== "undefined"){
                content = <div className={BreadcrumbComponentStyle.listingCounts}>
                                {this.props.propertyDetail.listing[0].title}
                          </div>
            }
        }
        return content;
    }

    render(){
        const getBreadcrumbHeadline = this.getBreadcrumbHeadline();
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
                        {getBreadcrumbHeadline}
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
            breadcrumb : state.breadcrumb,
            listings : state.listings,
            propertyDetail : state.propertyDetail
        };
    }
    else
        return {};
}

const mapDispatchToProps = dispatch => {
    return {
        mountBreadcrumbTitle : (stateParams, searchRouteParams) => dispatch(BreadCrumbActionCreator.getBreadCrumbTitleOnMount(stateParams,searchRouteParams)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbComponent);
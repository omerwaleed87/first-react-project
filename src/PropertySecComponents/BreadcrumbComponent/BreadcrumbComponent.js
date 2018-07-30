import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import * as BreadCrumbActionCreator from './Store/Action';
import BreadcrumbComponentStyle from './BreadcrumbComponent.css';

class BreadcrumbComponent extends Component {

    componentWillMount(){
        this.props.mountBreadcrumbTitle();
    }

    componentWillUpdate(){
        this.props.mountBreadcrumbTitle();
    }

    shouldComponentUpdate(nextState, b){
        if(nextState.breadcrumb.title !== this.props.breadcrumb.title || nextState.parameters.purposeId !== this.props.parameters.purposeId)
            return true;
        return false;
    }

    render(){
        return (
            <div className={BreadcrumbComponentStyle.breadcrumb}>
                <div className={BreadcrumbComponentStyle.container}>
                    <div className={BreadcrumbComponentStyle.breadcrumbTitle}>
                        {this.props.breadcrumb.title}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    if(typeof state !== "undefined"){
        return {
            parameters : state.parameters,
            breadcrumb : state.breadcrumb
        };
    }
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        mountBreadcrumbTitle : () => dispatch(BreadCrumbActionCreator.getBreadCrumbTitleOnMount()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbComponent);
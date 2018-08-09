import React, {Component} from "react";

import { connect } from 'react-redux';

import * as CacheActionCreator from "./Store/Action";

class CacheComponent extends Component{
    componentDidMount(){
        if(typeof this.props.locations[0] === "undefined")
            this.props.getLocationCacheOnMount(this.props.searchRouteParams);

        if(typeof this.props.purpose[0] === "undefined")
            this.props.getPuposeCacheOnMount(this.props.searchRouteParams);

        if(typeof this.props.types[0] === "undefined"){
            this.props.getTypesCacheOnMount(this.props.searchRouteParams);
        }
    }

    render(){
        return null;
    }
}

const mapStateToProps = state => {
    if(typeof state !== "undefined"){
        return {
            locations : state.locations,
            purpose : state.purpose,
            types : state.types,
        };
    }
    // return{};
}

const mapDispatchToProps = dispatch => {
    return {
        getLocationCacheOnMount : (routeParams) => dispatch(CacheActionCreator.getLocationCacheOnMount(routeParams)),
        getPuposeCacheOnMount : (routeParams) => dispatch(CacheActionCreator.getPuposeCacheOnMount(routeParams)),
        getTypesCacheOnMount : (routeParams) => dispatch(CacheActionCreator.getTypesCacheOnMount(routeParams)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CacheComponent);
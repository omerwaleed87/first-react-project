import React, {Component} from "react";
import { connect } from 'react-redux';

import * as AdvSearchBoxActionCreator from "./Store/Action";
import * as PropertyTypes from "../../CachedContent/Types";
import * as PurposeOptions from "../../CachedContent/Purpose";

import AdvanceSearchBoxStyle from "./AdvanceSearchBoxComponent.css";

class AdvanceSearchBoxComponent extends Component{

    searchBoxInputStyles = () => {
        let searchBoxInput = [];
        searchBoxInput["uperInputs"] = [];
        searchBoxInput["uperInputs"]["purposeInputMargin"] = [AdvanceSearchBoxStyle.purpose, AdvanceSearchBoxStyle.inputMargin];
        searchBoxInput["uperInputs"]["locationInputMargin"] = [AdvanceSearchBoxStyle.location, AdvanceSearchBoxStyle.inputMargin];
        searchBoxInput["uperInputs"]["typeInputMargin"] = [AdvanceSearchBoxStyle.type, AdvanceSearchBoxStyle.inputMargin];
        searchBoxInput["uperInputs"]["priceInputMargin"] = [AdvanceSearchBoxStyle.price, AdvanceSearchBoxStyle.inputMargin];

        searchBoxInput["lowerInputs"] = [];
        searchBoxInput["lowerInputs"]["bedsInputMargin"] = [AdvanceSearchBoxStyle.beds, AdvanceSearchBoxStyle.inputMargin];
        searchBoxInput["lowerInputs"]["areaInputMargin"] = [AdvanceSearchBoxStyle.area, AdvanceSearchBoxStyle.inputMargin];
        searchBoxInput["lowerInputs"]["bathsInputMargin"] = [AdvanceSearchBoxStyle.baths, AdvanceSearchBoxStyle.inputMargin];
        searchBoxInput["lowerInputs"]["keywordInputMargin"] = [AdvanceSearchBoxStyle.keyword, AdvanceSearchBoxStyle.inputMargin];
        searchBoxInput["lowerInputs"]["agentInputMargin"] = [AdvanceSearchBoxStyle.agent, AdvanceSearchBoxStyle.inputMargin];
        
        return searchBoxInput;
    }

    componentWillMount(nextState, b){
        const routeParams = {...this.props.searchRouteParams};
        this.props.mountRouteParamsToSearchFilters(routeParams, this.props.types, this.props.locations);
    }

    componentWillUpdate(nextState, b){
        if(nextState.searchRouteParams.location.pathname !== this.props.searchRouteParams.location.pathname){
            const routeParams = {...nextState.searchRouteParams};
            this.props.mountRouteParamsToSearchFilters(routeParams, nextState.types, nextState.locations);
        }
    }

    pushTypesCache = () => {
        let cachedTypes = [];
        const typeList = {...this.props.types};
        for(let x in typeList){
            cachedTypes.push(typeList[x]);
        }
        return cachedTypes;
    }

    pushLocationCache = () => {
        let cachedLocation = [];
        const locationList = {...this.props.locations};
        for(let x in locationList){
            cachedLocation.push(locationList[x]);
        }
        return cachedLocation;
    }

    render(){
        
        if(typeof this.props.parameters !== "undefined"){
            const searchBoxInput = this.searchBoxInputStyles();
            let cachedPropType = typeof this.props.types !== "undefined" ? this.pushTypesCache() : {};
            let cachedLocation = (typeof this.props.locations !== "undefined") ? this.pushLocationCache() : {};
            
            return (
                <div className={AdvanceSearchBoxStyle.advSearchBox}>
                    <div className={AdvanceSearchBoxStyle.container}>
                        <div className={AdvanceSearchBoxStyle.first}>
                            <select onChange={(event, routes) => this.props.onChangePurpose(event, this.props.searchRouteParams)} className={searchBoxInput["uperInputs"]["purposeInputMargin"].join(" ")}>
                                {PurposeOptions.purpose.map((x,y) => <option value={x.key} key={x.key} selected={x.key === this.props.parameters.purposeId ? "selected" : ""}>{x.value}</option>)}
                            </select>
                            <select onChange={(event, routes) => this.props.onChangeLocationFilter(event, this.props.searchRouteParams, this.props.locations)} className={searchBoxInput["uperInputs"]["locationInputMargin"].join(" ")}>
                                {cachedLocation.map((x,y) => <option value={x.id} key={x.id} selected={x.id == this.props.parameters.locationId ? "selected" : ""}>{x.title}</option>)}
                            </select>
                            <select onChange={(event, routes) => this.props.onChangePropType(event, this.props.searchRouteParams, this.props.types)} className={searchBoxInput["uperInputs"]["typeInputMargin"].join(" ")}>
                                {cachedPropType.map((x,y) => <option value={x.id} key={x.id} selected={x.id == this.props.parameters.propertyTypeId ? "selected" : ""}>{x.title}</option>)}
                            </select>
                            <input className={searchBoxInput["uperInputs"]["priceInputMargin"].join(" ")} type="text" value={""} placeholder="Price"/>
                        </div>
                        <div className={AdvanceSearchBoxStyle.second}>
                            <input className={searchBoxInput["lowerInputs"]["bedsInputMargin"].join(" ")} type="text" value={""} placeholder="Beds"/>
                            <input className={searchBoxInput["lowerInputs"]["areaInputMargin"].join(" ")} type="text" value={""} placeholder="Area"/>
                            <input className={searchBoxInput["lowerInputs"]["bathsInputMargin"].join(" ")} type="text" value={""} placeholder="Baths"/>
                            <input className={searchBoxInput["lowerInputs"]["keywordInputMargin"].join(" ")} type="text" value={""} placeholder="Keyword"/>
                            <input className={searchBoxInput["lowerInputs"]["agentInputMargin"].join(" ")} type="text" value={""} placeholder="Agent"/>
                        </div>
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
            parameters : state.parameters,
            locations : state.locations,
            types : state.types
        };
    }
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        mountRouteParamsToSearchFilters : (routeParams, types, locations) => dispatch(AdvSearchBoxActionCreator.getSearchParamsOnMount(routeParams, types, locations)),
        onChangePurpose : (event, routes) => dispatch(AdvSearchBoxActionCreator.changePurpose(event, routes)), 
        onChangePropType : (event, routes, types) => dispatch(AdvSearchBoxActionCreator.changePropertyType(event, routes, types)), 
        onChangeLocationFilter : (event, routes, location) => dispatch(AdvSearchBoxActionCreator.changeLocationFilter(event, routes, location)), 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvanceSearchBoxComponent);
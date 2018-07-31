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

    componentWillMount(){
        const routeParams = {...this.props.searchRouteParams};
        this.props.mountRouteParamsToSearchFilters(routeParams);
    }

    render(){
        if(typeof this.props.parameters !== "undefined"){
            const searchBoxInput = this.searchBoxInputStyles();
            return (
                <div className={AdvanceSearchBoxStyle.advSearchBox}>
                    <div className={AdvanceSearchBoxStyle.container}>
                        <div className={AdvanceSearchBoxStyle.first}>
                            <select onChange={(event, routes) => this.props.onChangePurpose(event, this.props.searchRouteParams)} className={searchBoxInput["uperInputs"]["purposeInputMargin"].join(" ")}>
                                {PurposeOptions.purpose.map((x,y) => <option value={x.key} key={x.key} selected={x.key === this.props.parameters.purposeId ? "selected" : ""}>{x.value}</option>)}
                            </select>
                            <input className={searchBoxInput["uperInputs"]["locationInputMargin"].join(" ")} type="text" value={""} placeholder="Location"/>
                            <select onChange={(event, routes) => this.props.onChangePropType(event, this.props.searchRouteParams)} className={searchBoxInput["uperInputs"]["typeInputMargin"].join(" ")}>
                                {PropertyTypes.types.map((x,y) => <option value={x.key} key={x.key} selected={x.key === this.props.parameters.propertyTypeId ? "selected" : ""}>{x.value}</option>)}
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
            parameters : state.parameters
        };
    }
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        mountRouteParamsToSearchFilters : (routeParams) => dispatch(AdvSearchBoxActionCreator.getSearchParamsOnMount(routeParams)),
        onChangePurpose : (event, routes) => dispatch(AdvSearchBoxActionCreator.changePurpose(event, routes)), 
        onChangePropType : (event, routes) => dispatch(AdvSearchBoxActionCreator.changePropertyType(event, routes)), 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvanceSearchBoxComponent);
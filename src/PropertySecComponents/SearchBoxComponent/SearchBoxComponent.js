import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Type from "../../CachedContent/Types";

import SearchBoxStyle from './SearchBoxComponent.css';

class SearchBoxComponent extends Component {

    locationCacheFlag = false;
    typeCacheFlag = false;

    state = {
        parameters : {
            purposeId : 1,
            location : "",
            propertyType : "",
            propertyTypeId : 1,
            price : "",
            beds : "",
        },
        purpose : {
            sale : 1,
            rent : 0
        },
        moreFilter : false,
        showTextFilter : "More ",
    };

    onChangePurpose = (purposeID) => {
        const searhcBoxState = {...this.state};
        const searchBoxParams = {...searhcBoxState.parameters};
        const searchBoxPurposeState = {...searhcBoxState.purpose};
        if(searchBoxParams.purposeId !== purposeID){
            searchBoxParams.purposeId = purposeID;
            this.setState({parameters : searchBoxParams});
        }
        searchBoxPurposeState.sale = purposeID === 1 ? 1 : 0;
        searchBoxPurposeState.rent = purposeID === 2 ? 1 : 0;
        this.setState({parameters : searchBoxParams});
        this.setState({purpose : searchBoxPurposeState});
    }
    onChangeLocationFilter = (event) => {

        const searchBoxParams = {...this.state.parameters};
        const cachedTypes = {...this.props.locations};
        let pushLocations = [];

        for(let x in cachedTypes){
            pushLocations.push(cachedTypes[x]);
        }

        pushLocations.map((val, key) => {
            if(event.target.value == val.id){
                searchBoxParams.location = val.key;
            }
            return val;
        });
        this.setState({parameters : searchBoxParams});
    }
    onChangePropertyTypeFilter = (event) => {
        const searchBoxParams = {...this.state.parameters};
        const cachedTypes = {...this.props.types};
        let pushTypes = [];

        for(let x in cachedTypes){
            pushTypes.push(cachedTypes[x]);
        }

        pushTypes.map((val, key) => {
            if(event.target.value == val.id){
                searchBoxParams.propertyType = val.url;
                searchBoxParams.propertyTypeId = val.id;
            }
            return val;
        });
        this.setState({parameters : searchBoxParams});
    }
    onChangePriceFilter = (event) => {
        const searchBoxParams = {...this.state.parameters};
        searchBoxParams.price = event.target.value;
        this.setState({parameters : searchBoxParams});
    }
    onChangeBedsFilter = (event) => {
        const searchBoxParams = {...this.state.parameters};
        searchBoxParams.beds = event.target.value;
        this.setState({parameters : searchBoxParams});
    }
    resetFilter = () => {
        const searchBoxParams = {...this.state.parameters};
        let isChangedFlag = false;
        for(let key in searchBoxParams){
            if(key !== "purposeId" && searchBoxParams[key] !== ""){
                searchBoxParams[key] = "";
                isChangedFlag = true;
            }
        }
        if(isChangedFlag)
            this.setState({parameters : searchBoxParams});
    }
    getActivePurposeTab = () => {
        let tabArray = [];
        const purposeState = {...this.state.purpose};
        if(purposeState.sale){
            tabArray['sale'] = [SearchBoxStyle.purpose, SearchBoxStyle.purposeBtnActive];
            tabArray['rent'] = [SearchBoxStyle.purpose, ""];
        }
        else{
            tabArray['sale'] = [SearchBoxStyle.purpose, ""];
            tabArray['rent'] = [SearchBoxStyle.purpose, SearchBoxStyle.purposeBtnActive];
        }
        return tabArray;
    }
    openMoreFilter = () => {
        if(!this.state.moreFilter)
            this.setState({showTextFilter : "Less "});
        else
            this.setState({showTextFilter : "More "});
        this.setState({moreFilter : !this.state.moreFilter});
    }
    searchBoxSubmitHandler = () => {
        const stateParams = {...this.state.parameters};
        let queryParams = [];
        let urlSegment = [
            "for-sale",
            "commercial-properties",
            "dubai",
        ]

        for(let keys in stateParams){
            if( keys === "purposeId")
                urlSegment[0] = (stateParams[keys] === 2) ? "to-rent" : urlSegment[0];
            if( keys === "propertyType")
                urlSegment[1] = stateParams[keys] !== "" ? stateParams[keys] : urlSegment[1];
            if( keys === "location")
                urlSegment[2] = stateParams[keys] !== "" ? stateParams[keys] : urlSegment[2];
            if( keys === "price" && stateParams[keys] !== "")
                queryParams.push('price='+ stateParams[keys]);
            if( keys === "beds" && stateParams[keys] !== "")
                queryParams.push('beds='+ stateParams[keys]);
        }
        const url = urlSegment.join("/") +"/";
        let query = "";
        if(queryParams.length > 0){
            query = "?"+ (queryParams.length > 1 ? queryParams.join("&") : queryParams[0]);
        }
        const targetUrl = url + query;
        this.props.page.history.push(targetUrl);
    }

    pushTypesCache = () => {
        let cachedTypes = [];
        const typeList = {...this.props.types};
        this.typeCacheFlag = true;
        for(let x in typeList){
            cachedTypes.push(typeList[x]);
        }

        return cachedTypes;
    }

    pushLocationCache = () => {
        let cachedLocs = [];
        const typeList = {...this.props.locations};
        this.locationCacheFlag = true;
        for(let x in typeList){
            cachedLocs.push(typeList[x]);
        }

        return cachedLocs;
    }

    render(){
        const activePurposeTab = this.getActivePurposeTab();
        let resetFilter = [SearchBoxStyle.searchboxOptions, SearchBoxStyle.resetFilters];
        let cachedPropType = typeof this.props.types !== "undefined" ? this.pushTypesCache() : {};
        let cachedLocation = typeof this.props.locations !== "undefined" ? this.pushLocationCache() : {};
        
        return (
            <div className={SearchBoxStyle.search}>
                <div className={SearchBoxStyle.searchboxContainer}>
                    <div className={SearchBoxStyle.searchboxHeading}>
                        <h1>Search properties for sale and to rent in the UAE</h1>
                    </div>
                    <div className={SearchBoxStyle.purposeBtn}>
                        <button onClick={() => this.onChangePurpose(1)} className={activePurposeTab['sale'].join(' ')}>For Sale</button>
                        <button onClick={() => this.onChangePurpose(2)} className={activePurposeTab['rent'].join(' ')}>To Rent</button>
                    </div>
                    <div className={SearchBoxStyle.searchboxFilters}>
                        <div className={SearchBoxStyle.first}>
                            <select onChange={(event) => this.onChangeLocationFilter(event)} className={SearchBoxStyle.locationFilter}>
                                {this.locationCacheFlag ? cachedLocation.map((x,y) => <option value={x.id} key={x.id}>{x.title}</option>) : ""}
                            </select>
                            <button className={SearchBoxStyle.searchboxButton} onClick={() => this.searchBoxSubmitHandler()}>
                                Find
                            </button>
                        </div>
                        { this.state.moreFilter ? <div className={SearchBoxStyle.second}>
                            <select onChange={(event) => this.onChangePropertyTypeFilter(event)} className={SearchBoxStyle.propTypeFilter}>
                                {this.typeCacheFlag ? cachedPropType.map((x,y) => <option value={x.id} key={x.id}>{x.title}</option>) : ""}
                            </select>
                            <input type="text" onChange={(event) => this.onChangePriceFilter(event)} value={this.state.parameters.price}
                                className={SearchBoxStyle.priceFilter} placeholder="Price" />
                            <input type="text" onChange={(event) => this.onChangeBedsFilter(event)} value={this.state.parameters.beds}
                                className={SearchBoxStyle.bedsFilter} placeholder="Beds" />
                        </div> : null }
                        
                        <div className={SearchBoxStyle.moreOptions}>
                            <div className={SearchBoxStyle.searchboxOptions} onClick={() => this.openMoreFilter()}>
                                {this.state.showTextFilter}Options  | 
                            </div>
                            <button className={resetFilter.join(' ')} onClick={() => this.resetFilter()}>
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
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
    return {};
}

export default connect(mapStateToProps, null)(SearchBoxComponent);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBoxStyle from './SearchBoxComponent.css';

class SearchBoxComponent extends Component {

    state = {
        parameters : {
            purposeId : 1,
            location : "",
            propertyType : "",
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
        searchBoxParams.location = event.target.value;
        this.setState({parameters : searchBoxParams});
    }
    onChangePropertyTypeFilter = (event) => {
        const searchBoxParams = {...this.state.parameters};
        searchBoxParams.propertyType = event.target.value;
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
            "property",
            "uae",
        ]

        for(let keys in stateParams){
            if( keys === "purposeId")
                urlSegment[0] = (stateParams[keys] === 2) ? "to-rent" : urlSegment[0];
            if( keys === "propertyType")
                urlSegment[1] = stateParams[keys] !== "" ? stateParams[keys] : "property";
            if( keys === "location")
                urlSegment[2] = stateParams[keys] !== "" ? stateParams[keys] : "uae";
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

    render(){
        console.log("im rendering", this.state, this.props.props);

        const activePurposeTab = this.getActivePurposeTab();
        let resetFilter = [SearchBoxStyle.searchboxOptions, SearchBoxStyle.resetFilters];

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
                            <input type="text" onChange={(event) => this.onChangeLocationFilter(event)} value={this.state.parameters.location} 
                                className={SearchBoxStyle.locationFilter} placeholder="Location" />
                            <button className={SearchBoxStyle.searchboxButton} onClick={() => this.searchBoxSubmitHandler()}>
                                Find
                            </button>
                        </div>
                        { this.state.moreFilter ? <div className={SearchBoxStyle.second}>
                            <input type="text" onChange={(event) => this.onChangePropertyTypeFilter(event)} value={this.state.parameters.propertyType} 
                                className={SearchBoxStyle.propTypeFilter} placeholder="Property Type" />
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

export default SearchBoxComponent;
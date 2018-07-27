import React, { Component } from 'react';

import './SearchBoxComponent.css';

class SearchBoxComponent extends Component {

    state = {
        parameters : {
            purpose : 1,
            location : "",
            propertyType : "",
            price : "",
            beds : "",
        },
        purpose : {
            sale : 1,
            rent : 0
        }
    };

    onChangePurpose = (purposeID) => {
        const searhcBoxState = {...this.state};
        const searchBoxParams = {...searhcBoxState.parameters};
        const searchBoxPurposeState = {...searhcBoxState.purpose};
        if(searchBoxParams.purpose !== purposeID){
            searchBoxParams.purpose = purposeID;
            this.setState({parameters : searchBoxParams});
        }
        searchBoxPurposeState.sale = purposeID == 1 ? 1 : 0;
        searchBoxPurposeState.rent = purposeID == 2 ? 1 : 0;
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
        for(let key in searchBoxParams){
            if (key === "purpose")
                searchBoxParams[key] = 1;
            else
                searchBoxParams[key] = "";
        }
        this.setState({parameters : searchBoxParams});
    }

    render(){
        console.log("im rendering", this.state);
        return (
            <div className="search">
                <div className="searchbox-container">
                    <div className="searchbox-heading">
                        <h1>Search properties for sale and to rent in the UAE</h1>
                    </div>
                    <div className="purpose-btn">
                        <button onClick={() => this.onChangePurpose(1)} className="purpose active">For Sale</button>
                        <button onClick={() => this.onChangePurpose(2)} className="purpose">To Rent</button>
                    </div>
                    <div className="searchbox-filters">
                        <div className="first">
                            <input type="text" onChange={(event) => this.onChangeLocationFilter(event)} value={this.state.parameters.location} 
                                className="location-filter" placeholder="Location" />
                            <button className="searchbox-button">Find</button>
                        </div>
                        <div className="second">
                            <input type="text" onChange={(event) => this.onChangePropertyTypeFilter(event)} value={this.state.parameters.propertyType} 
                                className="prop-type-filter" placeholder="Property Type" />
                            <input type="text" onChange={(event) => this.onChangePriceFilter(event)} value={this.state.parameters.price}
                                className="price-filter" placeholder="Price" />
                            <input type="text" onChange={(event) => this.onChangeBedsFilter(event)} value={this.state.parameters.beds}
                                className="beds-filter" placeholder="Beds" />
                        </div>
                        <div className="more-options">
                            <div className="option-filter searchbox-options">Options | </div>
                            <button className="reset-filters searchbox-options"
                                 onClick={() => this.resetFilter()}>Reset Filters</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBoxComponent;
import axios from 'axios';

// import * as PropertyTypes from "../../../CachedContent/Types";
import * as PurposeOptions from "../../../CachedContent/Purpose";

export const ADV_SEARCH_FILTERS = "ADV_SEARCH_FILTERS";
export const ADV_SEARCH_PURPOSE = "ADV_SEARCH_PURPOSE";

export const getSearchParamsOnMount = (params, PropertyTypes, LocationData) => {

    let urlSegment = params.match.params;
    if(typeof urlSegment[0] !== "undefined" && urlSegment[0] !== ""){
        urlSegment.location += "/"+ urlSegment[0].replace(/\/$/, "");
    }
    delete urlSegment[0];
    delete urlSegment[1];

    const queryParams = params.location.search;

    let purposeTextParam = "For Sale";
    let purposeIdParam = 1;

    if(urlSegment.purpose === "to-rent"){
        purposeTextParam = "To Rent";
        purposeIdParam = 2;
    }
    let stateSegments = {};
    if(PropertyTypes !== "undefined"){
        for(let x in PropertyTypes){
            if(urlSegment.propertyType === PropertyTypes[x].url){
                stateSegments.propertyTypeId = PropertyTypes[x].id;
            }
        }
    }
    if(LocationData !== "undefined"){
        for(let x in LocationData){
            if(urlSegment.location === LocationData[x].key){
                stateSegments.locationId = LocationData[x].id;
            }
        }
    }
    
    let queryParamsArray = [];
    let queryParamsWithIndex = [];

    if(queryParams.length > 0){
        const trimQueryParams = queryParams.substring(1, queryParams.length);
        queryParamsArray = trimQueryParams.split('&');

        let nKey = "";
        let splitSeperatorFromQuery;

        queryParamsArray.map((value, key) => {
            splitSeperatorFromQuery = value.split("=");
            nKey = splitSeperatorFromQuery[0];
            queryParamsWithIndex[nKey] = splitSeperatorFromQuery[1];
            return value;
        });
    }

    const stateParams = {
        ...urlSegment,
        purposeText: purposeTextParam,
        purposeId : purposeIdParam,
        ...stateSegments,
        ...queryParamsWithIndex
    };

    return {
        type : ADV_SEARCH_FILTERS,
        value : stateParams
    };
} 

export const changePurpose = (event, routes) => {
    
    let purpose = "";
    let purposeText = "";
    let purposeId = "";
    
    PurposeOptions.purpose.map((value, key) => {
        if(event.target.value == value.key){
            purpose = value.url;
            purposeId = value.key;
            purposeText = value.value;
        }
    });

    routes.history.push("/"+ purpose +"/"+ routes.match.params.propertyType +"/"+ routes.match.params.location +"/");
    
    const stateParams = {
        purposeText: purposeText,
        purposeId : purposeId,
        purpose : purpose,
    };
    
    return {
        type : ADV_SEARCH_PURPOSE,
        value : stateParams,
    };
}

export const changePropertyType = (event, routes, PropertyTypes) => {

    let propertyType = "";
    let propertyId = "";

    for(let x in PropertyTypes){
        if(event.target.value === PropertyTypes[x].id){
            propertyType = PropertyTypes[x].url;
            propertyId = PropertyTypes[x].id;
        }
    }

    routes.history.push("/"+ routes.match.params.purpose +"/"+ propertyType +"/"+ routes.match.params.location +"/");
    
    const stateParams = {
        propertyType : propertyType,
        propertyTypeId : propertyId,
    };
    
    return {
        type : ADV_SEARCH_PURPOSE,
        value : stateParams,
    };
}
export const changeLocationFilter = (event, routes, Location) => {

    let locationParams = {};
    for(let x in Location){
        if(event.target.value === Location[x].id){
            locationParams.location = Location[x].key;
            locationParams.locationId = parseInt(Location[x].id);
        }
    }

    routes.history.push("/"+ routes.match.params.purpose +"/"+ routes.match.params.propertyType +"/"+ locationParams.location +"/");
    
    return {
        type : ADV_SEARCH_PURPOSE,
        value : locationParams,
    };
}
import axios from 'axios';

import * as PropertyTypes from "../../../CachedContent/Types";
import * as PurposeOptions from "../../../CachedContent/Purpose";

export const ADV_SEARCH_FILTERS = "ADV_SEARCH_FILTERS";
export const ADV_SEARCH_PURPOSE = "ADV_SEARCH_PURPOSE";

export const getSearchParamsOnMount = (params) => {
    const urlSegment = params.match.params;
    const queryParams = params.location.search;

    let purposeTextParam = "For Sale";
    let purposeIdParam = 1;

    if(urlSegment.purpose === "to-rent"){
        purposeTextParam = "To Rent";
        purposeIdParam = 2;
    }

    let propertyType = "";
    let propertyId = "";
    PropertyTypes.types.map((value, key) => {
        if(urlSegment.propertyType === value.url){
            propertyType = value.url;
            propertyId = value.key;
        }
        return value;
    });

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
        propertyType : propertyType,
        propertyTypeId : propertyId,
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

export const changePropertyType = (event, routes) => {

    let propertyType = "";
    let propertyId = "";
    
    PropertyTypes.types.map((value, key) => {
        if(event.target.value == value.key){
            propertyType = value.url;
            propertyId = value.key;
        }
    });

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
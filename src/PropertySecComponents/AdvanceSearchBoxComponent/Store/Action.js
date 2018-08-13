import * as PurposeOptions from "../../../CachedContent/Purpose";

export const ADV_SEARCH_FILTERS = "ADV_SEARCH_FILTERS";
export const ADV_SEARCH_PURPOSE = "ADV_SEARCH_PURPOSE";

export const getSearchParamsOnMount = (params, PropertyTypes, LocationData) => {
    const urlSegment = params.match.params;
    const queryParams = params.location.search;

    let purposeTextParam = "For Sale";
    let purposeIdParam = 1;

    if(urlSegment.purpose === "to-rent/"){
        purposeTextParam = "To Rent";
        purposeIdParam = 2;
    }

    let stateSegments = {};
    if(PropertyTypes !== "undefined"){
        for(let x in PropertyTypes){
            if(urlSegment.propertyType.replace(/\/$/, "") === PropertyTypes[x].url){
                stateSegments.propertyTypeId = parseInt(PropertyTypes[x].id);
                stateSegments.propertyType = PropertyTypes[x].url;
            }
        }
    }
    if(typeof LocationData !== "undefined"){
        let locationWithCity = urlSegment['location'];
        if(typeof urlSegment['city'] !== "undefined" && urlSegment['city'] !== ""){
            locationWithCity += urlSegment['city'].replace(/\/$/, "") + "/";
        }
        for(let x in LocationData){
            if(locationWithCity.replace(/\/$/, "") === LocationData[x].key){
                stateSegments.locationId = parseInt(LocationData[x].id);
                stateSegments.location = LocationData[x].key;
            }
        }
    }

    if(typeof urlSegment.page === "undefined")
        stateSegments.page = 1;

    if(typeof urlSegment.page !== "undefined" && urlSegment.page !== 1)
        stateSegments.page = parseInt(urlSegment.page.replace(/\/$/, ""));
    
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

export const changePurpose = (event, routes, params) => {
    
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
    
    routes.history.push("/"+ purpose +"/"+ params.propertyType +"/"+ params.location +"/");
    
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

export const changePropertyType = (event, routes, PropertyTypes, params) => {

    let propertyType = "";
    let propertyId = "";

    for(let x in PropertyTypes){
        if(event.target.value === PropertyTypes[x].id){
            propertyType = PropertyTypes[x].url;
            propertyId = PropertyTypes[x].id;
        }
    }

    routes.history.push("/"+ params.purpose +"/"+ propertyType +"/"+ params.location +"/");
    
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

    let urlPurpose = routes.match.params.purpose.replace(/\/$/, "");
    let urlType = routes.match.params.propertyType.replace(/\/$/, "");
    routes.history.push("/"+ urlPurpose +"/"+ urlType +"/"+ locationParams.location +"/");
    
    return {
        type : ADV_SEARCH_PURPOSE,
        value : locationParams,
    };
}
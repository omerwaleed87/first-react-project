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

    let queryParamsArray = [];

    if(queryParams.length > 0){
        const trimQueryParams = queryParams.substring(1, queryParams.length);
        queryParamsArray = trimQueryParams.split('&');
    }

    const queryOjbect = {
        ...queryParamsArray
    };
console.log(queryOjbect);
    let stateParams = {
        ...urlSegment,
        purposeText: purposeTextParam,
        purposeId : purposeIdParam,
        agent : "123",
        price : "11111",
    };

    return {
        type : ADV_SEARCH_FILTERS,
        value : stateParams
    };
} 

export const changePurpose = (event, routes) => {

    let purpose = "for-sale";
    let purposeText = "For Sale";
    let purposeId = 1;
    
    if(event.target.value == 2){
        purpose = "to-rent";
        purposeText = "To Rent";
        purposeId = 2;
    }

    routes.history.push("/"+ purpose +"/property/uae/");
    
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
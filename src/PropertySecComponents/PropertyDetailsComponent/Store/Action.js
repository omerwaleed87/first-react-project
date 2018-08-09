import axios from "axios"

export const GET_LISTING_DETAILS = "GET_LISTING_DETAILS";

export const getListingDetailsOnMount = (routeParams, stateParams) => {
    if(stateParams.purposeId !== "" && stateParams.location !== "" && stateParams.propertyTypeId !== ""){
        return (dispatch, getState) => {
            
            let apiParams = {};
            const apiAllowedParams = {"locationId" : "location", "propertyTypeId" : "type", "purposeId" : "purpose"};
            for(let x in stateParams){
                if(stateParams[x] !== "" && typeof apiAllowedParams[x] !== "undefined"){
                    apiParams[apiAllowedParams[x]] = stateParams[x];
                }
            }
            apiParams['type'] = parseInt(apiParams['type']);
            apiParams['selector'] = parseInt(routeParams.match.params.selector);
            
            axios.get("http://localhost:8000/polls/details/",{
                params : {
                    ...apiParams
                }
            })
            .then(response => {
                const allData = response.data;
                dispatch({type : GET_LISTING_DETAILS, value : allData});
            }).catch(error => {
                console.log(error, "i have got an error");
            });
        }
    }
    return {
        type : "",
        value : ""
    };
} 
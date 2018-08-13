import axios from 'axios';

export const LISTING = "LISTING";

export const getListingsOnMount = (Params) => {
    if(Params.purposeId !== "" && Params.location !== "" && Params.propertyTypeId !== ""){
        return (dispatch, getState) => {
            const stateParams = getState().parameters;
            let apiParams = {};
            const apiAllowedParams = {"locationId" : "location", "propertyTypeId" : "type", "purposeId" : "purpose",
                                    "price" : "price", "area" : "area", "keyword" : "keyword", "agent" : "agent",
                                    "beds" : "beds", "baths" : "baths", "page" : "page"};
            for(let x in stateParams){
                if(stateParams[x] !== "" && typeof apiAllowedParams[x] !== "undefined"){
                    apiParams[apiAllowedParams[x]] = stateParams[x];
                }
            }
            apiParams['type'] = parseInt(apiParams['type']);
            axios.get("http://localhost:8000/polls/listing/",{
                    params : {
                        ...apiParams
                    }
                })
                .then(response => {
                    const allData = response.data;
                    dispatch({type : LISTING, value : allData.listing});
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
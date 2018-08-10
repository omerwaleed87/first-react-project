import axios from 'axios';

export const BREADCRUMB_TITLE = "BREADCRUMB_TITLE";

export const getBreadCrumbTitleOnMount = (Params, searchRouteParams) => {
    if(Params.purposeId !== "" && Params.location !== "" && Params.propertyTypeId !== ""){
        return (dispatch, getState) => {
            const stateParams = getState().parameters;
            const cachedTypes = getState().types;
            const cachedPurpose = getState().purpose;
            const cachedLocation = getState().locations;
            let apiParams = {};
            for(let x in stateParams){
                if(stateParams[x] !== "" && x === "location"){
                    let urlSegment = searchRouteParams.match.params;
                    if(typeof urlSegment[0] !== "undefined" && urlSegment[0] !== ""){
                        urlSegment.location += "/"+ urlSegment[0].replace(/\/$/, "");
                    }
                    delete urlSegment[0];
                    delete urlSegment[1];
                    for(let x in cachedLocation){
                        if(cachedLocation[x].key === urlSegment.location){
                            apiParams.location_key = cachedLocation[x].key;
                        }
                    }
                }
                if(stateParams[x] !== "" && x === "propertyTypeId"){
                    for(let x in cachedTypes){
                        if(cachedTypes[x].url === searchRouteParams.match.params.propertyType){
                            apiParams.type = cachedLocation[x].id;
                        }
                    }
                }
                if(stateParams[x] !== "" && x === "purposeId"){
                    for(let x in cachedPurpose){
                        if(cachedPurpose[x].url === searchRouteParams.match.params.purpose){
                            apiParams.purpose = cachedPurpose[x].id;
                        }
                    }
                }
            }
            axios.get("http://localhost:8000/polls/breadcrumb/", {
                params: {
                        ...apiParams
                    }
                })
                .then(response => {
                    const allData = response.data.breadcrumb;
                    dispatch({type : BREADCRUMB_TITLE, value : allData});
                }).catch(error => {
                    console.log(error, "i have got an error");
                });
        }
    }
    return{
        type : "",
        value : ""            
    }
} 
import axios from 'axios';

export const BREADCRUMB_TITLE = "BREADCRUMB_TITLE";

export const getBreadCrumbTitleOnMount = (Params, searchRouteParams) => {
    if(Params.purposeId !== "" && Params.location !== "" && Params.propertyTypeId !== ""){
        return (dispatch, getState) => {
            const stateParams = getState().parameters;
            const cachedTypes = getState().types;
            const cachedPurpose = getState().purpose;
            const cachedLocation = getState().locations;
            let urlSegment = searchRouteParams.match.params;

            let apiParams = {};
            let locationWithCity = urlSegment['location'];
            for(let x in stateParams){
                if(stateParams[x] !== "" && x === "location"){
                    if(typeof urlSegment['city'] !== "undefined" && urlSegment['city'] !== ""){
                        locationWithCity += urlSegment['city'].replace(/\/$/, "") + "/";
                    }
                    for(let x in cachedLocation){
                        if(cachedLocation[x].key === locationWithCity.replace(/\/$/, "")){
                            apiParams.location_key = cachedLocation[x].key;
                        }
                    }
                }
                if(stateParams[x] !== "" && x === "propertyTypeId"){
                    for(let x in cachedTypes){
                        if(cachedTypes[x].url === searchRouteParams.match.params.propertyType.replace(/\/$/, "")){
                            apiParams.type = cachedLocation[x].id;
                        }
                    }
                }
                if(stateParams[x] !== "" && x === "purposeId"){
                    for(let x in cachedPurpose){
                        if(cachedPurpose[x].url === searchRouteParams.match.params.purpose.replace(/\/$/, "")){
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
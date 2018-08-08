import axios from 'axios';

export const BREADCRUMB_TITLE = "BREADCRUMB_TITLE";

export const getBreadCrumbTitleOnMount = (Params) => {
    if(Params.purposeId !== "" && Params.location !== "" && Params.propertyTypeId !== ""){
        return (dispatch, getState) => {
            const stateParams = getState().parameters;
            let apiParams = {};
            for(let x in stateParams){
                if(stateParams[x] !== "" && x === "location"){
                    apiParams.location_key = stateParams[x];
                }
                if(stateParams[x] !== "" && x === "propertyTypeId"){
                    apiParams.type = parseInt(stateParams[x]);
                }
                if(stateParams[x] !== "" && x === "purposeId"){
                    apiParams.purpose = stateParams[x];
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
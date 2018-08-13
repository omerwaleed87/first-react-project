import axios from "axios"

import * as AdvSearchActions from '../../AdvanceSearchBoxComponent/Store/Action';

export const LOCATION = "MAKE_LOCATION_CACHE";
export const TYPE = "MAKE_TYPE_CACHE";
export const PURPOSE = "MAKE_PURPOSE_CACHE";

export const getLocationCacheOnMount = (routeParams) => {
    return (dispatch, getState) => {
        axios.get("http://localhost:8000/polls/location/")
        .then(response => {
            const allData = response.data;
            dispatch({type : LOCATION, value : allData.location});

            let urlSegment = routeParams.match.params;
            if(typeof urlSegment.location !== "undefined"){
                
                let locationWithCity = urlSegment['location'];
                if(typeof urlSegment['city'] !== "undefined" && urlSegment['city'] !== ""){
                    locationWithCity += urlSegment['city'].replace(/\/$/, "") + "/";
                }

                let locParams = {};
                for(let x in allData.location){
                    if(locationWithCity.replace(/\/$/, "") === allData.location[x].key){
                        locParams.location = allData.location[x].key;
                        locParams.locationId = parseInt(allData.location[x].id);
                    }
                }
                dispatch({type : AdvSearchActions.ADV_SEARCH_FILTERS, value : locParams});
            }
        }).catch(error => {
            console.log(error, "i have got an error");
        });
    }
} 

export const getPuposeCacheOnMount = (routeParams) => {
    return (dispatch, getState) => {
        axios.get("http://localhost:8000/polls/purpose/")
        .then(response => {
            const allData = response.data;
            dispatch({type : PURPOSE, value : allData.purpose});

            const urlPurpose = routeParams.match.params.purpose;
            if(typeof urlPurpose !== "undefined"){
                let purposeParams = {};
                for(let x in allData.purpose){
                    if(urlPurpose.replace(/\/$/, "") === allData.purpose[x].url){
                        purposeParams.purpose = allData.purpose[x].url;
                        purposeParams.purposeId = parseInt(allData.purpose[x].id);
                        purposeParams.purposeText = allData.purpose[x].title;
                    }
                }
                dispatch({type : AdvSearchActions.ADV_SEARCH_FILTERS, value : purposeParams});
            }
        }).catch(error => {
            console.log(error, "i have got an error");
        });
    }
} 

export const getTypesCacheOnMount = (routeParams) => {
    return (dispatch, getState) => {
        axios.get("http://localhost:8000/polls/type/")
        .then(response => {
            const allData = response.data;
            dispatch({type : TYPE, value : allData.type});

            const urlType = routeParams.match.params.propertyType;
            if(typeof urlType !== "undefined"){
                let typeParams = {};
                for(let x in allData.type){
                    if(routeParams.match.params.propertyType.replace(/\/$/, "") === allData.type[x].url){
                        typeParams.propertyType = allData.type[x].url;
                        typeParams.propertyTypeId = parseInt(allData.type[x].id);
                    }
                }
                dispatch({type : AdvSearchActions.ADV_SEARCH_FILTERS, value : typeParams});
            }
        }).catch(error => {
            console.log(error, "i have got an error");
        });
    }
} 
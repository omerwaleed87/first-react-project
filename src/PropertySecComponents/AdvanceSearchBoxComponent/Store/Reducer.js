import * as AdvSearchActions from './Action';
import * as BreadcrumbActions from '../../BreadcrumbComponent/Store/Action';
import * as ListingActions from '../../SearchListingComponent/Store/Action';
import * as Types from "../../../CachedContent/Types";
import * as CacheAction from "../../CacheComponent/Store/Action";
import * as ListingDetailAction from "../../PropertyDetailsComponent/Store/Action";

const initialState = {
    parameters : {
        purposeId : 1,
        purpose : "for-sale",
        purposeText : "For Sale",
        location : "",
        locationId : "",
        propertyType : "",
        propertyTypeId : "",
        price : "",
        beds : "",
        area : "",
        baths : "",
        keyword : "",
        agent : ""
    },
    breadcrumb : {},
    listings : {},
    locations : {},
    purpose : {},
    types : {},
    propertyDetail : {},
};

const reducer = (state = initialState, action) => {
    if(action.type === AdvSearchActions.ADV_SEARCH_FILTERS){
        const listOfStateParams = {...state.parameters};
        const listOfAppliedParams = {...action.value};

        return{
            parameters : {
                ...listOfStateParams,
                ...listOfAppliedParams 
            },
            breadcrumb : {
                ...state.breadcrumb
            },
            listings : {
                ...state.listings
            },
            locations : {
                ...state.locations
            },
            types : {
                ...state.types
            },
            purpose : {
                ...state.purpose
            },
            propertyDetail : {
                ...state.propertyDetail
            },
        };

        return state;
    }

    if(action.type === BreadcrumbActions.BREADCRUMB_TITLE){
        const listOfStateParams = {...state.parameters};
        return{
            parameters : {
                ...state.parameters
            },
            breadcrumb : {
                ...action.value
            },
            listings : {
                ...state.listings
            },
            locations : {
                ...state.locations
            },
            types : {
                ...state.types
            },
            purpose : {
                ...state.purpose
            },
            propertyDetail : {
                ...state.propertyDetail
            },
        };

        return state;
    }

    if(action.type === "LISTING"){
        
        return{
            parameters : {
                ...state.parameters
            },
            breadcrumb : {
                ...state.breadcrumb
            },
            listings : {
                ...action.value
            },
            locations : {
                ...state.locations
            },
            types : {
                ...state.types
            },
            purpose : {
                ...state.purpose
            },
            propertyDetail : {
                ...state.propertyDetail
            },
        };

        return state;
    }

    if(action.type === AdvSearchActions.ADV_SEARCH_PURPOSE){
        const listOfStateParams = {...state.parameters};
        return{
            parameters : {
                ...state.parameters,
                ...action.value
            },
            breadcrumb : {
                ...state.breadcrumb
            },
            listings : {
                ...state.listings
            },
            locations : {
                ...state.locations
            },
            types : {
                ...state.types
            },
            purpose : {
                ...state.purpose
            },
            propertyDetail : {
                ...state.propertyDetail
            },
        };

        return state;
    }

    if(action.type === CacheAction.LOCATION){
        return{
            parameters : {
                ...state.parameters,
            },
            breadcrumb : {
                ...state.breadcrumb
            },
            listings : {
                ...state.listings
            },
            locations : {
                ...action.value
            },
            types : {
                ...state.types
            },
            purpose : {
                ...state.purpose
            },
            propertyDetail : {
                ...state.propertyDetail
            },
        };
    }

    if(action.type === CacheAction.TYPE){
        return{
            parameters : {
                ...state.parameters,
            },
            breadcrumb : {
                ...state.breadcrumb
            },
            listings : {
                ...state.listings
            },
            locations : {
                ...state.locations
            },
            types : {
                ...action.value
            },
            purpose : {
                ...state.purpose
            },
            propertyDetail : {
                ...state.propertyDetail
            },
        };
    }

    if(action.type === CacheAction.PURPOSE){
        return{
            parameters : {
                ...state.parameters,
            },
            breadcrumb : {
                ...state.breadcrumb
            },
            listings : {
                ...state.listings
            },
            locations : {
                ...state.locations
            },
            types : {
                ...state.types
            },
            purpose : {
                ...action.value
            },
            propertyDetail : {
                ...state.propertyDetail
            },
        };
    }

    if(action.type === ListingDetailAction.GET_LISTING_DETAILS){
        return{
            parameters : {
                ...state.parameters
            },
            breadcrumb : {
                ...state.breadcrumb
            },
            listings : {
                ...state.listings
            },
            locations : {
                ...state.locations
            },
            types : {
                ...state.types
            },
            purpose : {
                ...state.purpose
            },
            propertyDetail : {
                ...action.value
            },
        }
    }

    return state;
}

export default reducer;
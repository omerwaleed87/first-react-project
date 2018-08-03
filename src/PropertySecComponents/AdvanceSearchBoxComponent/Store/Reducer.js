import * as AdvSearchActions from './Action';
import * as BreadcrumbActions from '../../BreadcrumbComponent/Store/Action';
import * as ListingActions from '../../SearchListingComponent/Store/Action';
import * as Types from "../../../CachedContent/Types";

const initialState = {
    parameters : {
        purposeId : 1,
        purpose : "for-sale",
        purposeText : "For Sale",
        location : "",
        locationID : "",
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
            }
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
            }
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
            }
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
            }
        };

        return state;
    }
}

export default reducer;
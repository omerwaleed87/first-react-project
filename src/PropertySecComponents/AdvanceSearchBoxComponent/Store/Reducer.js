import * as homeSearchActions from '../../SearchBoxComponent/Store/Action';
import * as AdvSearchActions from './Action';
import * as BreadcrumbActions from '../../BreadcrumbComponent/Store/Action';

const initialState = {
    parameters : {
        purposeId : 1,
        purpose : "for-sale",
        purposeText : "For Sale",
        location : "",
        propertyType : "",
        price : "",
        beds : "",
        area : "",
        baths : "",
        keyword : "",
        agency : ""
    },
    breadcrumb : {
        title : "",
    },
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
                title : state.parameters.propertyType + " " + state.parameters.purposeText + " in " + state.parameters.location
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
            }
        };

        return state;
    }
}

export default reducer;
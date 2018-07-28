import * as homeSearchActions from '../../SearchBoxComponent/Store/Action';
import * as AdvSearchActions from './Action';

const initialState = {
    parameters : {
        purposeId : 1,
        location : "",
        propertyType : "",
        price : "",
        beds : "",
        area : "",
        baths : "",
        keyword : "",
        agency : ""
    },
};

const reducer = (state = initialState, action) => {
    if(action.type === homeSearchActions.HOME_SEARCH || action.type === 'ADVANCE_SEARCH'){

        const listOfStateParams = {...state.parameters};
        const listOfAppliedParams = {...action.value};

        return{
            parameters : {
                ...listOfStateParams,
                ...listOfAppliedParams 
            },
        };
    }
}

export default reducer;
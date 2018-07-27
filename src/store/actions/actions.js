export const HUMAN_NAME_CHANGE = "NAME_CHANGE";
export const HUMAN_AGE_CLICK = "AGE_CLICK";
export const NEXT_PAGINATE = "NEXT_PAGINATE";
export const PREV_PAGINATE = "PREV_PAGINATE";

export const humanNameChange = (key, event) => {
    return {
        type : HUMAN_NAME_CHANGE,
        value : event.target.value,
        key : key
    }
}

export const humanAgeClick = (key, value) => {
    return (dispatch, getState) => {
        setTimeout( () => {
            console.log("Get global state", getState());
            dispatch({type : HUMAN_AGE_CLICK, value : value, key : key});
        }, 2000);
    }
}
export const HumanNextPaginate = (value) => {
    return {
        type : NEXT_PAGINATE,
        value : value,
    }
}
export const HumanPrevPaginate = (value) => {
    return {
        type : PREV_PAGINATE,
        value : value,
    }
}

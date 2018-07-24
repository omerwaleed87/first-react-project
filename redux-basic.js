const redux = require('redux');
const createStore = redux.createStore;

// initial assignmnts if required
const initialStore = {
    counter : 0
}

// reducers
const rootReducer = (state = initialStore, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
}

// store
const store = createStore(rootReducer);
console.log(store.getState());


// subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});


// dispatch
store.dispatch({type : "INC_COUNTER"});
store.dispatch({type : "ADD_COUNTER", value: 12});
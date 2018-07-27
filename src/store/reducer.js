const initialState = {
    Human : [ 
      {
        id : 0 , name : "Omer", age  : 25, color : "white"
      },
      {
        id : 1 , name : "Sheggy", age  : 26, color : "white"
      },
      {
        id : 2 , name : "Hammad", age : 29, color : "white"
      },
      {
        id : 3 , name : "Butt", age : 25, color : "white"
      },
      {
        id : 4 , name : "Saqib", age : 29, color : "white"
      },
      {
        id : 5 , name : "Waqas", age : 27, color : "white"
      },
      {
        id : 6 , name : "Ahmad Imran hashmi", age : 59, color : "white"
      },
      {
        id : 7 , name : "Irtiza" , age : 30, color : "white"
      },
      {
        id : 8 , name : "Qaiser baba", age : 37, color : "white"
      }
    ],
    currenState : 0,

    otherBooks : [],
    addBook : {
        title : {
            value : "",
            isValid : true,
            validation : {
                required : true,
                minLength : 5,
                maxLength : 10,
            },
        },
        description : {
            value : "",
            isValid : true,
            validation : {
                required : true,
                minLength : 15,
                maxLength : 20,
            },
        },
        author : {
            value : "",
            isValid : true,
            validation : {
                required : true,
                minLength : 5,
                maxLength : 10,
            },
        }, 
    },
};

const reducer = (state = initialState, action) => {
    
    if(action.type === 'NAME_CHANGE'){
        console.log("Come and change my name");

        const listOfHumanState = [...state.Human];
        const saveToBeUpdatedPerson = listOfHumanState[action.key];
        listOfHumanState.splice(action.key, 1, {id : saveToBeUpdatedPerson.id, name : action.value, age : saveToBeUpdatedPerson.age, color : saveToBeUpdatedPerson.color});

        return{
            Human : [
                ...listOfHumanState    
            ],
            currenState : state.currenState,
        };
    }
    if(action.type === 'AGE_CLICK' && state.Human[action.key].color !== action.value){
        const listOfHumanState = [...state.Human];
        if(listOfHumanState[action.key].color !== "red"){
            listOfHumanState[action.key].color = "red";
            return{
                Human : [
                    ...listOfHumanState
                ],
                currenState : state.currenState,
            };
        }
    }
    if(action.type === 'NEXT_PAGINATE'){
        const listOfHumanState = [...state.Human];
        return{
            Human : [
                ...listOfHumanState    
            ],
            currenState : state.currenState + action.value,
        };
    }
    if(action.type === 'PREV_PAGINATE'){
        const listOfHumanState = [...state.Human];
        return{
            Human : [
                ...listOfHumanState    
            ],
            currenState : state.currenState + action.value,
        };
    }

    if(action.type === 'GET_BOOKS_ON_MOUNT'){
        console.log("getting books from server hit !!! ");
        return {
            ...state,
            otherBooks : action.value
        }
    }
    return state;
}

export default reducer;
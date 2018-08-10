import axios from "axios"

export const GET_POPULAR_PROPERTIES = "GET_POPULAR_PROPERTIES";

export const getPopularPropertiesOnMount = () => {
    return (dispatch, getState) => {
        
        axios.get("http://localhost:8000/polls/popularProperties/",{
            params : {
                sale : 1,
                rent : 1
            }
        })
        .then(response => {
            const allData = response.data;
            dispatch({type : GET_POPULAR_PROPERTIES, value : allData.popular});
        }).catch(error => {
            console.log(error, "i have got an error");
        });
    }
} 
import axios from 'axios';

export const LISTING = "LISTING";

export const getListingsOnMount = () => {

    return (dispatch, getState) => {
        axios.get("http://localhost:8000/polls/listing/")
            .then(response => {
                const allData = response.data;
                dispatch({type : LISTING, value : allData.listing});
            }).catch(error => {
                console.log(error, "i have got an error");
            });
    }
} 
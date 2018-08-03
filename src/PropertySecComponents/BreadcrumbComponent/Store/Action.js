import axios from 'axios';

export const BREADCRUMB_TITLE = "BREADCRUMB_TITLE";

export const getBreadCrumbTitleOnMount = () => {

    return (dispatch, getState) => {
        axios.get("http://localhost:8000/polls/breadcrumb/")
            .then(response => {
                const allData = response.data.breadcrumb;
                dispatch({type : BREADCRUMB_TITLE, value : allData});
            }).catch(error => {
                console.log(error, "i have got an error");
            });
    }
} 
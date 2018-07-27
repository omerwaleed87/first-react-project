import axios from 'axios';

export const GET_BOOKS_ON_MOUNT = "GET_BOOKS_ON_MOUNT";

export const getBooksONMount = (limit) => {
    return (dispatch, getState) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const allData = response.data.slice(0, limit);
                console.log("ALL DATA ARRAY", allData, limit);
                console.log("INSIDE Component did mount of book shop");
                const allBooksData = allData.map((a,b) => {
                    return {
                        title : a.title,
                        description : a.body,
                        id : a.id
                    };
                });
                dispatch({type : GET_BOOKS_ON_MOUNT, value : allBooksData});
            }).catch(error => {
                console.log(error, "i have got an error");
            });
    }
}
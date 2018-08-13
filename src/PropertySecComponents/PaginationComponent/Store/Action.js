import axios from 'axios';

export const PAGINATION = "PAGINATION";

export const changePaginationOnClick = (value, params, routes) => {
    if(value !== "undefined"){
        const paginationNumber = parseInt(value);
        if(value === 1)
            routes.history.push("/"+ params.purpose +"/"+ params.propertyType +"/"+ params.location +"/");
        else
            routes.history.push("/"+ params.purpose +"/"+ params.propertyType +"/"+ params.location +"/"+ paginationNumber +"/");
        return {type : PAGINATION, value : {page : paginationNumber}};
    }
    return {};
} 
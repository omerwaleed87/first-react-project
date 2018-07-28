export const HOME_SEARCH = "HOME_SEARCH";

export const homeSearchHandler = (searchBoxObj = {}) => {
    
    return {
        type : HOME_SEARCH,
        value : searchBoxObj,
    }
}
//Fetch all URLs
export const fetchAll = () => {
    return {
        type: "FETCH_ALL",
        payload: "data from db"
    };
}


//Add a URL
export const addUrl = () => {
    return {
        type: "ADD_URL",
        payload: "data from form"
    };
}
import axios from 'axios'

// Fetch all URLs
export const fetchAll = () => async dispatch => {
    const response = await axios.get('https://www.octavemusic.tk/all');
    
    if(response.data){
        return dispatch({
            type: "FETCH_URL",
            payload: response.data
        });
    }
}

//Add a URL
export const addUrl = (longUrl, urlCode) => async dispatch =>{
    // console.log(LongUrl, CustomUrlCode);
    const response = await axios.post('https://www.octavemusic.tk/',{
        longUrl,
        urlCode
    });
    
    if(response.data){
        return dispatch({
            type: "ADD_URL",
            payload: response.data
        });
    }
}

export const deleteUrl = (id) => async dispatch => {
    const response = await axios.delete('https://www.octavemusic.tk/' + id);

    if(response){
        return dispatch({
            type: "DELETE_URL",
            payload: id
        });
    }
}

export const editUrl = (id,longUrl, urlCode) => async dispatch => {
    console.log("edit url says hello");
    console.log(id , longUrl, urlCode);
    const response = await axios.patch('https://www.octavemusic.tk/', {
        id,
        longUrl,
        urlCode
    });

    if(response){
        
        return dispatch({
            type: "EDIT_URL",
            payload: response.data.updatedUrl
        });
    }
}

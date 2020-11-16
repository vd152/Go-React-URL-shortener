import urlApi from '../api/shortener'

// Fetch all URLs
export const fetchAll = () => async dispatch => {
    const response = await urlApi.get('/');
    
    if(response.data){
        return dispatch({
            type: "FETCH_URL",
            payload: "some data"
        });
    }
}

//Add a URL
export const addUrl = (longUrl, urlCode) => async dispatch =>{
    // console.log(LongUrl, CustomUrlCode);
    const response = await urlApi.post('https://www.octavemusic.tk/',{
        longUrl,
        urlCode
    });

    if(response.data){
        console.log(response);
    }
}


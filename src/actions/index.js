import urlApi from '../api/shortener'

//Fetch all URLs
// export const fetchAll = () => async dispatch => {
//     const response = await urlApi.get('/');
    
//     if(response.data){
//         return dispatch({
//             type: "FETCH_URL",
//             payload: "some data"
//         });
//     }
// }

export const addUrl = (longUrl, urlCode) => async dispatch =>{
    // console.log(LongUrl, CustomUrlCode);
    const response = await urlApi.post('http://octavemusic.tk/',{
        longUrl,
        urlCode
    });

    if(response.data){
        // return dispatch({

        // })
        console.log(response.data.result);
    }
}


export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_URL":
        if(action.payload.urls){
          return {urls: action.payload.urls.reverse()};
        }else{
          return {urls: []};
        }
      case "ADD_URL":
        return {urls: [...state.urls, action.payload].reverse()};
      case "DELETE_URL":
        return {urls: state.urls.filter(url => url.id !== action.payload).reverse()};
      case "EDIT_URL":
        return {urls: state.urls.map(url => url.id === action.payload.id ? action.payload : url)}
  
      default:
        return state;
    }
  };
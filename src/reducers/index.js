export default (state = [], action) => {
    switch (action.type) {
      
  
      case "ADD_URL":
        return [...state, action.payload];
  
      
  
      default:
        return state;
    }
  };
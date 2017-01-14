export default (state = "ALL", action) =>{
  switch(action.type){
    case "CHANGE_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

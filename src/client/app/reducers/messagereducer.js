import _ from "lodash";

const initialState = {
  PUBLIC: [
    {
      message: "PUBLIC ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci quis metus euismod laoreet sed id est. Praesent sit amet sapies.", 
      name: "Andrew", 
      createdAt: new Date()
    },
    {
      message: "PUBLIC ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci quis metus euismod laoreet sed id est. Praesent sit amet sapies.", 
      name: "John", 
      createdAt: new Date()
    }
  ],
  PRIVATE: [
    {
      message: "PRIVATE ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci quis metus euismod laoreet sed id est. Praesent sit amet sapie.", 
      name: "Andrew", 
      createdAt: new Date()
    },
    {
      message: "PRIVATE ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci quis metus euismod laoreet sed id est. Praesent sit amet sapie.", 
      name: "John", 
      createdAt: new Date()
    }
  ]
};

export default (state = initialState, action) =>{
  switch(action.type){
    case "NEW_MESSAGE":
      let newState = _.cloneDeep(state);
      let newMessage = {
        message: action.message,
        name: "Andrew",
        createdAt: new Date()
      };

      action.category = action.category === "ALL" ? "PUBLIC" : action.category;

      newState[action.category].push(newMessage);

      return newState;
    default:
      return state;
  }
};

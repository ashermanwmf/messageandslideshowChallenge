import _ from "lodash";

const initialState = {
  PUBLIC: [
    {message: "hello, this is a public message", name: "Andrew", createdAt: "timestamp"}
  ],
  PRIVATE: [
    {message: "hello, this is a private message", name: "Andrew", createdAt: "timestamp"}
  ]
};

export default (state = initialState, action) =>{
  switch(action.type){
    case "NEW_MESSAGE":
      let newState = _.cloneDeep(state);
      let newMessage = {
        message: action.message,
        name: "Andrew",
        createdAt: "timestamp"
      };

      action.category = action.category === "ALL" ? "PUBLIC" : action.category;

      newState[action.category].push(newMessage);

      return newState;
    default:
      return state;
  }
};

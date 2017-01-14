export default (message, category) =>{
  return {
    type: "NEW_MESSAGE",
    message: message,
    category: category
  };
};

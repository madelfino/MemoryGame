export default (state = null, action) => {
  switch (action.type) {
    case 'select_card':
      return action.payload;
    default:
      return state;
  }
};

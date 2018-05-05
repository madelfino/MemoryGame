export default (state = null, action) => {
  switch (action.type) {
    case 'select_card':
      if (state === null) {
        return (
          {
            "selected": action.payload['word'],
            "matches": []
          }
        );
      } else if (!state.selected) {
        var new_state = {
          "selected": state.selected,
          "matches": state.matches
        };
        return (
          {
            "selected": action.payload['word'],
            "matches": new_state.matches
          }
        );
      } else {
        var new_state = {
          "selected": state.selected,
          "matches": state.matches
        };
        if (state.selected == action.payload['match']) {
          new_state.matches.push(state.selected);
          new_state.matches.push(action.payload['word']);
        }
        new_state.selected = '';
        return new_state;
      }
    default:
      return state;
  }
};

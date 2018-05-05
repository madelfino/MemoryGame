export default (state = null, action) => {
  switch (action.type) {
    case 'select_card':
      if (state === null) {
        console.log('a');
        return (
          {
            "selected": action.payload['word'],
            "matches": []
          }
        );
      } else if (!state.selected) {
        console.log('b');
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
        console.log('c');
        if (state.selected == action.payload['match']) {
          new_state.matches.push(state.selected);
          new_state.matches.push(action.payload['word']);
        }
        new_state.selected = '';
        console.log(new_state);
        return new_state;
      }
    default:
      return state;
  }
};

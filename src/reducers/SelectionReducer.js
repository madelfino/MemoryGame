export default (state = null, action) => {
  switch (action.type) {
    case 'reset':
      return (
        {
          "selected": '',
          "matches": []
        }
      )
    case 'select_card':
    console.log(state);
      if (state == null) {
        return (
          {
            "selected": [ action.payload['word'] ],
            "matches": []
          }
        );
      } else if (!state.selected || state.selected.length >= 2) {
        var new_state = {
          "selected": [ action.payload['word'] ],
          "matches": state.matches
        };
        return new_state;
      } else {
        var new_state = {
          "selected": state.selected,
          "matches": state.matches
        };
        if (state.selected.includes(action.payload['match'])) {
          new_state.matches.push(state.selected[0]);
          new_state.matches.push(action.payload['word']);
        }
        new_state.selected.push(action.payload['word']);
        return new_state;
      }
    default:
      return state;
  }
};

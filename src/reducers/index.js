import { combineReducers } from 'redux';
import WordReducer from './WordReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  words: WordReducer,
  selectedCard: SelectionReducer
});

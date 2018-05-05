import { combineReducers } from 'redux';
import WordReducer from './WordReducer';
import CategoryReducer from './CategoryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  words: WordReducer,
  categories: CategoryReducer,
  selectedCard: SelectionReducer,
});

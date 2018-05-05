export const selectCard = (word, match) => {
  return {
    type: 'select_card',
    payload: {
      "word": word,
      "match": match
    }
  };
};

export const setCategory = (category) => {
  return {
    type: 'set_category',
    payload: category
  };
};

export const getCategory = (category) => {
  return {
    type: 'get_category',
    payload: ''
  };
};

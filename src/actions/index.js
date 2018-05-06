export const selectCard = (word, match) => {
  return {
    type: 'select_card',
    payload: {
      "word": word,
      "match": match
    }
  };
};

export const resetCards = () => {
  return {
    type: 'reset'
  }
}

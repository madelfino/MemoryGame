export const selectCard = (cardId) => {
  return {
    type: 'select_card',
    payload: cardId
  };
};

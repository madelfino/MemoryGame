import data from './words.json';

export default () => {
  const categories = [];
  for (id in data) {
    if (data[id].words.length >= 10) {
      categories.push(data[id].category);
    }
  }
  return categories;
}

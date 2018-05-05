import data from './words.json';

export default () => {
  const categories = [];
  for (id in data) {
    categories.push(data[id].category);
  }
  return categories;
}
